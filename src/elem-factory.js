/**
 * Creates elements of the given type and with the given content.
 * @param {String} type - the element's type.
 * @param {String} content - the content of the element.
 * @returns HTMLElement
 */
export default function makeElement(type, content) {
    let elem = document.createElement(type);
    elem.innerHTML = content;
    return elem;
};