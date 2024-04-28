"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const breed3Block = document.querySelector('.experience');
  const breed3List = breed3Block.querySelectorAll('.experience__item');
  const breedButton = breed3Block.querySelector('.experience__button');

  const SHOW = 2;

  hiddenList();

  breedButton.addEventListener('click', function () {
    if (breedButton.textContent == 'Показать больше') {
      showList();
      breedButton.textContent = 'Скрыть';
    } else if (breedButton.textContent = 'Скрыть') {
      hiddenList();
      breedButton.textContent = 'Показать больше';
    } else {
      showList();
      breedButton.textContent = 'Скрыть';
    }
  })

  function hiddenList() {
    for (let i = SHOW; i < breed3List.length; i++) {
      breed3List[i].style.display = "none";
    }
  };

  function showList() {
    for (let i = 0; i < breed3List.length; i++) {
      breed3List[i].style.display = "flex";
    }
  }
})
