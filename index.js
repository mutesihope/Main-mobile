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
const projectsContainer = document.querySelector('#projects-container');
let show = '';

const projectLists = [
  {
    id: '1',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['ruby on rails', 'css', 'javascript', 'html'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '2',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['ruby on rails', 'css', 'javascript', 'html'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '3',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['ruby on rails', 'css', 'javascript', 'html'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '4',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['ruby on rails', 'css', 'javascript', 'html'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '5',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['ruby on rails', 'css', 'javascript', 'html'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: '6',
    name: 'Multi-Post Stories Gain+Glory',
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['ruby on rails', 'css', 'javascript', 'html'],
    liveVersion: '#',
    source: '#',
  },
];
// tooglepopup
projectLists.forEach((data) => {
  show += `
        <div class="projects-card">   
            <img class="image-holder" src=${data.imageLink} />
                <div class="text-container" >
                <h3 class="project-header">${data.name}</h3>
                  <ul class="project-language">
                    <li class="language ruby">${data.tech[0]}</li>
                    <li class="language css">${data.tech[1]}</li>
                    <li class="language js">${data.tech[2]}</li>
                    <li class="language html">${data.tech[3]}</li>
                  </ul>
                  <div class="button">
                    <button type="button">See Project</button>
                    </div>   
                </div>         
        </div>
  `;
  projectsContainer.innerHTML = show;
});
function closePop(){

}
const closeBtn=document.getElementById('close-btn');
closeBtn.addEventListener("click",)
