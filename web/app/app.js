//local storages
import localStorageUser from './components/localstorage/user.js';
import localStorage from './components/localstorage/tasks.js';


//layot basic
import main from './components/main/main.js';
import header from './components/header/header.js';
import aside from './components/aside/aside.js';

//themes
import themes from './components/theme/theme.js';

//components layout
import mainInf from './components/main/main-info.js';
import mainInfo from './components/main/main-content-info/main-info-content.js';
import button from './components/buttons/button.js';

//sections
import sectionInfo from './components/main/main-content-info/components/section-info/main-content-section-info.js';
import contentMain from './components/main/main-content-info/components/content/content.js';

//show password
import password from './components/password/password.js';

//dropdowns
import dropdownCreate from './components/dropdown/dropdown-create.js';
import dropdown from './components/dropdown/dropdown.js';

//slider
import slider from './components/slider/slider.js';

//modals
import modal from './components/modal/modal.js';
import modalCreate from './components/modal/modal-create.js';

import router from './components/router/router.js';

//calendar page
import calendarModel from './components/calendar/Model.js';
import calendarView from './components/calendar/View.js';
import calendarController from './components/calendar/Controller.js';

//settings page
import settingsModel from './components/settings/Model.js';
import settingsView from './components/settings/View.js';
import settingsController from './components/settings/Controller.js';

//tasks page
import taskModel from './components/tasks/Model.js';
import taskView from './components/tasks/View.js';
import taskController from './components/tasks/Controller.js';
//login page
import loginPage from './components/main/main-content-info/components/login-page.js';

//local storages
const local = localStorage();
const localUser = localStorageUser();

//get tag for adding content
const root = document.querySelector('.root');

window.addEventListener('load', function(el) {
    let currentPath = window.location.pathname;
    console.log(currentPath)
    if (currentPath === '/') {
        root.append(...modalCreate(), pagesGenerate());
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', function() {
                onNavigate('/login-enter');
            })
        }
        let links = document.querySelectorAll('.links-to');
        console.log(links);
        links.forEach(function(el) {
            const ids = el.getAttribute('id')
            console.log(ids);
            el.addEventListener('click', function() {
                onNavigate(ids);
            })
        })
    } else {

        root.append(...modalCreate(currentPath), pagesGenerate());
        contentGenerated(routes[pathname]);
        generatePageContent(routes[pathname]);
    }
})

//function to generate simple layout for calendar,home,project and setting pages
function pagesGenerate() {

    //get header and content in main layout
    const mainIn = mainInf(header(), mainInfo());

    //get aside layout
    const asides = aside();

    //add all elements in wrapper
    const content = [asides, mainIn]

    return main(content);
}

function contentGenerated(name) {
    //get content tag
    const mains = document.querySelector('.main-info__content');

    //delete all content in it
    mains.innerHTML = '';

    //create section info tag
    const sectionInfosElem = [...dropdownCreate(name), ...button(name)]
    const sectionInfos = sectionInfo(name, sectionInfosElem);

    //append it to content tag
    mains.append(sectionInfos, contentMain(name));
}

function generatePageContent(name) {
    //append modals
    root.append(...modalCreate(name));

    //create theme 
    const theme = themes();
    document.addEventListener("DOMContentLoaded", theme);

    //add dropdowns script
    const drop = dropdown(name);

    //add modals script
    const modals = modal(name);

    //add content in pages depending on page
    if (name === 'calendar') {
        const modelCalendar = new calendarModel();
        const viewCalendar = new calendarView(modelCalendar);
        const controllerCalendar = new calendarController(modelCalendar, viewCalendar);
    } else if (name === 'project') {
        const modelTask = new taskModel();
        const viewTask = new taskView(modelTask);
        const controllerTask = new taskController(modelTask, viewTask);
    } else if (name === 'settings') {
        const modelSettings = new settingsModel();
        const viewSettings = new settingsView(modelSettings);
        const controllerSettings = new taskController(modelSettings, viewSettings);
    } else if (name === 'home') {
        const sliders = slider();
    }

}


const routes = {
    '/login-enter': 'login-enter',
    '/login-registration': 'login-registration',
    '/home': 'home',
    '/settings': 'settings',
    '/project': 'project',
    '/calendar': 'calendar'
};

//get current pathname


//function to navigate on pages
const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname
    )

    if (routes[pathname] === 'login-enter' || routes[pathname] === 'login-registration') {
        root.innerHTML = '';
        root.append(loginPage(routes[pathname]));
    } else {
        contentGenerated(routes[pathname]);
        generatePageContent(routes[pathname]);
    }
    return pathname;
};

//add history of opened pages to draw them if user goes to previous page or next page
window.onpopstate = () => {
    root.append(contentGenerated(routes[window.location.pathname]));
    generatePageContent(routes[window.location.pathname]);
};


/** 
if (pathes > 1) {
    for (let i = 0; i < pathes.length; i++) {
        console.log(pathes[i]);
        let curr = pathes[i];
        curr.addEventListener('click', function(el) {
            let id = curr.getAttribute('id');
            onNavigate(id);
        })

    }
} else if (pathes.lenth < 1) {
    pathes[0].addEventListener('click', function(el) {

        let id = pathes[0].getAttribute('id');
        onNavigate(id);
        console.log(id)
        if (id === '/login-registration') {
            pathes[0].setAttribute('id', '/login-enter')
            console.log(pathes[0])
        }
    })
}
let buttons = document.getElementById('/home');
let form = document.querySelector('.login-page__form');

if (buttons) {
    console.log(1)
    form.addEventListener('submit', (e) => e.preventDefault())
    buttons.addEventListener('click', (e) => {
        let a = buttons.getAttribute('id')
        console.log(1222)
        onNavigate(a);

    })
}*/