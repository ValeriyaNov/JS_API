const testimonials = document.querySelector('.main-center');
const scroller = document.querySelector('.scroller');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const itemWidth = document.querySelector('.scroller-item').clientWidth;
console.log(nextBtn);

function scrollToNextItem() {
    scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
}

function scrollToPrevItem() {
    scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
}

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
    // Позиция прокрутки расположена не в начале последнего элемента
        scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
    else
    // Достигнут последний элемент. Возвращаемся к первому элементу, установив для позиции прокрутки 0
        scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
    // Позиция прокрутки расположена не в начале последнего элемента
        scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
    else
    // Это первый элемент. Переходим к последнему элементу, установив для позиции прокрутки ширину скроллера
        scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
}
nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);