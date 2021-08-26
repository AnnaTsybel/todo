//Calendar js
/*let buttonCalendar = document.getElementById('button-calendar');

let calendarTable = document.querySelector('.calendar');

buttonCalendar.addEventListener('click', () => {
    calendarTable.innerHTML = '';
    calendarfill()

})

let currentMonth = document.querySelector('.select__month');
console.log(currentMonth.getAttribute('id'))
let currentCalendar = function() {
    //get current date
    let currentDate = new Date();
    //get current month and year
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    //get in what day of a week the month start
    let startMonth = new Date(currentYear, currentMonth, 0).getDay();
    //get current amount of days
    let currentAmountOfDays = new Date(currentYear, currentMonth, 0).getDate();
    //get how many weeks are in month
    function getWeeks(year, month) // Внимание: Месяцы нумеруются с 0, как принято в JS
    {
        var l = new Date(year, month + 1, 0);
        return Math.ceil((l.getDate() - (l.getDay() ? l.getDay() : 7)) / 7) + 1;
    }
    let currentWeeks = getWeeks(currentYear, currentMonth);

    //amount days in week
    const daysInWeek = 7;
    let arr = new Array();
    let counter = 0;
    let day = 1;
    for (let i = 0; i < currentWeeks; i++) {
        arr[i] = new Array();
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
    }
    console.log(arr)
}


currentCalendar()


let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let calendarTable1 = document.querySelectorAll('.calendar tbody tr');
for (let i = 0; i < calendarTable1.length; i++) {
    calendarTable1[i].classList.add(`row-${i+1}`)
}
let calendarfill = function() {

    let tableHeader = document.createElement('th');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');
    let td = document.createElement('td');
    tableHead.appendChild(tableRow)
    for (let i = 0; i < daysOfWeek; i++) {
        let a = tableRow.appendChild(td);
        a.innerText = `${daysOfWeek[i]}`;
    }

    /*  for (let i = 0; i < daysInWeek; i++) {
          tableBody.appendChild(tableRow);
          for (let j = 0; j < daysInWeek; j++) {

          }
      }*/
/*
}
console.log(calendarTable1);*/