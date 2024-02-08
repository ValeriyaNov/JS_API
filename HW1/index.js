const content = document.querySelector('.content');

let initialData;
let userRecord = {};
if (localStorage.getItem('totalRecord')) {
    initialData = JSON.parse(localStorage.getItem('totalRecord'));
} else {
    let recordData = await fetch('./scheduledata.json');
    initialData = await recordData.json();
    localStorage.setItem('totalRecord', JSON.stringify(initialData));
}
if (localStorage.getItem('userRecord')) {
    userRecord = JSON.parse(localStorage.getItem('userRecord'))
} else {
    for (let i = 1; i <= 5; i++) {
        userRecord[i] = false;
    }
    localStorage.setItem('userRecord', JSON.stringify(userRecord));
}


initialData.forEach(item => createRow(item));


function createRow(item) {
    const div = document.createElement('div');
    div.classList.add('record');
    div.insertAdjacentHTML('afterbegin', `
    <div class="record__item name"></div>
    <div class="record__item time"></div>
    <div class="record__item participants"></div>
    <div class="record__item registered"></div>
    <button type="button" class="btn btn__save">записаться</button>
    <button type="button" class="btn btn__cancel">отменить запись</div>
`);
    content.appendChild(div);
    div.id = item.id;
    div.querySelector('.name').textContent = item.name;
    div.querySelector('.time').textContent = item.time;
    div.querySelector('.participants').textContent = item.maxParticipants;
    div.querySelector('.registered').textContent = item.currentParticipants;
    const btnSave = div.querySelector('.btn__save');
    const btnCancel = div.querySelector('.btn__cancel');
    if (!userRecord[item.id]) {
        btnCancel.disabled = true;
        btnCancel.classList.add('disabled');
    }
    if (userRecord[item.id] || item.maxParticipants === item.currentParticipants) {
        btnSave.disabled = true;
        btnSave.classList.add('disabled');
    }
    btnSave.addEventListener('click', e => sign(e.target));
    btnCancel.addEventListener('click', e => sign(e.target));
}


function btnToggle(btn) {
    if (btn.disabled) {
        btn.classList.remove('disabled');
    } else {
        btn.classList.add('disabled');
    }
    btn.disabled = !btn.disabled;
}

function sign(btn) {
    btnToggle(btn);
    const div = btn.closest('.record')
    const id = div.id;
    let adder = 1;
    if (btn.classList.contains('btn__save')) {
        userRecord[id] = true;
        btnToggle(btn.nextElementSibling);
    } else if (btn.classList.contains('btn__cancel')) {
        userRecord[id] = false;
        btnToggle(btn.previousElementSibling);
        adder = -1;
    }
    initialData.forEach(item => {
        if (item.id === Number(id)) {
            item.currentParticipants = item.currentParticipants + adder;
            div.querySelector('.registered').textContent = item.currentParticipants;
            localStorage.setItem('totalRecord', JSON.stringify(initialData));
        }
    });
    localStorage.setItem('userRecord', JSON.stringify(userRecord));
}