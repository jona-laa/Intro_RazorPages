// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const mainMenu = document.querySelector('.navbar-collapse');
const mainMenuToggle = document.querySelector('#main-menu-toggle');



// Toggle mobile menu
$('#main-menu-toggle').click(function () {
    $('.navbar-collapse').toggle(100);

    if (mainMenu.getAttribute('aria-hidden') == 'false') {
        mainMenu.setAttribute('aria-hidden', 'true');
        mainMenuToggle.setAttribute('aria-expanded', 'false');
    } else {
        mainMenu.setAttribute('aria-hidden', 'false');
        mainMenuToggle.setAttribute('aria-expanded', 'true');
    }
});



// Make sure aria attributes are still correct on resize
window.onresize = () => {
    if (window.innerWidth < 812) {
        mainMenu.setAttribute('aria-hidden', 'true');
        mainMenuToggle.setAttribute('aria-hidden', 'false');
    } else {
        mainMenu.setAttribute('aria-hidden', 'false');
        mainMenuToggle.setAttribute('aria-hidden', 'true');
    }
}



/* Change display attribute of element
 * @param   {DOM element}   element     Target DOM element
 * @param   {string}        value       Display attribute value, e.g. 'none', 'block', etc.
*/
const elementDisplay = (element, value) => {
    element.style.display = value;
    value == 'none' ? toggleAria(element, 'aria-hidden', 'true') : toggleAria(element, 'aria-hidden', 'false');
};