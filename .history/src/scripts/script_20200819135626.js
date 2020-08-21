const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('main--active');
}

hamburger.addEventListener('click', handleClick); 