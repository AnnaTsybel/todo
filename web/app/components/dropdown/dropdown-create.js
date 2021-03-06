export default function select(name) {

    const dropdowns = [{
            id: 'select-sort',
            page: 'project'
        },
        {
            id: 'select-month',
            page: 'calendar'
        },
        {
            id: 'select-year',
            page: 'calendar'
        },
        {
            id: 'select-settings',
            page: 'settings'
        }
    ];
    //create element 
    function createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    //creating dropdown menu Element
    function createDropdown(id) {

        const selectMain = createElement('div', 'select');
        selectMain.setAttribute('id', `${id}`);
        const selectMainHeader = createElement('div', 'select__header');
        const selectMainCurrent = createElement('span', 'select__current');
        const selectMainIcon = createElement('span', 'icon-arrow-down');
        selectMainIcon.classList.add('select__icon')
        const selectMainBody = createElement('div', 'select__body');
        selectMainHeader.append(selectMainCurrent, selectMainIcon);
        selectMain.append(selectMainHeader, selectMainBody);
        return selectMain;
    }
    let arr = []
    dropdowns.forEach(function(el) {
        if (el.page === name) {
            arr.push(createDropdown(el.id));
        }
    });

    return arr;

}