'use strict';

var hamburger = document.querySelector('.logo__hamburger');
var nav = document.querySelector('.nav__list');
var navItem = document.querySelectorAll('.nav__item');
var navLink = document.querySelectorAll('.nav__link');
var logoImg = document.querySelector('.logo__img');
var logoHamburger = document.querySelector('.logo__hamburger');
// var form = document.getElementById('form');

function ready() {
  function openHamburger() {
    hamburger.classList.toggle('logo__hamburger--open');

    nav.classList.toggle('nav__list--adaptiv');

    navItem.forEach(function (item) {
      if (item.classList.contains !== ('nav__item--adaptiv')) {
        item.classList.add('nav__item--adaptiv');
      }
    });

    navLink.forEach(function (item) {
      if (item.classList.contains !== ('nav__link--adaptiv')) {
        item.classList.add('nav__link--adaptiv');
      }
    });
  }

  function closeHamburger() {
    hamburger.classList.remove('logo__hamburger--open');
    nav.classList.remove('nav__list--adaptiv');
  }

  nav.classList.remove('nav__list--nojs');
  logoImg.style.padding = '20px';

  logoHamburger.classList.add('logo__hamburger--adaptiv');

  hamburger.addEventListener('click', openHamburger);

  navLink.forEach(function (item) {
    item.addEventListener('click', closeHamburger);
  });

  // $('input[name=phone]').mask('+7 (999) 999-99-99');

  // $('#form').validate({
  //   rules: {
  //     name: {
  //       required: true
  //     },
  //     phone: {
  //       required: true,
  //     }
  //   },
  //   messages: {
  //     name: {
  //       required: 'Поле обязательно для заполнения'
  //     },
  //     phone: {
  //       required: 'Введите номер телефона',
  //     }
  //   }
  // });
}

document.addEventListener('DOMContentLoaded', ready);