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

//layout main components
const name = 'settings';
const mains = main();
const root = document.querySelector('.root');
root.append(mains);

if (name === 'login-enter' || name === 'login-registration') {

    const loginPages = loginPage();
    const pass = password();

} else {

    //modals create
    const createModals = modalCreate();
    createModals.forEach(function(el) {
        root.append(el)
    });

    //header create
    const headers = header();

    //enter themes
    const theme = themes();
    document.addEventListener("DOMContentLoaded", theme);

    //aside create
    const asides = aside();

    //section info
    const sectionInfosElem = [...dropdownCreate(), ...button()]
    let sectionInfos = sectionInfo(sectionInfosElem);
    const content = [sectionInfos, contentMain()]
    const b = [...content]

    //main-content
    const mainInfos = mainInfo(b);
    //drop
    const drop = dropdown();

    const modals = modal();

}


if (name === 'calendar') {
    const modelCalendar = new calendarModel();
    const viewCalendar = new calendarView(modelCalendar);
    const controllerCalendar = new calendarController(modelCalendar, viewCalendar);
} else if (name === 'tasks') {
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