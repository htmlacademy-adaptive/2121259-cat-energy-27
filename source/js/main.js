let navMain = document.querySelector('main-nav');
let headerToggle = document.querySelector('main-header__burger-btn');
let mainHeader = document.querySelector('main-header');

mainHeader.classList.remove('main-header--nojs');
mainHeader.classList.remove('main-header--opened');
mainHeader.classList.add('main-header--closed');

headerToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('main-header--closed')) {
    mainHeader.classList.remove('main-header--closed');
    mainHeader.classList.add('main-header--opened');

  } else {
    mainHeader.classList.add('main-header--closed');
    mainHeader.classList.remove('main-header--opened');
  }
});

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("burger").addEventListener("click", function() {
//     document.querySelector("header").classList.toggle("open")
//   })
// })
