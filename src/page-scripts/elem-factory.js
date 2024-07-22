/**
 * Creates elements with the given type and content.
 * @param {String} type - The element's type.
 * @param {String} content - The element's content.
 * @returns HTMLElement
 */
export default function makeElement(type, content) {
    let elem = document.createElement(type);
    elem.innerHTML = content;
    return elem;
};