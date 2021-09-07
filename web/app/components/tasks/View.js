export default class View {
    constructor(model) {
        this.model = model;
        this.currentDate();
        this.displayTodo(this.model);

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
    currentDate = () => {
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.day = this.date.getDate();
        this.month = this.date.getMonth();

    }
    createTodo(data, parentElem) {
        this.buttonDeleteImg = this.createElement('img', 'button-delete-img');
        this.buttonDeleteImg.setAttribute('src', '../../static/images/dest/icons/delete.png');
        this.buttonDelete = this.createElement('button', 'task__button-delete');
        parentElem.setAttribute('id', `${data.id}`)
        this.buttonDelete.appendChild(this.buttonDeleteImg);
        this.taskTittle = this.createElement('div', 'task__tittle');
        this.taskTittle.innerHTML = data.tittle;
        this.taskDescription = this.createElement('div', 'task__description');
        this.taskDescription.innerHTML = data.description;
        this.taskDeadline = this.createElement('div', 'task__deadline');
        this.taskDeadline.innerHTML = `${data.year}.${data.month+1}.${data.day}`;
        parentElem.appendChild(this.buttonDelete);
        parentElem.appendChild(this.taskTittle);
        parentElem.appendChild(this.taskDescription);
        parentElem.appendChild(this.taskDeadline);
    }
    displayTodo(data) {
        this.tasks = this.getElement('.tasks');
        this.tasksTodo = this.getElement('#tasks-to-do');
        this.tasksInProgress = this.getElement('#tasks-in-progress');
        this.tasksCompleted = this.getElement('#tasks-completed');
        data.models.forEach(element => {

            if (element.status === "completed") {
                this.taskCompleted = this.createElement('div', `task-completed-${element.categorie}`);
                this.createTodo(element, this.taskCompleted);
                this.tasksCompleted.appendChild(this.taskCompleted);

            } else if (element.status === 'in progress') {
                this.taskInProgress = this.createElement('div', `task-in-progress-${element.categorie}`);
                this.createTodo(element, this.taskInProgress);
                console.log(this.year === element.year && this.month < element.month)
                if (this.year < element.year || (this.year === element.year && element.month < this.month) || (this.year === element.year && this.month === element.month && element.day < this.day)) {

                    this.taskTittle.classList.add('overdue')
                }
                this.tasksInProgress.appendChild(this.taskInProgress);

            } else if (element.status === 'to-do') {
                this.taskTodo = this.createElement('div', `task-${element.categorie}`);
                this.createTodo(element, this.taskTodo);
                if (this.year < element.year || (this.year === element.year && element.month < this.month) || (this.year === element.year && this.month === element.month && element.day < this.day)) {

                    this.taskTittle.classList.add('overdue')
                }
                this.tasksTodo.appendChild(this.taskTodo);

            }
        });
    }

}