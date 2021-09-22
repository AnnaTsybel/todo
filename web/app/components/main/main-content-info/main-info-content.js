export default function mainInfo(elements) {
    const name = 'settings';
    if (name !== 'login-enter' && 'login-registration') {
        const mainInfoContent = document.querySelector('.main-info__content');
        elements.forEach(element => {
            mainInfoContent.append(element);
        });
    }
}