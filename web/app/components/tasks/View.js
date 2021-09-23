export default class View {
    constructor(model) {
        this.model = model;
        this.currentDate();
        this.displayTodo(this.model.models);
        this.EditTodo(this.model.models);
        this.DeleteTodo(this.model.models);
        this.moveTodo(this.model.models);
        this.buttonTasks.addEventListener('click', () => {
            let a = this.sortTag.getAttribute('id');
            this.cleanTodo();
            this.displayTodo(this.filterTasks(a, this.model));
            this.EditTodo(this.filterTasks(a, this.model));
            this.DeleteTodo(this.filterTasks(a, this.model));
            this.moveTodo(this.filterTasks(a, this.model));
        })
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    getElement(selector) {

        return document.querySelector(selector);
    }

    currentDate() {

        this.date = new Date();
        this.year = this.date.getFullYear();
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
    }

    createTodo(data, parentElem) {

        //create button edit
        this.buttonEdit = this.createElement('a', 'task__button-edit');
        this.buttonEdit.setAttribute('href', `#modal-task-edit-${data.id}`)
        this.buttonEditImg = this.createElement('span', 'icon-edit-button');
        this.buttonEdit.appendChild(this.buttonEditImg);

        //create button delete
        this.buttonDelete = this.createElement('a', 'task__button-delete');
        this.buttonDelete.setAttribute('href', `#modal-task-delete-${data.id}`)
        this.buttonDeleteImg = this.createElement('span', 'icon-delete');
        this.buttonDelete.appendChild(this.buttonDeleteImg);

        //create container for buttons
        this.buttonContainer = this.createElement('div', 'task__buttons');


        this.buttonContainer.appendChild(this.buttonEdit);
        this.buttonContainer.appendChild(this.buttonDelete);

        parentElem.setAttribute('id', `${data.id}`)

        this.taskTittle = this.createElement('div', 'task__tittle');
        this.taskTittle.innerHTML = data.tittle;
        this.taskDescription = this.createElement('div', 'task__description');
        this.taskDescription.innerHTML = data.description;
        this.taskDeadline = this.createElement('div', 'task__deadline');
        this.taskDeadline.innerHTML = `${data.year}.${data.month+1}.${data.day}`;

        this.buttonMove = this.createElement('div', 'task__button-move');
        parentElem.appendChild(this.buttonContainer);
        parentElem.appendChild(this.buttonMove);
        parentElem.appendChild(this.taskTittle);
        parentElem.appendChild(this.taskDescription);
        parentElem.appendChild(this.taskDeadline);
    }

    checkOverdue(element, task) {
        if (this.year < element.year || (this.year === element.year && element.month < this.month) || (this.year === element.year && this.month === element.month && element.day < this.day)) {
            task.classList.add('overdue')
        }
    }

    displayTodo(data) {
        this.tasks = this.getElement('.tasks');
        this.tasksTodo = this.getElement('#tasks-to-do');
        this.tasksInProgress = this.getElement('#tasks-in-progress');
        this.tasksCompleted = this.getElement('#tasks-completed');
        //button which will switch selected date on calendar
        this.buttonTasks = this.getElement('#button-project');
        //current states of sort
        this.sortTag = this.getElement('#select-sort').querySelector('.select__current');


        data.forEach(element => {

            if (element.status === "completed") {
                this.taskCompleted = this.createElement('div', `task-completed-${element.categorie}`);
                this.taskCompleted.classList.add('task');
                this.createTodo(element, this.taskCompleted);
                this.tasksCompleted.appendChild(this.taskCompleted);

            } else if (element.status === 'in progress') {
                this.taskInProgress = this.createElement('div', `task-in-progress-${element.categorie}`);
                this.taskInProgress.classList.add('task');
                this.createTodo(element, this.taskInProgress);
                this.checkOverdue(element, this.taskInProgress)
                this.tasksInProgress.appendChild(this.taskInProgress);

            } else if (element.status === 'to-do') {
                this.taskTodo = this.createElement('div', `task-${element.categorie}`);
                this.taskTodo.classList.add('task');
                this.createTodo(element, this.taskTodo);
                this.checkOverdue(element, this.taskTodo)
                this.tasksTodo.appendChild(this.taskTodo);

            }
        });
    }
    cleanTodo() {
        this.tasksTodo.innerHTML = '';
        this.tasksInProgress.innerHTML = '';
        this.tasksCompleted.innerHTML = '';
    }

    generateDate(day, month, year) {

        if ((day / 10) < 1) {
            return `${year}-${month+1}-0${day}`
        } else if ((month / 10) < 1) {
            return `${year}-0${month+1}-${day}`
        } else if (((day / 10) < 1) && ((day / 10) < 1)) {
            return `${year}-0${month+1}-0${day}`
        }
        return `${year}-${month+1}-${day}`
    }

    closeModal(modal) {
        let bodyOpen = modal.querySelector('.modal__body');
        modal.classList.remove('open');
        bodyOpen.classList.remove('open');
    }
    openModal(modal) {
        modal.classList.add('open');
        let bodyOpen = modal.querySelector('.modal__body');
        bodyOpen.classList.add('open');
        modal.addEventListener('click', function(el) {
            if (!el.target.closest('.modal__content')) {

                this.closeModal(modal);
            }
        })
    }

    EditTodo(data) {

        //get collection of tasks edit buttons
        const modalLinksEdit = document.querySelectorAll('.task__button-edit');

        //get tag to add content in eadit modall
        const taskEditModal = document.querySelector('.modal__task-edit');

        //close buttons in modals
        let modalClose = document.querySelectorAll('.modal-close');

        //enumeration of elements of tasks array
        data.forEach(el => {

            //enumeration of elements of modal edit buttons
            for (let i = 0; i < modalLinksEdit.length; i++) {

                //get clear ids of edit buttons
                let modalLinkEditId = modalLinksEdit[i].getAttribute('href').substr(17);

                //check if clear id of edit button is the same as if of task in task array

                if (modalLinkEditId == el.id) {

                    //add event listener on button of open modal of editing

                    modalLinksEdit[i].addEventListener('click', element => {

                        //get href of link of edit and transform it to id
                        let modalId = modalLinksEdit[i].getAttribute('href').replace('#', '');

                        //get the tag of modal

                        let modalOfEditModal = taskEditModal.closest('.modal');

                        //set id to modal
                        modalOfEditModal.setAttribute('id', `${modalId}`)

                        //get id of modal
                        let modal = document.getElementById(modalId);

                        //get input of tittle of the task
                        let currentTittle = document.getElementById('modal-edit-title');

                        //set current value of the task's tittle
                        currentTittle.setAttribute('value', `${el.tittle}`);

                        //get input of deadline of the task
                        let currentDeadline = document.getElementById('modal-edit-deadline');


                        //generate correct date 
                        let date = this.generateDate(el.day, el.month, el.year)

                        //set current value of the task's deadline
                        currentDeadline.setAttribute('value', `${date}`);

                        //get input of todo of the task
                        let currentDescription = document.getElementById('modal-edit-description');

                        //set current value of the task's description
                        currentDescription.value = `${el.description}`;

                        //open modal function 
                        this.openModal(modal);

                        element.preventDefault()
                    })
                }

            }
        })

        //check if close buttons exists
        if (modalClose.length > 0) {

            for (let i = 0; i < modalClose.length; i++) {
                //add event listeners on each of them
                modalClose[i].addEventListener('click', el => {
                    let modal = modalClose[i].closest('.modal');
                    this.closeModal(modal);
                    el.preventDefault();
                })

            }
        }

    }

    DeleteTodo(data) {
        //get collection of tasks edit buttons
        const modalLinksDelete = document.querySelectorAll('.task__button-delete');

        //get tag to add content in eadit modall
        const taskDeleteModal = document.querySelector('.modal__task-delete');

        //close buttons in modals
        let modalClose = document.querySelectorAll('.modal-close');



        data.forEach(el => {

            //enumeration of elements of modal edit buttons
            for (let i = 0; i < modalLinksDelete.length; i++) {
                //get clear ids of edit buttons
                let modalLinkDeleteId = modalLinksDelete[i].getAttribute('href').substr(19);

                if (modalLinkDeleteId == el.id) {

                    //add event listener on button of open modal of editing

                    modalLinksDelete[i].addEventListener('click', element => {
                        //get href of link of edit and transform it to id
                        let modalId = modalLinksDelete[i].getAttribute('href').replace('#', '');

                        //get the tag of modal

                        let modalOfDelete = taskDeleteModal.closest('.modal');

                        //set id to modal
                        modalOfDelete.setAttribute('id', `${modalId}`)

                        //get id of modal
                        let modal = document.getElementById(modalId);

                        //get header of delete modal
                        let headerOfDeleteModal = modalOfDelete.querySelector('.modal__header');

                        //add text to header of delete modal
                        headerOfDeleteModal.innerHTML = `Do you realy want to delete ${ el.tittle} task?`;

                        //open modal function 
                        this.openModal(modal);

                    })
                }
            }
        });
    }

    moveTodo(data) {
        const yearCurrent = this.year;
        const monthCurrent = this.month + 1;
        const dayCurrent = this.day;
        //get all tasks
        const taskList = document.querySelectorAll('.task');

        //get main element
        const main = document.querySelector('.main-info__content');

        //get all tasks sorting ids
        const taskProgress = document.getElementById('tasks-in-progress');
        const taskCompleted = document.getElementById('tasks-completed');
        const taskTodo = document.getElementById('tasks-to-do');

        //function to get coords of element
        function getCoords(elem) {
            let box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset,
                right: box.left + pageXOffset + taskTodo.clientWidth,
                bottom: box.top + pageYOffset - taskTodo.clientHeight
            };

        }
        //get coords of all tasks sorting 
        const coordsTodo = getCoords(taskTodo);
        const coordsCompleted = getCoords(taskCompleted);
        const coordsInprogress = getCoords(taskProgress);

        data.forEach(el => {


            for (let i = 0; i < taskList.length; i++) {

                let currentTask = taskList[i];


                if ((Number(currentTask.getAttribute('id')) === el.id) && !(currentTask.classList.contains('move'))) {

                    //function to move element
                    function moveAt(e) {
                        currentTask.style.left = e.pageX - currentTask.offsetWidth / 2 + 'px';
                        currentTask.style.top = e.pageY - currentTask.offsetHeight / 2 + 'px';
                    }

                    const buttonMoveElem = currentTask.querySelector('.task__button-move');

                    //get width and height of current element
                    let widthElem = currentTask.clientWidth;
                    let heightElem = currentTask.clientHeight;

                    //add event listener on current task
                    buttonMoveElem.addEventListener('mousedown', function(e) {
                        let currentParentElement = currentTask.closest('.tasks__elements');

                        //set width on current task
                        currentTask.style.width = widthElem + 'px';
                        currentTask.style.height = heightElem + 'px';

                        //append current task on main
                        main.appendChild(currentTask);
                        moveAt(e)
                        currentTask.classList.add('move');

                        document.onmousemove = function(e) {
                            moveAt(e);

                        };

                        function checkTasks(elem, parent) {
                            return (elem.pageX >= parent.left && elem.pageX <= parent.right) && (elem.pageY >= parent.top && elem.pageY >= parent.bottom)
                        }

                        //function to nullify styles of element
                        function nullifyElementStyles(elem) {
                            elem.style.removeProperty('left');
                            elem.style.removeProperty('top');
                            elem.style.removeProperty('width');
                            elem.style.removeProperty('height');
                        }

                        currentTask.onmouseup = function(e) {

                            //nullify styles
                            nullifyElementStyles(currentTask);
                            if (checkTasks(e, coordsTodo)) {
                                currentTask.className = '';

                                if (yearCurrent < el.year || (yearCurrent === el.year && el.month < monthCurrent) || (yearCurrent === el.year && monthCurrent === el.month && el.day < dayCurrent)) {
                                    currentTask.classList.add('overdue')
                                }

                                currentTask.classList.add(`task-${el.categorie}`, 'task');

                                taskTodo.appendChild(currentTask);

                                document.onmousemove = null;
                                currentTask.onmouseup = null;

                            } else if (checkTasks(e, coordsInprogress)) {

                                currentTask.className = '';
                                if (yearCurrent < el.year || (yearCurrent === el.year && el.month < monthCurrent) || (yearCurrent === el.year && monthCurrent === el.month && el.day < dayCurrent)) {
                                    currentTask.classList.add('overdue')
                                }
                                currentTask.classList.add(`task-in-progress-${el.categorie}`, 'task');

                                taskProgress.appendChild(currentTask);

                                document.onmousemove = null;
                                currentTask.onmouseup = null;

                            } else if (checkTasks(e, coordsCompleted)) {


                                currentTask.className = '';

                                currentTask.classList.add(`task-completed-${el.categorie}`, 'task');

                                taskCompleted.appendChild(currentTask);

                                document.onmousemove = null;
                                currentTask.onmouseup = null;
                            } else {

                                currentParentElement.appendChild(currentTask);
                                currentTask.classList.remove('move')
                                document.onmousemove = null;
                                currentTask.onmouseup = null;

                            }

                        };


                    })
                }


            }

        });



    }
    filterTasks(input, data) {
        const date1 = new Date();
        let arr = [];

        function getWeek(data) {
            if (data < 7) {
                return 1;
            } else {
                return (data - data % 7) / 7;
            }
        }
        if (input === 'all') {
            return data.models;

        } else if (input === 'this-week') {
            data.models.forEach(function(el) {
                if (date1.getFullYear() === el.year && date1.getMonth() === el.month && getWeek(date1.getDate()) === getWeek(el.day)) {
                    arr.push(el);
                }
            })

        } else if (input === 'this-month') {
            data.models.forEach(function(el) {
                if (date1.getFullYear() === el.year && date1.getMonth() === el.month) {
                    arr.push(el);
                }

            })

        } else if (input === 'this-day') {
            data.models.forEach(function(el) {
                if (date1.getFullYear() === el.year && date1.getMonth() === el.month && date1.getDate() === el.day) {
                    arr.push(el);
                }

            })
        }
        return arr;

    }

}