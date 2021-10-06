var body = document.querySelector('body');
var headerBurger = document.querySelector('#burger');
var headerNav = document.querySelector('#header-nav');
var paymentInput = document.querySelector('#input-payment');
var paymentBtn = document.querySelector('.order__input-payment-btn');
var paymentBtnText = document.querySelector('.order__input-payment-btn-text');
var paymentLists = document.querySelector('.order__input-payment-lists');
var paymentList = document.querySelectorAll('.order__input-payment-list');
var rangeButton = document.querySelector('.order__input-range');
var rangeProgress = document.querySelector('.order__input-range-title-progress');
var fileInput = document.querySelector('#input-file');
var fileBtn = document.querySelector('.order__input-file-btn');
var fileBtnText = document.querySelector('.order__input-file-btn-text');
var fileBtnClose = document.querySelector('.order__input-file-btn-close');
var orderForm = document.querySelector('.order__form');
headerBurger.addEventListener('click', function () {
  headerBurger.classList.toggle('header__nav-burger--active');
  headerNav.classList.toggle('header__nav-lists-wrapper--visible');
  body.classList.toggle('no_scroll');
});
paymentBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (paymentBtn.classList.contains('order__input-payment-btn--active')) {
    paymentBtn.classList.remove('order__input-payment-btn--active');
    paymentLists.classList.remove('order__input-payment-lists--visible');
  } else {
    paymentBtn.classList.add('order__input-payment-btn--active');
    paymentLists.classList.add('order__input-payment-lists--visible');
  }
});

var _loop = function _loop(i) {
  paymentList[i].addEventListener('click', function () {
    paymentList.forEach(function (list) {
      list.classList.remove('order__input-payment-list--active');
    });
    var paymentListVal = paymentList[i].innerText;
    paymentInput.value = paymentListVal;
    paymentBtnText.innerText = paymentListVal;
    paymentList[i].classList.add('order__input-payment-list--active');
    paymentBtn.classList.remove('order__input-payment-btn--active');
    paymentLists.classList.remove('order__input-payment-lists--visible');
  });
};

for (var i = 0; i < paymentList.length; i++) {
  _loop(i);
}

rangeButton.addEventListener('input', function (e) {
  rangeProgress.innerText = e.target.value + ' %';
});
fileInput.addEventListener('change', function (e) {
  if (e.target.value.length > 0) {
    fileBtnClose.classList.add('order__input-file-btn-close--visible');
    fileBtn.classList.add('order__input-file-btn--active');
  }

  fileBtnText.innerText = e.target.files[0].name;
});
fileBtnClose.addEventListener('click', function () {
  fileBtn.value = '';
  fileBtnClose.classList.remove('order__input-file-btn-close--visible');
  fileBtn.classList.remove('order__input-file-btn--active');
  fileBtnText.innerText = 'Прикрепить файл';
});
orderForm.addEventListener('submit', function (e) {
  e.preventDefault();
});