export default function button() {
    function createElement(tag, className) {

        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    const name = 'calendar';
    let buttons = [{
        id: 'button-calendar',
        classes: 'section-info__button',
        text: 'Change',
        page: 'calendar',
        parent: 'section-info'
    }]

    function buttonCreate(elements) {
        let arr = [];
        elements.forEach(function(el) {
            if (el.page === name) {
                const sectionInfoButton = createElement('button', el.classes);
                sectionInfoButton.innerHTML = el.text;
                sectionInfoButton.setAttribute('id', el.id);
                arr.push(sectionInfoButton);
            }

        })
        return arr;
    }

    let hi2 = buttonCreate(buttons);
    return hi2;
}