// BURGER
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });
}
if (menuLinks) {
  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    });
  });
}

document.querySelector('.header__btn').addEventListener('click', () => {
  document.querySelector('.block-input').classList.add('block-input-active');
});

document.querySelector('.close__btn').addEventListener('click', () => {
  document.querySelector('.block-input').classList.remove('block-input-active');
});

// SWIPER

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// TABS

let tabsBtn = document.querySelectorAll('.item__button');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('item__button--active');
    });
    e.currentTarget.classList.add('item__button--active');

    tabsItem.forEach(function (element) {
      element.classList.remove('tabs-item--active');
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('tabs-item--active');
  });
});

// ACCORDION
/* Buttons not working properly, i don't know how to do them right */
new Accordion('.faq__list', {
  elementClass: 'faq__item',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});

let faqBtn = document.querySelectorAll('.faq__button');

faqBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    faqBtn.forEach(function (btn) {
      btn.classList.remove('btn-rotate');
    });
    e.currentTarget.classList.toggle('btn-rotate');
    // if (e.currentTarget.classList.contains("btn-rotate")) {
    //   e.currentTarget.classList.remove("btn-rotate");
    // }
  });
});
