export default function select() {
    //get header from dropdown 
    let selectHeader = document.querySelectorAll('.select__header');
    //get item from dropdown 
    let selectItem = document.querySelectorAll('.select__item');
    let selectIcon = document.querySelector('.select__icon');
    console.log(selectIcon)
        //add class to make elements visible or invisible
    selectHeader.forEach(item => {
        item.addEventListener('click', function() {
            this.parentElement.classList.toggle('show');
            //switching arrows icons
            if (this.parentElement.classList.contains('show')) {
                selectIcon.setAttribute('src', 'images/dest/icons/arrow-up.png');
            } else {
                selectIcon.setAttribute('src', 'images/dest/icons/arrow-down.png');
            }

        })
    })

    //select elements which will switch with current element
    selectItem.forEach(item => {
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
            selectIcon.setAttribute('src', 'images/dest/icons/arrow-down.png');
            //close dropdown 
            select.classList.remove('show');
        })
    })
}