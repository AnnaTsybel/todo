export default function aside(name) {
    let user = JSON.parse(localStorage.getItem('users'));
    console.log(user)

    if (name !== 'login-enter' && name !== 'login-registration' || !name) {

        function createElement(tag, className) {
            const element = document.createElement(tag);

            if (className) {
                element.classList.add(className);
            }

            return element;
        }
        const aside = createElement('aside', 'aside');
        const asideMenu = createElement('div', 'menu-user');
        asideMenu.setAttribute('id', 'aside');
        const asideMenuUserPhoto = createElement('div', 'menu-user__photo-user');
        const asideMenuUserPhotoImg = createElement('img');
        if (user.photo) {
            asideMenuUserPhotoImg.setAttribute('src', user.photo)
        } else {
            asideMenuUserPhotoImg.setAttribute('src', '../../../../static/images/dest/no_avatar.png')
        }

        asideMenuUserPhoto.appendChild(asideMenuUserPhotoImg);
        const asideMenuStatsFirst = createElement('ul', 'menu-user__stats');
        const asideMenuStatsSecond = createElement('ul', 'menu-user__stats');
        const menuFirst = [{
                icon: "icon-home",
                name: 'home',
                id: '/home',
                class: 'links-to'
            },
            {
                icon: "icon-project",
                name: 'project',
                id: '/project',
                class: 'links-to'
            },
            {
                icon: "icon-calendar",
                name: 'calendar',
                id: '/calendar',
                class: 'links-to'
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
                name: 'Settings ',
                id: '/settings',
                class: 'links-to'
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
                console.log()
                if (array[i].id) {
                    asideMenuStatsFirstLink.setAttribute('id', `${array[i].id}`);
                }


                asideMenuStatsFirstLi.appendChild(asideMenuStatsFirstLink)
                menu.appendChild(asideMenuStatsFirstLi);
            }


        }
        createMenu(asideMenuStatsFirst, menuFirst);
        createMenu(asideMenuStatsSecond, menuSecond);
        asideMenu.append(asideMenuUserPhoto, asideMenuStatsFirst, asideMenuStatsSecond);
        aside.appendChild(asideMenu);
        return aside;
    }
}