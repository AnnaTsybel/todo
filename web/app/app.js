import localStorageUser from './components/localstorage/user.js';
import localStorage from './components/localstorage/tasks.js';
import main from './components/main/main.js';
import header from './components/header/header.js';
import aside from './components/aside/aside.js';
import mainInfo from './components/main/main-content-info/main-info-content.js';
import button from './components/buttons/button.js';
import modalCreate from './components/modal/modal-create.js';
import sectionInfo from './components/main/main-content-info/components/section-info/main-content-section-info.js';
import contentMain from './components/main/main-content-info/components/content/content.js';
import dropdownCreate from './components/dropdown/dropdown-create.js';
import dropdown from './components/dropdown/dropdown.js';
import password from './components/password/password.js';
import themes from './components/theme/theme.js';
import createSlider from './components/slider/createslider.js';
import slider from './components/slider/slider.js';
import modal from './components/modal/modal.js';
import router from './components/router/router.js';
import calendarModel from './components/calendar/Model.js';
import calendarView from './components/calendar/View.js';
import calendarController from './components/calendar/Controller.js';
import taskModel from './components/tasks/Model.js';
import taskView from './components/tasks/View.js';
import taskController from './components/tasks/Controller.js';
//local storages
const local = localStorage();
const localUser = localStorageUser();

//layout main components
const mains = main();
const root = document.querySelector('.root');
root.append(mains)
const createModals = modalCreate();
createModals.forEach(function(el) {
    root.append(el)
})
const headers = header();

const theme = themes();

document.addEventListener("DOMContentLoaded", theme);

const asides = aside();

const sectionInfosElem = [...dropdownCreate(), ...button()]

let sectionInfos = sectionInfo(sectionInfosElem);
const content = [sectionInfos, contentMain()]
const b = [...content]

const mainInfos = mainInfo(b);

const drop = dropdown();
const name = 'home';


if (name === 'calendar') {
    const modelCalendar = new calendarModel();
    const viewCalendar = new calendarView(modelCalendar);
    const controllerCalendar = new calendarController(modelCalendar, viewCalendar);
} else if (name === 'tasks') {
    const modelTask = new taskModel();
    const viewTask = new taskView(modelTask);
    const controllerTask = new taskController(modelTask, viewTask);
}
const sliders = slider();
const modals = modal();

//const pass = password();