const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');
const link = document.querySelector('.navigation__item');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation__list--active');
}

hamburger.addEventListener('click', handleClick); 

link.forEach(function(nav) => {
    link.addEventListener('click', function () {
        nav.classList.remove("navigation__list--active");
    })
});
// link.addEventListener('click', function () {
//     nav.classList.remove("navigation__list--active");
// }); 



