const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const links = document.querySelector('.navigation__link');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation__list--active');
}

hamburger.addEventListener('click', handleClick); 

