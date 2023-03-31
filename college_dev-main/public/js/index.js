
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

var coursetoremove = document.querySelectorAll('li a[href="/courses"]');
coursetoremove.forEach(function (element) {
    element.parentNode.remove();
});

var profile_name_signbar = document.querySelector('.navbar-signin a');
var profile_name_signbar_url = '/profile';
// var stored_profile_name = localStorage.getItem('profile_name');
if (localStorage.getItem('profile_name') != '' && localStorage.getItem('profile_name')) {
    profile_name_signbar.textContent = localStorage.getItem('profile_name');
    profile_name_signbar.href = profile_name_signbar_url;
    profile_name_signbar.title = 'Profile';
} else if (localStorage.getItem('profile_name') === null || localStorage.getItem('profile_name') == '') {
    profile_name_signbar.textContent = 'Sign In / Sign Up';
    profile_name_signbar.href = '/login';
}




