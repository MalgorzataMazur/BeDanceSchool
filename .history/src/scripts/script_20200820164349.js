const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const links = document.querySelector('.navigation__link');

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





// const showNavbar = () => {
//     navigation.classList.toggle("navigation__list--active");
//     hamburgerButton.classList.toggle("hamburger--active");
// };

// hamburger.addEventListener("click", showNavbar);


// links.forEach(link => {
//     link.addEventListener("click", () => {
//         navigation.classList.remove("navigation__list--active");
//         hamburger.classList.remove("hamburger--active");
//     });
// });