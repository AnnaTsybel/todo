export default function aside() {
    let user = JSON.parse(localStorage.getItem('users'));
    const name = 'settings'
    if (name !== 'login-enter' && name !== 'login-registration') {

        function createElement(tag, className) {
            const element = document.createElement(tag);

            if (className) {
                element.classList.add(className);
            }

            return element;
        }
        const aside = document.querySelector('.aside');
        const asideMenu = createElement('div', 'menu-user');
        asideMenu.setAttribute('id', 'aside');
        const asideMenuUserPhoto = createElement('div', 'menu-user__photo-user');
        const asideMenuUserPhotoImg = createElement('img');
        asideMenuUserPhotoImg.setAttribute('src', '../../../../static/images/dest/no_avatar.png')
        asideMenuUserPhoto.appendChild(asideMenuUserPhotoImg);
        const asideMenuStatsFirst = createElement('ul', 'menu-user__stats');
        const asideMenuStatsSecond = createElement('ul', 'menu-user__stats');
        const menuFirst = [{
                icon: "icon-home",
                name: 'home'
            },
            {
                icon: "icon-project",
                name: 'project'
            },
            {
                icon: "icon-calendar",
                name: 'calendar'
            }
        ];
        const menuSecond = [{
                icon: "icon-logout",
                href: '#modal-logout',
                class: 'modal-link',
                name: 'Log out'
            },
            {
                icon: "icon-calendar",
                name: 'Settings '
            }
        ];

        function createMenu(menu, array) {
            for (let i = 0; i < array.length; i++) {
                const asideMenuStatsFirstLi = createElement('li');
                const asideMenuStatsFirstLink = createElement('a');
                const asideMenuStatsFirstIcon = createElement('span', `${array[i].icon}`);
                asideMenuStatsFirstLink.append(asideMenuStatsFirstIcon, `${array[i].name}`);


                if (array[i].href) {
                    asideMenuStatsFirstLink.setAttribute('href', `${array[i].href}`);
                } else {
                    asideMenuStatsFirstLink.setAttribute('href', '#');
                }
                if (array[i].class) {
                    asideMenuStatsFirstLink.classList.add(`${array[i].class}`);
                }


                asideMenuStatsFirstLi.appendChild(asideMenuStatsFirstLink)
                menu.appendChild(asideMenuStatsFirstLi);
            }


        }
        createMenu(asideMenuStatsFirst, menuFirst);
        createMenu(asideMenuStatsSecond, menuSecond);
        asideMenu.append(asideMenuUserPhoto, asideMenuStatsFirst, asideMenuStatsSecond);
        aside.appendChild(asideMenu);
    }
}