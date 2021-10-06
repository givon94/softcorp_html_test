const body = document.querySelector('body');
const headerBurger = document.querySelector('#burger');
const headerNav = document.querySelector('#header-nav');
const paymentInput = document.querySelector('#input-payment');
const paymentBtn = document.querySelector('.order__input-payment-btn');
const paymentBtnText = document.querySelector('.order__input-payment-btn-text');
const paymentLists = document.querySelector('.order__input-payment-lists');
const paymentList = document.querySelectorAll('.order__input-payment-list');
const rangeButton = document.querySelector('.order__input-range');
const rangeProgress = document.querySelector('.order__input-range-title-progress');
const fileInput = document.querySelector('#input-file');
const fileBtn = document.querySelector('.order__input-file-btn');
const fileBtnText = document.querySelector('.order__input-file-btn-text');
const fileBtnClose = document.querySelector('.order__input-file-btn-close');
const orderForm = document.querySelector('.order__form');


headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__nav-burger--active');
    headerNav.classList.toggle('header__nav-lists-wrapper--visible');
    body.classList.toggle('no_scroll');
});



paymentBtn.addEventListener('click', e => {
    e.preventDefault();
    if (paymentBtn.classList.contains('order__input-payment-btn--active')) {
        paymentBtn.classList.remove('order__input-payment-btn--active');
        paymentLists.classList.remove('order__input-payment-lists--visible');
    } else {
        paymentBtn.classList.add('order__input-payment-btn--active');
        paymentLists.classList.add('order__input-payment-lists--visible');
    }
})



for (let i = 0; i < paymentList.length; i++) {
    paymentList[i].addEventListener('click', () => {
        paymentList.forEach((list)=> {
            list.classList.remove('order__input-payment-list--active');
        });

        const paymentListVal = paymentList[i].innerText;
        paymentInput.value = paymentListVal;
        paymentBtnText.innerText = paymentListVal;

        paymentList[i].classList.add('order__input-payment-list--active');
        paymentBtn.classList.remove('order__input-payment-btn--active');
        paymentLists.classList.remove('order__input-payment-lists--visible');
    })
}


rangeButton.addEventListener('input', e => {
    rangeProgress.innerText = e.target.value + ' %';
})

fileInput.addEventListener('change', e => {
    if (e.target.value.length > 0) {
        fileBtnClose.classList.add('order__input-file-btn-close--visible');
        fileBtn.classList.add('order__input-file-btn--active');
    }

    fileBtnText.innerText = e.target.files[0].name;
})

fileBtnClose.addEventListener('click', () => {
    fileBtn.value = ''
    fileBtnClose.classList.remove('order__input-file-btn-close--visible');
    fileBtn.classList.remove('order__input-file-btn--active');
    fileBtnText.innerText = 'Прикрепить файл';
})


orderForm.addEventListener('submit', e => {
    e.preventDefault()
})
