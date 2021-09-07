export default function modal() {

    let modalLinks = document.querySelectorAll('.modal-link')

    let modalClose = document.querySelectorAll('.modal-close');

    let modalSubmit = document.getElementById('modal-submit');


    for (let i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', el => {
            let modalId = modalLinks[i].getAttribute('href').replace('#', '');
            let modal = document.getElementById(modalId)
            openModal(modal);
            el.preventDefault();
        });
    }
    if (modalClose.length > 0) {
        for (let i = 0; i < modalClose.length; i++) {
            modalClose[i].addEventListener('click', el => {
                let modal = modalClose[i].closest('.modal');
                closeModal(modal);
                el.preventDefault();
            })
        }
    }

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

    function closeModal(modal) {
        let bodyOpen = modal.querySelector('.modal__body');
        modal.classList.remove('open');
        bodyOpen.classList.remove('open');
    }




}