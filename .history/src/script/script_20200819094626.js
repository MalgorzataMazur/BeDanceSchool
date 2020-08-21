const hamburger = document.querySelector('.navigation__hamburger');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

hamburger.addEventListener('click', handleClick);