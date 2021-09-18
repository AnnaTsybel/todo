export default function contentMain() {
    function createElement(tag, className) {

        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    const name = 'calendar';

    if (name === 'calendar') {
        let createElem = createElement('div', 'calendar-fill');
        return createElem;
    }



}