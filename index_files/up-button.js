"use strict";

document.addEventListener('DOMContentLoaded', function () {

  let upButton = document.querySelector('.up-button');

  console.log(3456);
  window.onscroll = function () {
    if (window.pageYOffset > 600) {
      upButton.classList.add('active');
    } else {
      upButton.classList.remove('active');
    }

  };

  upButton.onclick = function () {
    window.scrollTo(0, 0);
  };

});

