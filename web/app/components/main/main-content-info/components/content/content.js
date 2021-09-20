export default function contentMain() {
    const name = 'home';

    function createElement(tag, className) {

        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }


    if (name === 'calendar') {
        let createElem = createElement('div', 'calendar-fill');
        return createElem;
    } else if (name === 'tasks') {
        let createElem = createElement('section', 'tasks');
        let tasksLink = createElement('a', 'tasks__add');
        tasksLink.classList.add('modal-link');
        tasksLink.setAttribute('href', '#task-add')
        let tasksLinkIcon = createElement('span', 'icon-add');
        tasksLink.append('Add task', tasksLinkIcon);
        let tasksContainer = createElement('div', 'tasks__content');

        function createTasksElements(ids, header) {
            let tasksElements = createElement('div', 'tasks__elements');
            tasksElements.setAttribute('id', ids)
            let tasksElementsHeader = createElement('h2', 'tasks__header');
            tasksElementsHeader.innerHTML = header;
            tasksElements.appendChild(tasksElementsHeader);
            return tasksElements;
        }
        let tasksTodo = createTasksElements("tasks-to-do", 'To do');
        let tasksInProgress = createTasksElements("tasks-in-progress", 'In progress');
        let tasksCompleted = createTasksElements("tasks-completed", 'Completed');
        tasksContainer.append(tasksTodo, tasksInProgress, tasksCompleted);
        createElem.append(tasksLink, tasksContainer);
        console.log(createElem)
        return createElem;
    } else if (name === 'home') {
        let createElem = createElement('section', 'slider');
        createElem.classList.add('section')
        let sliderWrapper = createElement('div', 'slider__wrapper');
        let sliderItems = createElement('div', 'slider__items');
        let sliderButtonRight = createElement('button', 'slider__control');
        let sliderButtonRightIcon = createElement('span', 'icon-arrow-left');
        sliderButtonRight.appendChild(sliderButtonRightIcon);
        let sliderButtonLeftIcon = createElement('span', 'icon-arrow-left');
        let sliderButtonLeft = createElement('button', 'slider__control');
        sliderButtonLeft.appendChild(sliderButtonLeftIcon);
        createElem.append(sliderWrapper, sliderButtonLeft, sliderButtonRight)
        return createElem;
    }


}