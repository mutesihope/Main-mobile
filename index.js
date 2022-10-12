/* eslint-disable linebreak-style */
const hamburger = document.getElementById('mobile-nav');
const dropDown = document.getElementById('desktop-nav');
const icon = document.querySelector('.fa-bars');
const links = document.querySelectorAll('.nav-link');
const projectsContainer = document.getElementById('projects-container');

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
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '',
    tech: ['ruby on rails','css','javascript', 'html'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '2',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '',
    tech: ['ruby on rails','css','javascript', 'html'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '3',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '',
    tech: ['ruby on rails','css','javascript', 'html'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '4',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '',
    tech: ['ruby on rails','css','javascript', 'html'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '5',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '',
    tech: ['ruby on rails','css','javascript', 'html'],
    liveVersion: '#',
    source: '#'
  },
  {
    id: '6',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '',
    tech: ['ruby on rails','css','javascript', 'html'],
    liveVersion: '#',
    source: '#'
  },
]

projectLists.map((item) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'projects-card';

  const imageHolder = document.createElement('div');
  imageHolder.className = 'image-holder';
  projectCard.appendChild(imageHolder);
   
  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  //creating project header
  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  projectHeader.innerText = item.name;
  textContainer.appendChild(projectHeader);
  
  //creating unordered list
  const projectLanguage = document.createElement('ul');
  projectLanguage.className = 'project-language';
  const firstList = document.createElement('li');
  firstList.className = 'language ruby';
  firstList.innerText = item.tech[0];
  projectLanguage.appendChild(firstList);
  const secondList = document.createElement('li');
  secondList.className = 'language css';
  secondList.innerText = item.tech[1];
  projectLanguage.appendChild(secondList);
  const thirdList = document.createElement('li');
  thirdList.className = 'language js';
  thirdList.innerText = item.tech[2];
  projectLanguage.appendChild(thirdList);
  const fourthList = document.createElement('li');
  fourthList.className = 'language html';
  fourthList.innerText = item.tech[3];
  projectLanguage.appendChild(fourthList);
  textContainer.appendChild(projectLanguage);

  //creating button element
  // add eventlistener to button 
  const projButton = document.createElement('button');
  projButton.className = 'button';
  projButton.innerText = 'See Project';
  textContainer.appendChild(projButton);

  projectCard.appendChild(textContainer);
  projectsContainer.appendChild(projectCard);
})
