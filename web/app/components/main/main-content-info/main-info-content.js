export default function mainInfo(name) {
    if (name !== 'login-enter' && 'login-registration') {
        const mainInfoContent = document.createElement('div');
        mainInfoContent.classList.add('main-info__content')

        return mainInfoContent;
    }
}