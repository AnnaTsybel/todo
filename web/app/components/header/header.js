export default function header() {
    let user = JSON.parse(localStorage.getItem('users'));
    const name = 'login-enter';
    if (name !== 'login-enter' && 'login-registration') {
        function createElement(tag, className) {
            const element = document.createElement(tag);

            if (className) {
                element.classList.add(className);
            }

            return element;
        }
        const header = document.querySelector('.header');

        const headerInfo = createElement('div', 'header__info');
        const headerHelp = createElement('a', 'header__help');
        const headerHelpIcon = createElement('span', 'icon-help');
        headerHelp.appendChild(headerHelpIcon)
        const headerNotification = createElement('a', 'header__notification');
        const headerNotificationIcon = createElement('span', 'icon-notification');
        headerNotification.appendChild(headerNotificationIcon);
        const headerProfile = createElement('a', 'header__profile-change');
        headerProfile.innerHTML = `${user.name} ${user.surname}`;
        headerInfo.append(headerHelp, headerNotification, headerProfile);

        const headerChangeTheme = createElement('div', 'header__change-theme');

        const headerChangeThemeDark = createElement('input');
        headerChangeThemeDark.setAttribute('type', 'radio');
        headerChangeThemeDark.setAttribute('id', 'dark');
        headerChangeThemeDark.setAttribute('value', 'dark');
        headerChangeThemeDark.setAttribute('name', 'themes');
        const headerChangeThemeDarkLabel = createElement('label', 'themes');
        headerChangeThemeDarkLabel.classList.add('dark')
        headerChangeThemeDarkLabel.setAttribute('for', 'dark')

        const headerChangeThemeBackground = createElement('div', 'header__button-background');
        const headerChangeThemeLight = createElement('input');
        headerChangeThemeLight.setAttribute('type', 'radio');
        headerChangeThemeLight.setAttribute('id', 'light');
        headerChangeThemeLight.setAttribute('value', 'light');
        headerChangeThemeLight.setAttribute('name', 'themes');
        const headerChangeThemeLightLabel = createElement('label', 'themes');
        headerChangeThemeLightLabel.classList.add('light')
        headerChangeThemeLightLabel.setAttribute('for', 'light')
        headerChangeTheme.append(headerChangeThemeLight, headerChangeThemeDarkLabel, headerChangeThemeBackground, headerChangeThemeDark, headerChangeThemeLightLabel)

        header.append(headerInfo, headerChangeTheme);

    }
}