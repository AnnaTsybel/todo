export default function slider() {
    let currentSlides = 1;

    let slides = document.querySelectorAll('.slider__item');
    showSlides(currentSlides);
    const nextSlide = document.querySelector('.next');
    console.log(nextSlide)
    nextSlide.addEventListener('click', function(el) {
        showSlides(currentSlides += 1);


    })
    const prevSlide = document.querySelector('.prev');
    prevSlide.addEventListener('click', function(el) {

        showSlides(currentSlides -= 1);

    })


    function showSlides(element) {
        let prev = element - 2;
        let prevPrev = element - 3;

        let next = element;
        let nextNext = element + 1;

        let slide = document.querySelectorAll('.slider__item');

        if (element > slide.length) {
            currentSlides = 1;
            element = 1
        }


        if (element < 1) {
            element = slide.length;
            currentSlides = slide.length;
        }

        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }

        function addPrev(el) {
            slide[el].style.display = "block";
            slide[el].classList.add('additional');
            slide[el].classList.add('additional__prev');
        }

        function addNext(el) {
            slide[el].style.display = "block";
            slide[el].classList.add('additional');
            slide[el].classList.add('additional__next');
        }

        function checkForNext(el) {

            if (slide[el].classList.contains('additional__next')) {
                slide[el].classList.remove('additional__next');
                slide[el].classList.remove('additional');
            }
        }

        function checkForPrev(el) {

            if (slide[el].classList.contains('additional__prev')) {
                slide[el].classList.remove('additional__prev');
                slide[el].classList.remove('additional');
            }
        }

        function checkForActive(el) {
            if (slide[el].classList.contains('active')) {
                slide[el].classList.remove('active');
            }
        }
        if (element === 1) {
            prev = slide.length - 1;
            prevPrev = slide.length - 2;
            next = element;
            nextNext = element + 1;
            checkForPrev(element - 1);
            checkForNext(element - 1);
            checkForActive(element);
            checkForActive(prev);

        } else if (element === 2) {
            prev = element - 2;
            prevPrev = slide.length - 1;
            next = element;
            nextNext = element + 1;
            checkForPrev(element - 1);
            checkForNext(element - 1);
            checkForActive(element);
            checkForActive(prev);
        } else if (element > 2 && element < slide.length - 1) {
            prev = element - 2;
            prevPrev = element - 3;
            next = element;
            nextNext = element + 1;
            checkForPrev(element - 1);
            checkForNext(element - 1);
            checkForActive(element);
            checkForActive(prev);

        } else if (element === slide.length) {
            prev = element - 2;
            prevPrev = element - 3;
            next = 0;
            nextNext = 1;
            checkForPrev(slide.length - 1);
            checkForNext(element - 1);
            checkForActive(slide.length - 2);
            checkForActive(0);

        } else if (element === slide.length - 1) {
            prev = element - 2;
            prevPrev = element - 3;
            next = slide.length - 1;
            nextNext = 0;

            checkForPrev(element - 1);
            checkForNext(element - 1)
            checkForActive(element - 2);
            checkForActive(element);
        }
        addNext(next);
        addPrev(prev);
        checkForPrev(prevPrev);
        checkForNext(nextNext);


        slide[element - 1].style.display = "block";
        slide[element - 1].classList.add('active');

    }

};