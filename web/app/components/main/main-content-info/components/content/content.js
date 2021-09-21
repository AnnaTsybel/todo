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
        //create tag for calendar
        const createElem = createElement('div', 'calendar-fill');
        //return content
        return createElem;

    } else if (name === 'tasks') {

        //create tag for tasks
        let createElem = createElement('section', 'tasks');

        //create button to add tasks
        let tasksLink = createElement('a', 'tasks__add');
        tasksLink.classList.add('modal-link');
        tasksLink.setAttribute('href', '#task-add');
        let tasksLinkIcon = createElement('span', 'icon-add');
        tasksLink.append('Add task', tasksLinkIcon);

        //create tasks container
        let tasksContainer = createElement('div', 'tasks__content');

        //function to create tasks sections
        function createTasksElements(ids, header) {
            let tasksElements = createElement('div', 'tasks__elements');
            tasksElements.setAttribute('id', ids)
            let tasksElementsHeader = createElement('h2', 'tasks__header');
            tasksElementsHeader.innerHTML = header;
            tasksElements.appendChild(tasksElementsHeader);
            return tasksElements;
        }

        //create tasks
        let tasksTodo = createTasksElements("tasks-to-do", 'To do');
        let tasksInProgress = createTasksElements("tasks-in-progress", 'In progress');
        let tasksCompleted = createTasksElements("tasks-completed", 'Completed');

        //append tasks into tasks container
        tasksContainer.append(tasksTodo, tasksInProgress, tasksCompleted);

        //append content into tag for tasks
        createElem.append(tasksLink, tasksContainer);

        //return content
        return createElem;

    } else if (name === 'home') {


        let createElem = createElement('section', 'slider');
        createElem.classList.add('section');

        //wrapper for slider
        let sliderWrapper = createElement('div', 'slider__wrapper');

        //slider items
        let sliderItems = createElement('div', 'slider__items');

        //images for slider
        let images = ['../../../../static/images/dest/nature1.jpg', '../../../../static/images/dest/nature5.jpg', '../../../../static/images/dest/nature2.jpg', '../../../../static/images/dest/nature3.jpg', '../../../../static/images/dest/nature4.jpg', '../../../../static/images/dest/nature5.jpg']

        //initialize items in slider
        for (let i = 0; i < 5; i++) {
            let sliderItem = createElement('div', 'slider__item');
            const image = createElement('img', 'slider__image');
            image.setAttribute('src', images[i])
            sliderItem.appendChild(image);
            sliderItems.appendChild(sliderItem);
        }
        //button next in slider
        let sliderButtonRight = createElement('button', 'slider__control');
        sliderButtonRight.classList.add('next');
        let sliderButtonRightIcon = createElement('span', 'icon-arrow-right');
        sliderButtonRight.appendChild(sliderButtonRightIcon);

        //button prev in slider
        let sliderButtonLeftIcon = createElement('span', 'icon-arrow-left');
        let sliderButtonLeft = createElement('button', 'slider__control');
        sliderButtonLeft.classList.add('prev');
        sliderButtonLeft.appendChild(sliderButtonLeftIcon);

        //append elements of slider in wrapper
        sliderWrapper.append(sliderItems, sliderButtonLeft, sliderButtonRight);


        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis consectetur egestas. Mauris erat nulla, accumsan in  cursus in, sodales maximus orci. Praesent pcursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orcicursus in, sodales maximus orci'
        const homePageTitle = createElement('h1', 'section__header');
        const Pagetitle = "About";
        homePageTitle.innerHTML = Pagetitle;
        const homePageInfo = createElement('p', 'section__text-info');
        homePageInfo.innerHTML = text;
        createElem.append(sliderWrapper, homePageTitle, homePageInfo);
        return createElem;
    }


}