const photoContentEl = document.getElementById("photo-container");
const url = 'https://api.unsplash.com/photos/random?client_id=PzheYnNXy_-D32LnxR5FGSu5DcJUsid_7RWsJCuiOik';
const containerEl = document.querySelector('.photo');
const btnEl = document.querySelector('.btn');
let history = [];
history = JSON.parse(localStorage.getItem('history'));
if (history === null) { history = [] };

try {
    renderPhoto();
    async function renderPhoto() {

        const dataRes = await fetch(url);
        const dataPhoto = await dataRes.json();
        let stringHtml = getPhoto(dataPhoto);
        containerEl.innerHTML = stringHtml;
        containerEl.addEventListener('click', function(e) {

            const targetEl = e.target.parentElement;
            let counter = localStorage.getItem(dataPhoto.id) || 0;
            const counterEl = containerEl.querySelector('.counter');
            counterEl.textContent = counter;
            let likes = parseInt(counterEl.textContent);

            if (!localStorage.getItem(dataPhoto.id)) {
                likes++;
                localStorage.setItem(dataPhoto.id, 'liked');
                counterEl.textContent = likes;
                targetEl.classList.add('pressed');

            } else {

                likes = 0;
                localStorage.removeItem(dataPhoto.id);
                counterEl.textContent = likes;
                targetEl.classList.remove('pressed');
            }
        });

        history.push([dataPhoto.urls.small, dataPhoto.user.name, dataPhoto.id]);
        localStorage.setItem('history', JSON.stringify(history));
    }




    function getPhoto(dataInfo) {
        return `<div class="photo-img">
        <img src="${dataInfo.urls.small}" alt=" random photo "></div>
    <div class="photo-description ">
        <div class="name">${dataInfo.user.name}</div>
        <div class="like"><i class="fa-solid fa-heart "></i></div>
        <div class="counter"></div>
    </div>`
    };

    let countHistory = 0;
    btnEl.addEventListener('click', function(e) {
        let historyBtn = JSON.parse(localStorage.getItem('history'));

        let lengthHistory = historyBtn.length - 1;
        let conterPrev = 0;
        let classCheck = '';

        let prevEl = historyBtn[lengthHistory - 1 - countHistory];
        if (prevEl != undefined) {
            if (localStorage.getItem(prevEl[2])) {
                conterPrev = 1;
                classCheck = 'pressed';
            }
            if (lengthHistory > 3) { containerEl.innerHTML = `<div class="photo-img">
            <img src="${prevEl[0]}" alt=" random photo "></div>
        <div class="photo-description ">
            <div class="name">${prevEl[1]}</div>
            <div class="like ${classCheck}"><i class="fa-solid fa-heart "></i></div>
            <div class="counter">${conterPrev}</div>
        </div>` }

            countHistory = countHistory + 1;
        }

    });

} catch (err) {
    alert(err)
}