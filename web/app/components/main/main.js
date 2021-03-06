export default function main(elements) {

    function createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    const content = createElement('div', 'content');
    content.append(...elements);
    return content;



}