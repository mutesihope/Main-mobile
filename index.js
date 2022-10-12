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

// POP UP WINDOWS

const projectLists = [
  {
    id: '1',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/first-image.jpg',
    alt: 'first project image',
    tech: ['html','css','javascript'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/second-image.png',
    alt: 'second project image',
    tech: ['html','css','javascript'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '3',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/third-image.jpg',
    alt: 'third project image',
    tech: ['html','css','javascript'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/fouth-image.jpg',
    alt: 'fourth project image',
    tech: ['html','css','javascript'],
    liveVersion: '#',
    source: '#'
  }
]
