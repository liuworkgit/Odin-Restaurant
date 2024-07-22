import makeElement from './elem-factory';

/**
 * Creates the content for the contact us page.
 */
export default function makeContact() {
    document.getElementById('content').append(
        makeElement('h1', 'Contact Us'),
        makeElement('p', 'Phone: XXX-XXX XXXX'),
        makeElement('p', 'Email: fakeemail@website.com'),
        makeElement('h2', 'Credits'),
        makeElement('p', 'Webpack logo from Official Webpack documentation.')
    );
};