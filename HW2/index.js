const testimonials = document.querySelector('.main-center');
const scroller = document.querySelector('.scroller');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const itemWidth = document.querySelector('.scroller-item').clientWidth;
const scrollerItemAr = document.querySelectorAll('.scroller-item');
const dotsEl = document.querySelector('.sim-slider-dots');

// let diffNum = 1;
// console.log(itemWidth * diffNum);

function scrollToNextItem() {
    scroller.scrollBy({
        left: itemWidth,
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToPrevItem() {
    scroller.scrollBy({
        left: -itemWidth,
        top: 0,
        behavior: 'smooth'
    });
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
        scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
    else
    // Это первый элемент. Переходим к последнему элементу, установив для позиции прокрутки ширину скроллера
        scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
};
nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);
// инициализация индикаторных точек
// let sum = '';
// for (let i = 0; i < scrollerItemAr.length; i++) {
//     sum += `<span class = "sim-dot" id='${i}'><i class="fa-solid fa-circle"></i> </span>`
// };
// dotsEl.innerHTML = sum;
// const indicatorDotsAll = dotsEl.querySelectorAll('.sim-dot');
// // Назначаем точкам обработчик события 'click'
// for (let n = 0; n < indicatorDotsAll.length; n++) {
//     indicatorDotsAll[n].addEventListener('click', function() {
//         diffNum = Math.abs(n - indicatorDotsAll[n].id);
//         if (n < indicatorDotsAll[n].id) {
//             scrollToPrevItem(diffNum)
//         } else if (n > indicatorDotsAll[n].id) {
//             scrollToPrevItem(diffNum)
//         }
//         // Если n == that.currentElement ничего не делаем
//     }, false)
// };
// //dotOff(0); // точка[0] выключена, остальные включены
// for (let i = 1; i < scrollerItemAr.length; i++) {
//     //dotOn(i)
// };