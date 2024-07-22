import makeElement from './elem-factory';

/**
 * Creates the content of the menu page.
 */
export default function makeMenuPg() {
       document.getElementById('content').append(
              makeElement('h1', 'Menu'),
              makeElement('h2', 'Plugins and Loaders Spaghetti'),
              makeMenuImg(),
              makeElement('p', 'An excellent way to enhance the tastiness of your project with different dependencies! Allows you to modify how you make your project.'),
              makeElement('h2', 'HTML Webpack Plugin Pudding'),
              makeMenuImg(),
              makeElement('p', 'Want to dynamically cook up an HTML file? This is how! Just toss in a template and let the plugin do the work for you.')
       )
};

/**
 * Creates the image elements of the menu page.
 */
function makeMenuImg() {
       let img = document.createElement('img');
       img.setAttribute('src', '/Users/sen/Desktop/COMPUTER STUFF/webdev/odin-restaurant/src/assets/webpack-icon.jpg');
       img.setAttribute('alt', 'Webpack logo');
       img.setAttribute('height', '300px');
       img.setAttribute('width', '300px');
       return img;
};