import makeElement from './elem-factory';

/**
 * Creates the content of the home page.
 */
export default function makeHomePg() {
    document.getElementById('content').append(
        makeElement('h1', 'Odin Restaurant'),
        makeElement('p', 'Delicious knowledge-filled dishes at the click of a button.'),
        makeElement('h2', 'High quality and ready-to-eat.'),
        makeElement('p', 'We at Odin Restaurant know your diet matters, which is why we make our dishes with only the most informative resources and ingredients.')
    );
};