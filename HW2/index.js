const testimonials = document.querySelector('.main-center');
const scroller = document.querySelector('.scroller');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const itemWidth = document.querySelector('.scroller-item').clientWidth;
const scrollerItemAr = document.querySelectorAll('.scroller-item');
const dotsEl = document.querySelector('.sim-slider-dots');


function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth)) {
        scroller.scrollBy({
            left: itemWidth,
            top: 0,
            behavior: 'smooth'
        });
    } else
        scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
        scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
    else
        scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
};

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

let sum = '';
for (let i = 0; i < scrollerItemAr.length; i++) {
    sum += `<span class = "sim-dot" id='${i}'><i class="fa-solid fa-circle"></i> </span>`
};
dotsEl.innerHTML = sum;
const indicatorDotsAll = dotsEl.querySelectorAll('.sim-dot');
let widthPoint = 0;

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