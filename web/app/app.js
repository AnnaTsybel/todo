import localStorage from './components/localstorage/tasks.js';
import dropdown from './components/dropdown/dropdown.js';
import password from './components/password/password.js';
import themes from './components/theme/theme.js';
import modal from './components/modal/modal.js';
import router from './components/router/router.js';
import calendarModel from './components/calendar/Model.js';
import calendarView from './components/calendar/View.js';
import calendarController from './components/calendar/Controller.js';
import taskModel from './components/tasks/Model.js';
import taskView from './components/tasks/View.js';
import taskController from './components/tasks/Controller.js';


const local = localStorage();

const drop = dropdown();

const modelCalendar = new calendarModel();
const viewCalendar = new calendarView(modelCalendar);
const controllerCalendar = new calendarController(modelCalendar, viewCalendar);

/*const modelTask = new taskModel();
const viewTask = new taskView(modelTask);
const controllerTask = new taskController(modelTask, viewTask);*/


const modals = modal();

const theme = themes();
document.addEventListener("DOMContentLoaded", theme);

//const pass = password();