

// theme toggler
// const themeToggle = document.querySelector('#theme-toggle');

// themeToggle.addEventListener('click', () => {

//     const body = document.body;
//     if (body) {
//         body.classList.toggle('dark-mode');
//     }

//     const featuredItems = document.querySelector('.featured_items');
//     if (featuredItems) {
//         featuredItems.classList.toggle('dark-mode-item');
//     }

//     const textbookListings = document.querySelector('.textbook_listings');
//     if (textbookListings) {
//         textbookListings.classList.toggle('dark-mode-item');
//     }
//     const contact_container = document.querySelector('.contact-container');
//     if (contact_container) {
//         contact_container.classList.toggle('dark-mode-item');
//     }

//     const cart_popup = document.querySelector('.cart-popup');
//     if (cart_popup) {
//         cart_popup.classList.toggle('dark-mode-item');
//     }


//     const cards = document.querySelectorAll('.card');
//     if (cards.length > 0) {
//         cards.forEach(card => {
//             card.classList.toggle('dark-mode');
//         });
//     }
//     const blogsPosts = document.querySelectorAll('.blog-post');
//     if (blogsPosts.length > 0) {
//         blogsPosts.forEach(blogPost => {
//             blogPost.classList.toggle('dark-mode-item');
//         });
//     }
//     const cart_items = document.querySelectorAll('.cart-items li');
//     if (cart_items.length > 0) {
//         cart_items.forEach(cart_item => {
//             cart_item.classList.toggle('dark-mode');
//         });
//     }
//     const courses_lists = document.querySelectorAll('.courses_list');
//     if (courses_lists.length > 0) {
//         courses_lists.forEach(courses_list => {
//             courses_list.classList.toggle('dark-mode');
//         });
//     }
//     const sub_courses_lists = document.querySelectorAll('.sub_courses_list');
//     if (sub_courses_lists.length > 0) {
//         sub_courses_lists.forEach(sub_courses_list => {
//             sub_courses_list.classList.toggle('dark-mode-item');
//         });
//     }
//     const sidebar_ul_lis = document.querySelectorAll('aside li');
//     if (sidebar_ul_lis.length > 0) {
//         sidebar_ul_lis.forEach(sidebar_ul_li => {
//             sidebar_ul_li.classList.toggle('dark-mode-item');
//         });
//     }
//     const chat_container = document.querySelectorAll('.chat-container');
//     if (chat_container.length > 0) {
//         chat_container.forEach(element => {
//             element.classList.toggle('gradient-dark-mode');
//         });
//     }
//     const message_form = document.querySelectorAll('#message-form');
//     if (message_form.length > 0) {
//         message_form.forEach(element => {
//             element.classList.toggle('gradient-dark-mode');
//         });
//     }




// });
// const header = document.querySelectorAll('header');
// if (header.length > 0) {
//     header.forEach(element => {
//         element.classList.toggle('gradient-dark-mode');
//     });
// }
// const footer = document.querySelectorAll('footer');
// if (footer.length > 0) {
//     footer.forEach(element => {
//         element.classList.toggle('gradient-dark-mode');
//     });
// }

const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// retrieve the theme preference from local storage
const savedTheme = localStorage.getItem('theme');

// set the theme on page load
if (savedTheme) {
    body.classList.add(savedTheme);
    setThemeOnElements(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    setThemeOnElements(theme);
    localStorage.setItem('theme', theme);
});

function setThemeOnElements(theme) {
    const featuredItems = document.querySelector('.featured_items');
    if (featuredItems) {
        featuredItems.classList.toggle('dark-mode-item', theme === 'dark-mode');
    }

    const textbookListings = document.querySelector('.textbook_listings');
    if (textbookListings) {
        textbookListings.classList.toggle('dark-mode-item', theme === 'dark-mode');
    }


    const contact_message_container = document.querySelector('.contact_message-container');
    if (contact_message_container) {
        contact_message_container.classList.toggle('gradient-dark-mode', theme === 'dark-mode');
    }

    const cart_popup = document.querySelector('.cart-popup');
    if (cart_popup) {
        cart_popup.classList.toggle('dark-mode-item', theme === 'dark-mode');
    }

    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.classList.toggle('dark-mode', theme === 'dark-mode');
        });
    }

    const contact_container = document.querySelector('.contact-container');
    if (contact_container) {
        contact_container.classList.toggle('dark-mode-item', theme === 'dark-mode');
    }
    const contact_container_child1 = document.querySelector('.card-social');
    if (contact_container_child1) {
        contact_container_child1.classList.toggle('alight-dark-mode', theme === 'dark-mode');
    }
    const contact_container_child2 = document.querySelector('.card-email');
    if (contact_container_child2) {
        contact_container_child2.classList.toggle('alight-dark-mode', theme === 'dark-mode');
    }
    const contact_container_child3 = document.querySelector('.card-phone');
    if (contact_container_child3) {
        contact_container_child3.classList.toggle('alight-dark-mode', theme === 'dark-mode');
    }
    const contact_container_child4 = document.querySelector('.card-address');
    if (contact_container_child4) {
        contact_container_child4.classList.toggle('alight-dark-mode', theme === 'dark-mode');
    }

    const blogsPosts = document.querySelectorAll('.blog-post');
    if (blogsPosts.length > 0) {
        blogsPosts.forEach(blogPost => {
            blogPost.classList.toggle('dark-mode-item', theme === 'dark-mode');
        });
    }

    const cart_items = document.querySelectorAll('.cart-items li');
    if (cart_items.length > 0) {
        cart_items.forEach(cart_item => {
            cart_item.classList.toggle('dark-mode', theme === 'dark-mode');
        });
    }

    const courses_lists = document.querySelectorAll('.courses_list');
    if (courses_lists.length > 0) {
        courses_lists.forEach(courses_list => {
            courses_list.classList.toggle('dark-mode', theme === 'dark-mode');
        });
    }

    const sub_courses_lists = document.querySelectorAll('.sub_courses_list');
    if (sub_courses_lists.length > 0) {
        sub_courses_lists.forEach(sub_courses_list => {
            sub_courses_list.classList.toggle('dark-mode-item', theme === 'dark-mode');
        });
    }

    const sidebar_ul_lis = document.querySelectorAll('aside li');
    if (sidebar_ul_lis.length > 0) {
        sidebar_ul_lis.forEach(sidebar_ul_li => {
            sidebar_ul_li.classList.toggle('dark-mode-item', theme === 'dark-mode');
        });
    }

    const chat_container = document.querySelectorAll('.chat-container');
    if (chat_container.length > 0) {
        chat_container.forEach(element => {
            element.classList.toggle('gradient-dark-mode', theme === 'dark-mode');
        });
    }

    const message_form = document.querySelectorAll('#message-form');
    if (message_form.length > 0) {
        message_form.forEach(element => {
            element.classList.toggle('gradient-dark-mode', theme === 'dark-mode');
        });
    }
    const profile_section = document.querySelectorAll('.profile-card');
    if (profile_section.length > 0) {
        profile_section.forEach(element => {
            element.classList.toggle('gradient-dark-mode', theme === 'dark-mode');
        });
    }
    const profile_info_items = document.querySelectorAll('.profile-info-item');
    if (profile_info_items.length > 0) {
        profile_info_items.forEach(element => {
            element.classList.toggle('color', theme === 'dark-mode');
        });
    }
}
