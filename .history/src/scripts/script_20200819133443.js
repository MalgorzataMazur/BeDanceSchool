const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    hamburger.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick); 