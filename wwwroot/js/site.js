// Query selectors
const mainMenu = document.querySelector('.navbar-collapse');
const mainMenuToggle = document.querySelector('#main-menu-toggle');



// Toggle mobile menu + change WAI-ARIA
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



// Correct WAI-ARIA on resize
window.onresize = () => {
    if (window.innerWidth <= 812) {
        mainMenu.style.display = 'none';
        mainMenu.setAttribute('aria-hidden', 'true');
        mainMenuToggle.setAttribute('aria-hidden', 'false');
        mainMenuToggle.setAttribute('aria-expanded', 'false');
    } else {
        mainMenu.setAttribute('aria-hidden', 'false');
        mainMenuToggle.setAttribute('aria-hidden', 'true');
        mainMenuToggle.setAttribute('aria-expanded', 'true');
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