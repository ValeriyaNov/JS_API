const testimonials = document.querySelector('.main-center');
const scroller = document.querySelector('.scroller');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const itemWidth = document.querySelector('.scroller-item').clientWidth;
const scrollerItemAr = document.querySelectorAll('.scroller-item');
const dotsEl = document.querySelector('.sim-slider-dots');
let currentId = 0;
let sum = '';
for (let i = 0; i < scrollerItemAr.length; i++) {
    sum += `<span class = "sim-dot" id='${i}'><i class="fa-solid fa-circle"></i> </span>`
};
dotsEl.innerHTML = sum;
const indicatorDotsAll = dotsEl.querySelectorAll('.sim-dot');
let widthPoint = 0;

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth)) {
        scroller.scrollBy({
            left: itemWidth,
            top: 0,
            behavior: 'smooth'
        });

    } else {
        scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    }

};

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
        scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
    else
        scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
};

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);
nextBtn.addEventListener('click', function(e) {
    let testId = (scroller.scrollLeft) / 800;
    scrollToNextItem;
    if (testId === indicatorDotsAll - 2) { currentId = 0 };
    if (testId === indicatorDotsAll - 1)(currentId = 1);
    if (testId === 0)(currentId = 3);
    else { currentId = testId + 2 };
    // currentId = (scroller.scrollLeft - innerWidth) / 800;
    //console.log(currentId);
    renderPoint(currentId);
    console.log(currentId);
    //console.log(scroller.scrollLeft);
    scrollToNextItem;

});
prevBtn.addEventListener('click', function(e) {

    scrollToPrevItem;
    if (scroller.scrollLeft === 0) {
        currentId = indicatorDotsAll.length - 1;
    } else {
        currentId = (scroller.scrollLeft / 800) - 1;
    }
    renderPoint(currentId);
    console.log(scroller.scrollWidth);
    console.log(scroller.scrollLeft);


});


for (let n = 0; n < indicatorDotsAll.length; n++) {
    indicatorDotsAll[n].addEventListener('click', function() {
        for (let i = 0; i < scrollerItemAr.length; i++) {
            if (i != n) {
                indicatorDotsAll[i].classList.remove('dissable');
            } else { indicatorDotsAll[i].classList.add('dissable'); }
        };
        widthPoint = (scroller.scrollWidth / indicatorDotsAll.length) * n;
        scroller.scrollTo({ left: widthPoint, top: 0, behavior: 'smooth' });

    });
};

function upPoint() {
    if (scroller.scrollLeft === 0) {
        currentId = indicatorDotsAll.length - 1;
    } else {
        currentId = (scroller.scrollLeft / 800) - 1;
    }

    return currentId;
}

function renderPoint(idEl) {
    let idPoints = upPoint();
    //console.log(idPoints);
    for (let i = 0; i < scrollerItemAr.length; i++) {
        if (i != idPoints) {
            indicatorDotsAll[i].classList.remove('dissable');
        } else { indicatorDotsAll[i].classList.add('dissable'); }
    };
}