const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const link = document.querySelector('.navigation__item');
console.log(link);
// const links = document.getElementsByClassName('.navigation__link');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation__list--active');
    // link.classList.toggle('navigation__');
}

hamburger.addEventListener('click', handleClick); 
// link.addEventListener('click', () => {console.log('hello');} ); 
link.classList.remove("navigation__list");
// link.addEventListener('click', handleClick) {
//     function sayHello() {
//         console.log("Hello Console!");
//     }
// }
