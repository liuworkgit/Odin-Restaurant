import makeContact from './page-scripts/contact-page';
import makeHomePg from './page-scripts/home-page';
import makeMenuPg from './page-scripts/menu-page';

/**
 * Clears the contents of the content div.
 */
function clearDiv() {
    let div = document.getElementById("content");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    };
};

console.log('Build successful.');