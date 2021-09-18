export default function modalCreate() {
    function createElement(tag, className) {

        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    /* <div class="modal__close">
                    <a class="modal__button-close modal-close" href="#"><span>&#10006</span></a>
                </div>
                <h1 class="modal__header">Do you realy want to logout?</h1>
                <div class="modal__buttons">
                    <button class="modal__button">Yes</button>

                </div>*/
    function createModalLogout() {
        const modalContent = createElement('div', 'modal__content');
        const modalClose = createElement('div', 'modal__close');
        const modalCloseButton = createElement('a', 'modal__button-close');
        modalCloseButton.setAttribute('href', '#')
        modalCloseButton.classList.add('modal-close');
        const modalCloseButtonImg = createElement('span', 'icon-cancel');
        modalCloseButton.appendChild(modalCloseButtonImg)
        modalClose.appendChild(modalCloseButton)
        const modalHeader = createElement('h1', 'modal__header');
        modalHeader.textContent = 'Do you realy want to logout?';
        const modalButtons = createElement('div', 'modal__buttons');
        const modalButtonOk = createElement('button', 'modal__button');
        modalButtonOk.textContent = 'Yes';
        modalButtons.appendChild(modalButtonOk);
        modalContent.append(modalClose, modalHeader, modalButtons)
        return modalContent;

    }

    function createModalCalendar() {
        const modalContent = createElement('div', 'modal__content');
        const modalCalendarTask = createElement('div', 'modal__calendar__task');
        modalContent.append(modalCalendarTask)
        return modalContent;
    }
    const name = 'calendar';
    const modals = [{
        id: 'modal-logout',
        page: 'all',
        content: createModalLogout()
    }, {
        page: 'calendar',
        content: createModalCalendar()
    }, ]

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