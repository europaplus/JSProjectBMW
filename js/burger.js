document.addEventListener('DOMContentLoaded', () => {
    const menuElem = document.querySelector('.menu');
    const humburgerElem = document.querySelector('.humburger-menu');

    const toggleMenu = () => {
        menuElem.classList.toggle('menu-active');
        humburgerElem.classList.toggle('humburger-menu-active');
    };
    const closeMenu = () => {
        menuElem.classList.remove('menu-active');
    };

    humburgerElem.addEventListener('click', toggleMenu);
    menuElem.addEventListener('click', (event) => {
        if (menuElem.classList.contains('menu-active')) {
            closeMenu();
        }
    });
});