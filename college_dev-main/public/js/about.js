
const aboutHeading = document.querySelectorAll('.about-heading');
const article = document.querySelectorAll('article');

for (let i = 0; i < aboutHeading.length; i++) {
    let heading = aboutHeading[i];
    heading.addEventListener('click', () => {
        for (let j = 0; j < aboutHeading.length; j++) {
            aboutHeading[j].classList.remove('active-heading');
            article[j].classList.remove('active-article');
        }
        heading.classList.add('active-heading');
        article[i].classList.add('active-article');
    });
}
