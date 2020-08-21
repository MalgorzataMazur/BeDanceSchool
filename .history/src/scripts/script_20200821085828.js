const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const links = document.querySelectorAll('.navigation__item');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation__list--active');
}

hamburger.addEventListener('click', handleClick); 

links.forEach(link => {
    link.addEventListener('click', function () {
        nav.classList.remove("navigation__list--active");
        hamburger.classList.remove('hamburger--active');

    })
});

