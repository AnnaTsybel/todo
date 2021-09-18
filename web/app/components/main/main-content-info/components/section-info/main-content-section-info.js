export default function sectionInfo(elements) {

    function createElement(tag, className) {

        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    function createSection(header, element) {
        const sectionInfo = createElement('div', 'section-info');
        sectionInfo.classList.add('section');
        const sectionInfoHeader = createElement('div', 'section-info__tittle');
        sectionInfoHeader.innerHTML = `${header}`;

        sectionInfo.append(sectionInfoHeader);
        element.forEach(function(el) {
            sectionInfo.append(el);
        })
        return sectionInfo;

    }

    let hi = createSection('Calendar', elements);
    return hi;
}