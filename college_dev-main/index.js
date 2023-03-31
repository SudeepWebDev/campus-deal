var express = require('express');
var ejs = require('ejs')
var sql = require('mysql');
var bodyparser = require('body-parser')
var multer = require('multer');
var session = require('express-session')
const Stripe = require('stripe')('sk_test_51MGxLuSHVbOeShqKiIqH8vFPzUm2tQFzDBYI3Co67INqwumlLQ7tjMjuF4mGH8i6BfLt0uFs3Z6I0vPUXS9B7EYM00YLxgJLNo');
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
var generatedOTP;
var generatedOTP = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
var conn = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_project'
})

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }))
app.use(session({ secret: 'secret' }))


function isproductincart(cart, id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            return true;
        }
    }
    return false;
}

function calculateTotal(cart, req) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].price * cart[i].quantity)
    }

    req.session.total = total;
    return total
}

var upload = multer({ storage: multer.memoryStorage() })

app.post('/subscribe', (req, res) => {
    var email = req.body.email;
    conn.connect((e) => {
        if (e) throw e;
        var query = "INSERT INTO newsletter(email) VALUES('" + email + "')";
        conn.query(query, (err, result) => {
            if (err) throw err;
            res.send("you are subscribed to our news letter" + result.insertId);
        })
    })

})

app.post("/register", async (req, res) => {
    var email = req.body.email;
    var college = req.body.clg;
    var password = req.body.pass;
    var cpass = req.body.cpass;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var gender = req.body.mygender;
    var year = req.body.sem;
    var roll = req.body.roll;
    var age = req.body.age;
    var course = req.body.Course;
    var phno = req.body.phno;
    var address = req.body.address;

    conn.query('SELECT * FROM user WHERE college_roll_no = ?', [roll], (err, result) => {
        if (result[0]) return res.json({ error: 'roll number already in use' })
        else if (password != cpass) {
            return res.json({ error: 'password does not match' })
        }
        else {
            var query = "INSERT INTO user(first_name,last_name,Email,Password,Confirmpass,Gender,Age,College,college_roll_no,Course,Year,phno,address) VALUES('" + fname + "','" + lname + "','" + email + "','" + password + "','" + cpass + "','" + gender + "','" + age + "','" + college + "','" + roll + "','" + course + "','" + year + "','" + phno + "','" + address + "')";
            conn.query(query, (err, result) => {
                if (err) throw err;

                // Send OTP via email
                let transporter = nodemailer.createTransport({
                    host: "smtp.office365.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "sudeepkumarsingh2003@outlook.com",
                        pass: "government@1822"
                    }
                });

                let mailOptions = {
                    from: '"Campus Deal ADMIN" <sudeepkumarsingh2003@outlook.com>',
                    to: email,
                    subject: 'OTP for registration',
                    text: 'Your OTP for registration is ' + generatedOTP,
                    html: '<b>Your OTP for registration is ' + generatedOTP + '</b>'
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        res.json({ error: 'Failed to send OTP' });
                    } else {
                        console.log('Message %s sent: %s', info.messageId, info.response);
                        res.redirect('/otp');
                    }
                })
            })
        }
    })
})

app.post('/login', (req, res) => {
    var email = req.body.email;
    var roll = req.body.roll;

    conn.query('SELECT * FROM user WHERE Email = ? and college_roll_no = ?', [email, roll], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            var user = JSON.parse(JSON.stringify(result[0]))
            req.session.user = user;
            res.redirect('/profile');

        } else {
            res.send('Invalid credentials')
        }
    })
})

app.post("/otp", async (req, res) => {
    const userOTP = req.body.otp;
    if (userOTP.toString() == generatedOTP.toString()) {
        // OTP verification successful
        //   res.send("Email verified successfully");
        //   res.redirect('/login');
        res.redirect('/login?message=success');
    } else {
        // OTP verification failed
        res.send("Incorrect OTP. Please try again.");
    }
});

