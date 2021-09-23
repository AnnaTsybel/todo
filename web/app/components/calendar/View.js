export default class View {

    constructor(model) {
        this.model = model;
        this.displayCalendar(this.model);
        this.displayModal(this.model);

        this.buttonCalendar.addEventListener('click', () => {
            this.checkedDate = new Date(this.currentYearTag.getAttribute('id'), this.currentMonthTag.getAttribute('id'));
            this.currentFill.innerHTML = '';
            this.calendarRassing(this.checkedDate, this.model);
            this.displayModal(this.model);
        });

    }
    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    };
    //function to fill calendar
    calendarFill(data) {

        //get month and year of transmitted data
        const currentMonth = data.getMonth();
        const currentYear = data.getFullYear();

        // get in what day of a week the month starts
        const startMonth = new Date(currentYear, currentMonth, 0).getDay() + 1;

        // get current amount of days
        const currentAmountOfDays = 33 - new Date(currentYear, currentMonth, 33).getDate();

        // get how many weeks are in month
        function getWeeks(year, month) {
            const l = new Date(year, month + 1, 0);
            return Math.ceil((l.getDate() - (l.getDay() ? l.getDay() : 7)) / 7) + 1;
        }
        const currentWeeks = getWeeks(currentYear, currentMonth);

        //array output with calendar
        const daysInWeek = 7;
        const arr = [];
        let counter = 0;
        let day = 1;
        for (let i = 0; i < currentWeeks; i++) {
            arr[i] = [];
            for (let j = 0; j < daysInWeek; j++) {
                counter += 1;
                if (counter < startMonth) {
                    arr[i][j] = null;
                } else if (counter >= currentAmountOfDays + startMonth) {
                    arr[i][j] = null;
                } else {
                    arr[i][j] = day++;
                }
            }
        };
        return arr;

    }

    calendarRassing(date, dataOfTask) {

        //array output 
        const calendar = this.calendarFill(date);

        //array of days in week
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        //creating elements to display calendar
        const calendarTable = document.createElement('table');
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');
        const tableRow = document.createElement('tr');

        //display thead
        daysOfWeek.forEach(el => {
            const th = document.createElement('th');
            th.innerText = `${el}`;
            tableRow.appendChild(th);
        })

        //append row to thead
        tableHead.appendChild(tableRow);


        //display tbody
        for (let i = 0; i < calendar.length; i++) {

            //create rows
            const BodyRow = document.createElement('tr');

            //display day date in days of week
            for (let j = 0; j < calendar[i].length; j++) {

                //create cells
                const td = document.createElement('td');

                //if cell is empty
                if (calendar[i][j] === null) {
                    td.innerText = '';
                }

                //if cell has date,which is similar to task deadline
                else if (dataOfTask.year === date.getFullYear() && dataOfTask.month === date.getMonth() && dataOfTasks.models.day === calendar[i][j]) {

                    //creating link element with class,id and href
                    let calendarElementText = document.createElement('a');
                    calendarElementText.classList.add('modal-calendar-link');
                    calendarElementText.setAttribute('href', `#modal-task-${dataOfTask.id}`)
                    calendarElementText.setAttribute('id', `${dataOfTask.id}`);
                    calendarElementText.innerText = calendar[i][j];

                    //adding mark with categorie color
                    let categorie = dataOfTask.categorie;
                    let markedTd = document.createElement('div');
                    markedTd.classList.add(`marked-${categorie }`);

                    //appending to cell
                    td.appendChild(calendarElementText);
                    td.appendChild(markedTd);

                }

                //if cell has date,which is similar to current date
                else if (this.currentDate.getFullYear() === date.getFullYear() && this.currentDate.getMonth() === date.getMonth() && this.currentDate.getDate() === calendar[i][j]) {

                    //creating link element with class,id and href
                    let calendarElementText = document.createElement('a');
                    calendarElementText.classList.add('modal-calendar-link');
                    calendarElementText.setAttribute('href', `#modal-task-default`);
                    calendarElementText.innerText = calendar[i][j];

                    //create class to show current day
                    let currentDay = document.createElement('div');
                    currentDay.classList.add('current-day');

                    //appending to cell
                    td.appendChild(currentDay);
                    td.appendChild(calendarElementText);

                }

                //if cell has date with deafault
                else {
                    let calendarElementText = document.createElement('a');
                    calendarElementText.classList.add('modal-calendar-link');
                    calendarElementText.setAttribute('href', `#modal-task-default`);
                    calendarElementText.innerText = calendar[i][j];
                    //appending to element
                    td.appendChild(calendarElementText);

                }



                //append cell to row
                BodyRow.appendChild(td)
            }

            //append row to body
            tableBody.appendChild(BodyRow)
        }

        //append thead and tbody in table
        calendarTable.append(tableHead);
        calendarTable.append(tableBody);

        //append table in block
        this.currentFill.append(calendarTable);

    };


    displayCalendar(dataOfTasks) {

        //current date
        this.currentDate = new Date();

        //block in which the calendar will be rassed
        this.currentFill = document.querySelector('.calendar-fill');

        //display calendar with current date when page loaded
        document.addEventListener("DOMContentLoaded", this.calendarRassing(this.currentDate, dataOfTasks));

        //button which will switch selected date on calendar
        this.buttonCalendar = document.getElementById('button-calendar');

        //current states of year and month in select
        this.currentMonthTag = document.getElementById('select-month').querySelector('.select__current');
        this.currentYearTag = document.getElementById('select-year').querySelector('.select__current');


    }
    displayModal(data) {
        //get tag of content of calendar modal
        const calendarModal = document.querySelector('.modal__calendar__task');

        //get all modal calendar links collection
        const modalLinksCollection = document.querySelectorAll('.modal-calendar-link');


        //function to open modal
        function openModal(modal) {
            modal.classList.add('open');
            let bodyOpen = modal.querySelector('.modal__body');
            bodyOpen.classList.add('open');
            modal.addEventListener('click', function(el) {
                if (!el.target.closest('.modal__content')) {
                    closeModal(modal);
                }
            })

        }
        //function to close modal
        function closeModal(modal) {
            let bodyOpen = modal.querySelector('.modal__body');
            modal.classList.remove('open');
            bodyOpen.classList.remove('open');
        }

        //
        for (let i = 0; i < modalLinksCollection.length; i++) {

            //set current value in variable
            let currentElem = modalLinksCollection[i];

            //display modal to date which has task
            if (currentElem.getAttribute('id') !== null) {

                currentElem.addEventListener('click', el => {

                    //clean current content in modal
                    calendarModal.innerHTML = '';

                    //get parent modal tag
                    let modal = calendarModal.closest('.modal');
                    let modalContent = modal.querySelector('.modal__content');
                    const modalClose = this.createElement('div', 'modal__close');
                    const modalCloseButton = this.createElement('a', 'modal__button-close');
                    modalCloseButton.setAttribute('href', '#')
                    modalCloseButton.classList.add('modal-close');
                    const modalCloseButtonImg = this.createElement('span', 'icon-cancel');
                    modalCloseButton.appendChild(modalCloseButtonImg)
                    modalClose.appendChild(modalCloseButton);
                    //remove previous and add new id to modal tag which will display task


                    modal.removeAttribute('id');
                    modal.setAttribute('id', `modal-task-${data.models.id}`);

                    //create tittle of modal
                    let modalTaskTittle = document.createElement('div');
                    modalTaskTittle.classList.add('modal__calendar__task__tittle');

                    //display json of tittle without quotes
                    modalTaskTittle.innerText = JSON.stringify(data.models.tittle).replace(/"/g, '');

                    //create description of modal
                    let modalTaskDescription = document.createElement('div');
                    modalTaskDescription.classList.add('modal__calendar__task__description');

                    //display json of description without quotes 
                    modalTaskDescription.innerText = JSON.stringify(data.models.description).replace(/"/g, '')

                    //create deadline of modal
                    let modalTaskDeadline = document.createElement('div');
                    modalTaskDeadline.classList.add('modal__calendar__task__deadline')

                    //display json of data 
                    modalTaskDeadline.innerText = `${JSON.stringify(data.models.year)}.${JSON.stringify(data.models.month)}.${JSON.stringify(data.models.day)}`;

                    //append all of elements in modal
                    calendarModal.append(modalClose, modalTaskTittle, modalTaskDescription, modalTaskDeadline);

                    let modalClosed = document.querySelectorAll('.modal-close');


                    if (modalClosed.length > 0) {
                        for (let i = 0; i < modalClosed.length; i++) {
                            console.log(modalClosed)
                            modalClosed[i].addEventListener('click', el => {
                                el.preventDefault();
                                closeModal(modalClosed[i].closest('.modal'));

                            })
                        }
                    }
                    //function to open modal
                    openModal(modal);

                    //delete default settings of link
                    el.preventDefault();
                })
            } else if (currentElem.getAttribute('id') === null) {
                currentElem.addEventListener('click', el => {

                    //clean current content in modal
                    calendarModal.innerHTML = '';

                    //get parent modal tag
                    let modal = calendarModal.closest('.modal');
                    const modalClose = this.createElement('div', 'modal__close');
                    const modalCloseButton = this.createElement('a', 'modal__button-close');
                    modalCloseButton.setAttribute('href', '#')
                    modalCloseButton.classList.add('modal-close');
                    const modalCloseButtonImg = this.createElement('span', 'icon-cancel');
                    modalCloseButton.appendChild(modalCloseButtonImg)
                    modalClose.appendChild(modalCloseButton);
                    //remove previous and add new id to modal tag which will display task
                    modal.removeAttribute('id');
                    modal.setAttribute('id', `modal-task-default`);

                    //create tittle of modal
                    let modalTaskTittle = document.createElement('div');
                    modalTaskTittle.classList.add('modal__calendar__task__tittle');

                    //add text to tittle
                    modalTaskTittle.innerText = 'No tasks to display';

                    //append tittle in modal
                    calendarModal.append(modalClose, modalTaskTittle);


                    //function to open modal
                    openModal(modal);

                    //delete default settings of link
                    el.preventDefault();
                });

            }
        }

    }


}