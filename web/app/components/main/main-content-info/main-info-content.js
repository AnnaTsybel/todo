export default function mainInfo(elements) {
    const mainInfoContent = document.querySelector('.main-info__content');
    elements.forEach(element => {
        mainInfoContent.append(element);
    });
}