app.post('/add_to_cart', (req, res) => {
    var name = req.body.name
    var quantity = req.body.quantity
    var id = req.body.id
    var price = req.body.price
    var image = req.body.image
    var product = { id: id, name: name, price: price, quantity: quantity, image: image }

    if (req.session.cart) {
        var cart = req.session.cart;
        if (!isproductincart(cart, id)) {
            cart.push(product);
        }
    } else {
        req.session.cart = [product];
        var cart = req.session.cart;
    }
    calculateTotal(cart, req);
    res.status(204).send();
})

app.post('/remove_product', (req, res) => {
    console.log(req.body);
    var id = req.body.id;
    var cart = req.session.cart;

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id == id) {
            cart.splice(cart.indexOf(i), 1);
        }
    }
    calculateTotal(cart, req);
    res.redirect('/cart');
})

app.post('/edit_product', (req, res) => {
    var id = req.body.id;
    var quantity = req.body.quantity;
    var increase_btn = req.body.addbtn;
    var decrease_btn = req.body.removebtn

    //console.log(req.body);

    var cart = req.session.cart;
    if (increase_btn) {
        // console.log(increase_btn);
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                if (cart[i].quantity > 0) {
                    cart[i].quantity = parseInt(cart[i].quantity) + 1;
                }
            }
        }
    }

    if (decrease_btn) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                if (cart[i].quantity > 1) {
                    cart[i].quantity = parseInt(cart[i].quantity) - 1;
                }
            }
        }
    }

    calculateTotal(cart, req);
    res.redirect('/cart');
})

app.post('/create-checkout-session', async (req, res) => {
    if (!req.session.user) {
        res.redirect('/login')
    } else {
        var cart = req.session.cart;

        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',

            line_items: cart.map((item) => {
                const img = item.image;
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.name,
                            images: [img],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity
                }
            }),

            success_url: `http://localhost:7000/success?message=success`,
            cancel_url: `http://localhost:7000/canceled`,

        }

        const session = await Stripe.checkout.sessions.create(params);

        res.redirect(303, session.url);
    }

});

app.post('/contact', (req, res) => {

    var email = req.body.email;
    var name = req.body.name;
    var message = req.body.message;

    var query = "INSERT INTO contact(Name,email,message) VALUES('" + name + "','" + email + "','" + message + "')";

    conn.query(query, (err, result) => {
        if (err) throw err;
    })
    res.redirect('/contact');

})


app.post('/userchat', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login?login=first')
    } else {
        var name = req.body.name;
        var email = req.body.email;
        var rollno = req.body.rollno;
        var text = req.body.text;
        var time = req.body.time;
        var query = "INSERT INTO userchat(name,email,rollno,text, time) VALUES('" + name + "','" + email + "','" + rollno + "','" + text + "','" + time + "')";
        conn.query(query, (err, userresult) => {
            if (err) throw err;
        })
        res.redirect('/userchat');
    }
})
app.post('/admin', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login?login=first')
    } else {
        var admin = req.body.admin;
        var email = req.body.email;
        var phno = req.body.phno;
        var text = req.body.text;
        var time = req.body.time;
        var sendtouser = req.body.sendtouser;
        var query = "INSERT INTO adminchat(admin,email,phno,text, time,sendtouser) VALUES('" + admin + "','" + email + "','" + phno + "','" + text + "','" + time + "','" + sendtouser + "')";
        conn.query(query, (err, adminresult) => {
            if (err) throw err;
        });
        res.redirect('/admin');
    }
})
app.post('/adminaddproducts', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login?login=first')
    } else {
        var Name = req.body.Name;
        var description = req.body.description;
        var quantity = req.body.quantity;
        var price = req.body.price;
        var image = req.body.image;
        var category = req.body.category;
        var type = req.body.type;
        var query = "INSERT INTO products(Name,description,quantity,price, image,category,type) VALUES('" + Name + "','" + description + "','" + quantity + "','" + price + "','" + image + "','" + category + "','" + type + "')";
        conn.query(query, (err, products) => {
            if (err) throw err;
        });
        res.redirect('/admin');
    }
})


