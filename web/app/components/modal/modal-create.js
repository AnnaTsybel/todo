export default function modalCreate(name) {

    //fucntion to create elements with classes
    function createElement(tag, className) {

        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    //function to create close button
    function createCloseButton() {
        const modalClose = createElement('div', 'modal__close');
        const modalCloseButton = createElement('a', 'modal__button-close');
        modalCloseButton.setAttribute('href', '#')
        modalCloseButton.classList.add('modal-close');
        const modalCloseButtonImg = createElement('span', 'icon-cancel');
        modalCloseButton.appendChild(modalCloseButtonImg)
        modalClose.appendChild(modalCloseButton);
        return modalClose;
    }
    //function to create close button
    function createSubmitButton(contentOffButton, id) {
        const modalButtonContainer = createElement('div', 'modal__buttons');
        const modalButton = createElement('button', 'modal__button');
        if (id) {
            modalButton.setAttribute('id', id)
        }
        modalButton.textContent = contentOffButton;
        modalButtonContainer.appendChild(modalButton);
        return modalButtonContainer;
    }
    //function to create modal of logout
    function createModalLogout() {
        //create the tag to drop content into it
        const modalContent = createElement('div', 'modal__content');

        //create close button
        const modalClose = createCloseButton();

        //create header of modal
        const modalHeader = createElement('h1', 'modal__header');
        modalHeader.textContent = 'Do you realy want to logout?';

        //create  button
        const modalButtonSubmit = createSubmitButton('Yes', 'logout-button');

        modalContent.append(modalClose, modalHeader, modalButtonSubmit)
        return modalContent;

    }

    //function to create modal of calendar
    function createModalCalendar() {
        const modalContent = createElement('div', 'modal__content');
        const modalCalendarTask = createElement('div', 'modal__calendar__task');
        modalContent.append(modalCalendarTask);
        return modalContent;
    }
    //function to create radiobuttons
    function createRadioButton(elem, elemTag) {

        //container for radiobuttons
        const elementCategoriesContainer = createElement('div', 'modal__form__categories');

        if (elem.length > 0) {
            for (let i = 0; i < elem.length; i++) {
                //write current element in variable
                let radioButton = elem[i];

                //create input for current radiobutton
                const radioInput = document.createElement('input');

                //set class to current radiobutton
                radioInput.classList.add(`radio-${radioButton}`);

                //set attributes to current radiobutton 
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('name', `${elemTag}-categories`);
                radioInput.setAttribute('value', radioButton);
                radioInput.setAttribute('id', `${elemTag}-${radioButton}`);

                //create label for current radiobutton
                const radioLabel = document.createElement('label');
                radioLabel.setAttribute('for', `${elemTag}-${radioButton}`);
                radioLabel.innerHTML = radioButton;
                //
                elementCategoriesContainer.append(radioInput, radioLabel);
            }
        }

        return elementCategoriesContainer;
    }

    function createModalEditAdd(elementTag, elem) {
        //create the tag to drop content into it
        const modalContent = createElement('div', 'modal__content');

        //create close button
        const modalClose = createCloseButton();

        //create header of modal
        const modalHeader = createElement('h1', 'modal__header');
        modalHeader.innerHTML = 'Edit task';

        //create form of edit modal
        const modalForm = createElement('form', 'modal__form');
        modalForm.classList.add(`modal__task-${elem}`);

        //create title section
        const modalFormElementTittle = createElement('div', 'modal__form__element');

        //create label for title section
        const modalFormElementTittleLabel = createElement('label');
        modalFormElementTittleLabel.setAttribute('for', `${elementTag}-title`);
        modalFormElementTittleLabel.innerHTML = 'Title';

        //create input for title section
        const modalFormElementTittlelnput = createElement('input');
        modalFormElementTittlelnput.setAttribute('type', 'text');
        modalFormElementTittlelnput.setAttribute('placeholder', 'Title');
        modalFormElementTittlelnput.setAttribute('id', `${elementTag}-title`);

        //append label and input into categories section
        modalFormElementTittle.append(modalFormElementTittleLabel, modalFormElementTittlelnput);

        //create categories section
        const modalFormElementCategories = createElement('div', 'modal__form__element');

        //create label for categories section
        const modalFormElementCategoriesLabel = createElement('label');
        modalFormElementCategoriesLabel.innerHTML = 'Categories';

        //array with names for radiobuttons
        const modalFormCategories = ['hobby', 'sport', 'education', 'other', 'work'];

        //create content for categories section
        const modalFormElementCategoriesContainer = createRadioButton(modalFormCategories, 'modal-edit');

        //append label and content into categories section
        modalFormElementCategories.append(modalFormElementCategoriesLabel, modalFormElementCategoriesContainer);

        //create deadline section
        const modalFormElementDeadline = createElement('div', 'modal__form__element');

        //create label for deadline section
        const modalFormElementDeadlineLabel = createElement('label');
        modalFormElementDeadlineLabel.innerHTML = 'Deadline';
        modalFormElementDeadlineLabel.setAttribute('for', `${elementTag}-deadline`);

        //create input for deadline section
        const modalFormElementDeadlineInput = createElement('input');
        modalFormElementDeadlineInput.setAttribute('id', `${elementTag}-deadline`);
        modalFormElementDeadlineInput.setAttribute('type', 'date');

        //append label and input into deadline section
        modalFormElementDeadline.append(modalFormElementDeadlineLabel, modalFormElementDeadlineInput);

        //create description section
        const modalFormElementDescription = createElement('div', 'modal__form__textarea');

        //create label for description section
        const modalFormElementDescriptionLabel = createElement('label');
        modalFormElementDescriptionLabel.innerHTML = 'Description';
        modalFormElementDescriptionLabel.setAttribute('for', `${elementTag}-description`);

        //create textarea for description section
        const modalFormElementDescriptionTextarea = createElement('textarea');
        modalFormElementDescriptionTextarea.setAttribute('id', `${elementTag}-description`)

        //append label and textarea into description section
        modalFormElementDescription.append(modalFormElementDescriptionLabel, modalFormElementDescriptionTextarea)

        //create  button
        const modalButtonSubmit = createSubmitButton('Save')

        //append elements into form
        modalForm.append(modalFormElementTittle, modalFormElementCategories, modalFormElementDeadline, modalFormElementDescription, modalButtonSubmit)

        //append elements into content tag
        modalContent.append(modalClose, modalHeader, modalForm);

        //return content tag
        return modalContent;
    }

    const modalEdit = createModalEditAdd('modal-edit', 'edit');
    const modalAdd = createModalEditAdd('modal-add', 'add');
    //function to create delete tasks modal
    function createModalDeleteTasks() {

        //create the tag to drop content into it
        const modalContent = createElement('div', 'modal__content');

        //create close button
        const modalClose = createCloseButton();

        //create header of modal
        const modalHeader = createElement('h1', 'modal__header');
        //
        const modalFormDeleteContainer = createElement('div', 'modal__task-delete');

        //create buttons Container
        const modalFormButtonContainer = createElement('div', 'modal__buttons');

        //create button submit
        const modalFormButton = createElement('button', 'modal__button');
        modalFormButton.setAttribute('type', 'submit');
        modalFormButton.innerHTML = 'Save';

        //append button into container
        modalFormButtonContainer.appendChild(modalFormButton);

        //append header and button into container
        modalFormDeleteContainer.append(modalHeader, modalFormButtonContainer);

        //append elements to content tag
        modalContent.append(modalClose, modalFormDeleteContainer);
        return modalContent;
    }

    //araay of objects which are corresponding to modals
    const modals = [{
            id: 'modal-logout',
            page: 'all',
            content: createModalLogout()
        }, {
            page: 'calendar',
            content: createModalCalendar()
        }, {
            id: 'task-add',
            page: 'project',
            content: modalAdd
        },
        {
            id: 'modal-edit',
            page: 'project',
            content: modalEdit
        },
        {
            id: 'modal-delete',
            page: 'project',
            content: createModalDeleteTasks()
        },
    ]


    //function to create basic modal
    function createModal(elements) {
        let arr = [];
        elements.forEach(element => {
            if (element.page === 'all' || element.page === name) {
                const modal = createElement('div', 'modal');
                if (element.id) {
                    modal.setAttribute('id', element.id)
                }
                const modalBody = createElement('div', 'modal__body');
                modalBody.append(element.content)
                modal.appendChild(modalBody);
                arr.push(modal);
            }
        });
        return arr;
    }


    return createModal(modals);
}