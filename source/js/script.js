const navBlock = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const modalPopup = document.querySelector('.add-to-cart');
const orderBtn = document.querySelector('.week-product__product-order');

/* nav show/close */

navBlock.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navBlock.classList.contains('main-nav--closed')) {
    navBlock.classList.remove('main-nav--closed');
    navBlock.classList.add('main-nav--opened');
  } else {
    navBlock.classList.add('main-nav--closed');
    navBlock.classList.remove('main-nav--opened');
  }
});

/* modal show/close */

orderBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalPopup.classList.add('add-to-cart--show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    if (modalPopup.classList.contains('add-to-cart--show')) {
      evt.preventDefault();
      modalPopup.classList.remove('add-to-cart--show');
    }
  }
});