app.get('/login', (req, res) => {
    res.render('pages/login');
})

app.get('/', (req, res) => {
    var user = req.session.user
    conn.query("SELECT * FROM products", (err, result) => {
        res.render('pages/index', { result: result, user: user });
    })

})
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            Console.log(err)
        }
        res.redirect('/login')
    })
})

app.get('/register', (req, res) => {
    res.render('pages/register');
})
app.get('/adminaddproducts', (req, res) => {
    res.render('pages/admin');
})

app.get('/otp', function (req, res) {
    res.render('pages/otp');
});

app.get('/blogs', (req, res) => {
    res.render('pages/blog');
})

app.get('/logout', (req, res) => {
    res.redirect('/login');
})


app.get('/cart', (req, res) => {
    var cart = req.session.cart;
    var total = req.session.total;
    // console.log(cart.length());

    //console.log(cart)

    res.render('pages/cart', { cart: cart, total: total });
})

app.get('/success', (req, res) => {
    res.render('pages/success');
})

app.get('/cancelled', (req, res) => {
    res.render('pages/cancelled');
})

app.get('/contact', (req, res) => {
    res.render('pages/contact');
})

app.get('/trade', (req, res) => {
    conn.query("SELECT * FROM products", (err, result) => {
        res.render('pages/shop', { result: result });
    })
})

app.get('/about', (req, res) => {
    // var user = req.session.user;
    res.render('pages/about')

})

app.get('/courses', (req, res) => {
    res.render('pages/courses');

})



app.get('/profile', (req, res) => {
    Promise.all([
        new Promise((resolve, reject) => {
            conn.query("SELECT * FROM admindata", (err, admindata) => {
                if (err) reject(err);
                resolve(admindata);
            })
        }),
        new Promise((resolve, reject) => {
            conn.query("SELECT * FROM userchat", (err, userresult) => {
                if (err) reject(err);
                resolve(userresult);
            })
        })
    ]).then(([admindata, userresult]) => {
        const user = req.session.user;
        if (!user) {
            return res.redirect('/login?login=first');
        }
        res.render('pages/profile', { admindata, userresult, user });
    }).catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred');
    });
});


app.get('/userchat', (req, res) => {
    Promise.all([
        new Promise((resolve, reject) => {
            conn.query("SELECT * FROM adminchat", (err, adminresult) => {
                if (err) reject(err);
                resolve(adminresult);
            })
        }),
        new Promise((resolve, reject) => {
            conn.query("SELECT * FROM userchat", (err, userresult) => {
                if (err) reject(err);
                resolve(userresult);
            })
        })
    ]).then(([adminresult, userresult]) => {
        const user = req.session.user;
        if (!user) {
            return res.redirect('/login?login=first');
        }
        res.render('pages/userchat', { adminresult, userresult, user });
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});


function requireAuth(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login?login=first');
    }
    if (req.session.user.college_roll_no !== '28021') {
        return res.redirect('/profile');
    }
    next();
}

app.get('/admin', requireAuth, (req, res) => {
    Promise.all([
        new Promise((resolve, reject) => {
            conn.query("SELECT * FROM adminchat", (err, adminresult) => {
                if (err) reject(err);
                resolve(adminresult);
            });
        }),
        new Promise((resolve, reject) => {
            conn.query("SELECT * FROM userchat", (err, userresult) => {
                if (err) reject(err);
                resolve(userresult);
            });
        })
    ]).then(([adminresult, userresult]) => {
        const user = req.session.user;
        if (!user) {
            return res.redirect('/login?login=first');
        }
        res.render('pages/admin', { adminresult: adminresult, userresult: userresult, user: user });
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});



app.listen(7000, () => {
    console.log('server is running at http://localhost:7000')
})
