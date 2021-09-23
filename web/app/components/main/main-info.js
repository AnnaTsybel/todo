export default function main(header, mainInfoContent) {

    function createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    const mainInfo = createElement('main', 'main-info');
    mainInfo.append(header, mainInfoContent);
    return mainInfo;

}