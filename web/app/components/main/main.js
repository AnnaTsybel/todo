export default function main() {
    function createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    const mainInfo = createElement('main', 'main-info');
    const mainInfoContent = createElement('div', 'main-info__content');
    const content = createElement('div', 'content');
    const aside = createElement('aside', 'aside');
    const header = createElement('header', 'header');


    mainInfo.append(header, mainInfoContent);
    content.append(aside, mainInfo);
    return content;

}