const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const hideMenu = document.querySelector('.navigation__list--active');

// const links = document.getElementsByClassName('.navigation__link');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation__list--active');
    link.classList.toggle('navigation__list--active');
}

hamburger.addEventListener('click', handleClick); 
// link.addEventListener('click', handleClick) {
//     function sayHello() {
//         console.log("Hello Console!");
//     }
// }
