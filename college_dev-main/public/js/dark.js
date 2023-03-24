

// theme toggler
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {

    const body = document.body;
    if (body) {
        body.classList.toggle('dark-mode');
    }

    const featuredItems = document.querySelector('.featured_items');
    if (featuredItems) {
        featuredItems.classList.toggle('dark-mode-item');
    }

    const textbookListings = document.querySelector('.textbook_listings');
    if (textbookListings) {
        textbookListings.classList.toggle('dark-mode-item');
    }
    const contact_container = document.querySelector('.contact-container');
    if (contact_container) {
        contact_container.classList.toggle('dark-mode-item');
    }

    const cart_popup = document.querySelector('.cart-popup');
    if (cart_popup) {
        cart_popup.classList.toggle('dark-mode-item');
    }


    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.classList.toggle('dark-mode');
        });
    }
    const blogsPosts = document.querySelectorAll('.blog-post');
    if (blogsPosts.length > 0) {
        blogsPosts.forEach(blogPost => {
            blogPost.classList.toggle('dark-mode-item');
        });
    }
    const cart_items = document.querySelectorAll('.cart-items li');
    if (cart_items.length > 0) {
        cart_items.forEach(cart_item => {
            cart_item.classList.toggle('dark-mode');
        });
    }
    const courses_lists = document.querySelectorAll('.courses_list');
    if (courses_lists.length > 0) {
        courses_lists.forEach(courses_list => {
            courses_list.classList.toggle('dark-mode');
        });
    }
    const sub_courses_lists = document.querySelectorAll('.sub_courses_list');
    if (sub_courses_lists.length > 0) {
        sub_courses_lists.forEach(sub_courses_list => {
            sub_courses_list.classList.toggle('dark-mode-item');
        });
    }
    const sidebar_ul_lis = document.querySelectorAll('aside li');
    if (sidebar_ul_lis.length > 0) {
        sidebar_ul_lis.forEach(sidebar_ul_li => {
            sidebar_ul_li.classList.toggle('dark-mode-item');
        });
    }


});