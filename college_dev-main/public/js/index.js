
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
}

// cart add to cart

// const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
// const cartIcon = document.querySelector('.cart-icon');
// const cartCount = document.querySelector('.cart-count');
// const cartPopup = document.querySelector('.cart-popup');
// const cartItems = document.querySelector('.cart-items');

// let itemCount = 0;
// const items = [];

// addToCartBtns.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         itemCount++;

//         cartCount.textContent = itemCount;
//     });
// });


// let backtotop = select('.back-to-top')
// if (backtotop) {
//     const toggleBacktotop = () => {
//         if (window.scrollY > 100) {
//             backtotop.classList.add('active')
//         } else {
//             backtotop.classList.remove('active')
//         }
//     }
//     window.addEventListener('load', toggleBacktotop)
//     onscroll(document, toggleBacktotop)
// }