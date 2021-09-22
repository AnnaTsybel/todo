export default function select() {
    const name = 'settings';
    let displaySelect = function(arrayOfObj, id, currentSelect) {
        //get element which will be displayed
        const selectObj = document.getElementById(`${id}`);

        //get header from select 
        const selectHeader = selectObj.querySelector('.select__header');

        //get body from select 
        const selectBody = selectObj.querySelector('.select__body');

        //get icon from select header
        const selectIcon = selectObj.querySelector('.select__icon');

        //get current element from select header
        const selectCurrent = selectObj.querySelector('.select__current');

        //display current selected option and set attribute id in select header
        for (let key in currentSelect) {
            key === 'id' ? selectCurrent.setAttribute('id', currentSelect[key]) : selectCurrent.innerHTML = currentSelect[key];
        }

        //display elements of select body
        arrayOfObj.forEach(el => {
            //creating element
            const dropdownElement = document.createElement('div');
            dropdownElement.classList.add('select__item');

            //display element and set attribute id in select body
            for (let key in el) {
                key === 'id' ? dropdownElement.setAttribute('id', el[key]) : dropdownElement.innerHTML = el[key];
            }

            //appending to the select body 
            selectBody.appendChild(dropdownElement);
        });

        //get the collection of select elements
        const selectItem = selectObj.querySelectorAll('.select__item');

        //add class to make elements visible or invisible
        selectHeader.addEventListener('click', function() {
            //toggle class show on element
            this.parentElement.classList.toggle('show');

            //switching arrows icons
            if (this.parentElement.classList.contains('show')) {
                selectIcon.classList.remove('icon-arrow-down');
                selectIcon.classList.add('icon-arrow-up');
            } else {
                selectIcon.classList.remove('icon-arrow-up');
                selectIcon.classList.add('icon-arrow-down');
            }

        })


        //select elements which will switch with current element
        selectItem.forEach(item => {
            //add event listener on every element in collection of select body elements 
            item.addEventListener('click', function() {

                //get text from selected element
                let text = this.innerText,

                    //get parent of elements
                    select = this.closest('.select'),

                    //get current element 
                    currentText = select.querySelector('.select__current');
                currentText.innerText = text;

                //get current id of element
                let currentId = this.getAttribute('id');

                //set id to new current element
                currentText.setAttribute('id', `${currentId}`);

                //change icon to arrow down if current element changes
                selectIcon.classList.remove('icon-arrow-up');
                selectIcon.classList.add('icon-arrow-down');

                //close dropdown 
                select.classList.remove('show');
            })
        });
    }


    const monthesDisplay = function() {

        //current month object
        function currentMonth() {

            //get current month
            const сurrentMonth = new Date().getMonth();

            //array of months
            const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            //create object with keys of id and name of current month
            let obj = {};
            obj.id = сurrentMonth;
            obj.month = month[сurrentMonth];
            return obj;
        };

        //id of select monthes
        const selectMonthId = 'select-month';

        //array of months objects
        const months = [
            { month: 'January', id: 0 },
            { month: 'February', id: 1 },
            { month: 'March', id: 2 },
            { month: 'April', id: 3 },
            { month: 'May', id: 4 },
            { month: 'June', id: 5 },
            { month: 'July', id: 6 },
            { month: 'August', id: 7 },
            { month: 'September', id: 8 },
            { month: 'October', id: 9 },
            { month: 'November', id: 10 },
            { month: 'December', id: 11 }
        ];
        //call the function to display select monthes 
        displaySelect(months, selectMonthId, currentMonth())
    };

    const yearsDisplay = function() {

        //current select year
        let сurrentYear = new Date().getFullYear();
        let currentSelect = {
            year: сurrentYear,
            id: сurrentYear
        };

        //id of select year
        const selectYearId = 'select-year';

        //array of years objects
        const years = [
            { year: 2021, id: 2021 },
            { year: 2020, id: 2020 },
            { year: 2019, id: 2019 },
            { year: 2018, id: 2018 },
            { year: 2017, id: 2017 }
        ];
        //call the function to display select years 
        displaySelect(years, selectYearId, currentSelect);
    };
    const sortDisplay = function() {

        //current select year

        let currentSelect = {
            name: 'All',
            id: 'all'
        };

        //id of select year
        const selectSortId = 'select-sort';

        //array of years objects
        const sort = [
            { name: 'This week', id: 'this-week' },
            { name: 'This day', id: 'this-day' },
            { name: 'This month', id: 'this-month' },
            { name: 'All', id: 'all' }
        ];


        //call the function to display select years 
        displaySelect(sort, selectSortId, currentSelect);

    };
    const settingsDisplay = function() {

        //current select settings

        let currentSelect = {
            name: 'Profile',
            id: 'profile'
        };

        //id of select settings
        const selectSettingsId = 'select-settings';

        //array of settings objects
        const settings = [
            { name: 'Profile', id: 'profile' },
            { name: 'Theme', id: 'theme' }
        ];


        //call the function to display select years 
        displaySelect(settings, selectSettingsId, currentSelect);

    };

    //inizialisation of selects
    if (name === 'calendar') {
        monthesDisplay();
        yearsDisplay();
    } else if (name === 'tasks') {
        sortDisplay()
    } else if (name === 'home') {

    } else if (name === 'settings') {
        settingsDisplay()
    }

}