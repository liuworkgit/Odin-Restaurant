import makeContact from './page-scripts/contact-page';
import makeHomePg from './page-scripts/home-page';
import makeMenuPg from './page-scripts/menu-page';

document.getElementById('home-btn').addEventListener(
    'click',
    function () {
        clearDiv();
        makeHomePg();
    },
    false
);
document.getElementById('menu-btn').addEventListener(
    'click',
    function () {
        clearDiv();
        makeMenuPg();
    },
    false
);
document.getElementById('contact-btn').addEventListener(
    'click',
    function () {
        clearDiv();
        makeContact();
    },
    false
);

makeHomePg();
console.log('Build successful.');

// **********************************************
// FUNCTIONS

/**
 * Clears the contents of the content div.
 */
function clearDiv() {
    let div = document.getElementById('content');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    };
};