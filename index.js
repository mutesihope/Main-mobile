/* eslint-disable linebreak-style */
const hamburger = document.getElementById('mobile-nav');
const dropDown = document.getElementById('desktop-nav');
const icon = document.querySelector('.fa-bars');
const links = document.querySelectorAll('.nav-link');

let isShown = false;
hamburger.addEventListener('click', () => {
  isShown = !isShown;
  if (isShown === true) {
    dropDown.style.display = 'flex';
    hamburger.style.color = 'black';
    icon.className = 'fa-regular fa-x';
    icon.style.fontSize = '15px';
    dropDown.classList.remove('active');
  } else {
    dropDown.style.display = 'none';
    icon.className = 'fa-solid fa-bars';
  }
});

links.forEach((btn) => {
  btn.addEventListener('click', () => {
    dropDown.classList.toggle('active');
    icon.className = 'fa-solid fa-bars';
  });
});
