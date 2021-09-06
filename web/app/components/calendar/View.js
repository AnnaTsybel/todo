export default class View {

    constructor(model) {
        this.model = model;
        this.displayCalendar(this.model);

    }

    displayCalendar(tasksDays) {

        //current date
        let currentDate = new Date();

        //block in which the calendar will be rassed
        const currentFill = document.querySelector('.calendar-fill');

        //display calendar with current date when page loaded
        document.addEventListener("DOMContentLoaded", calendarRassing(currentDate));

        //button which will switch selected date on calendar
        const buttonCalendar = document.getElementById('button-calendar');

        //current states of year and month in select
        const currentMonthTag = document.getElementById('select-month').querySelector('.select__current');
        const currentYearTag = document.getElementById('select-year').querySelector('.select__current');

        //function to fill calendar
        function calendarFill(data) {


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


        function calendarRassing(data) {

            //array output 
            const calendar = calendarFill(data);

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
                    else if (tasksDays.models.year === data.getFullYear() && tasksDays.models.month === data.getMonth() && tasksDays.models.day === calendar[i][j]) {
                        let categorie = tasksDays.models.categorie;
                        let calendarElementText = document.createElement('span');
                        calendarElementText.innerText = calendar[i][j];
                        let markedTd = document.createElement('div');
                        markedTd.classList.add(`marked-${categorie }`);
                        td.setAttribute('id', `${tasksDays.models.id}`)
                        td.classList.add('cell');
                        td.appendChild(calendarElementText);
                        td.appendChild(markedTd);

                    }

                    //if cell has date,which is similar to current date
                    else if (currentDate.getFullYear() === data.getFullYear() && currentDate.getMonth() === data.getMonth() && currentDate.getDate() === calendar[i][j]) {
                        let calendarElementText = document.createElement('span');
                        calendarElementText.innerText = calendar[i][j];
                        let currentDay = document.createElement('div');
                        currentDay.classList.add('current-day');
                        td.classList.add('cell');
                        td.appendChild(currentDay);
                        td.appendChild(calendarElementText);

                    }

                    //if cell has date with deafault
                    else {
                        let calendarElementText = document.createElement('span');
                        calendarElementText.innerText = calendar[i][j];
                        td.classList.add('cell');
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
            currentFill.append(calendarTable);
        };

        buttonCalendar.addEventListener('click', () => {
            let checkedDate = new Date(currentYearTag.getAttribute('id'), currentMonthTag.getAttribute('id'));
            currentFill.innerHTML = '';
            calendarRassing(checkedDate);
        });


    }




}