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
const shareIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/></svg>';
const liveIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_34_3029)"><g clip-path="url(#clip1_34_3029)"><path d="M20.9991 9.46114C20.9991 8.32124 20.6331 7.25043 19.9344 6.31779C20.2006 5.41969 20.2671 4.27979 20.2006 2.96718C20.1673 2.41451 19.7348 2 19.2024 2C18.903 2 16.3743 2.03454 14.9104 3.38169C13.6461 3.1399 12.3152 3.1399 11.0176 3.38169C9.58692 2.03454 7.05826 2 6.72555 2C6.1932 2 5.76067 2.41451 5.7274 2.96718C5.62758 4.27979 5.7274 5.41969 5.99357 6.31779C5.29486 7.28497 4.92887 8.35579 4.92887 9.46114C4.92887 11.8791 6.72555 14.0553 9.45383 15.0915C9.35401 15.2988 9.28747 15.5406 9.22093 15.7824C6.32629 15.4715 4.96215 12.7427 4.8956 12.639C4.6627 12.1209 4.06381 11.9136 3.56473 12.19C3.06566 12.4318 2.86603 13.0535 3.1322 13.5717C3.19875 13.7444 5.02869 17.4404 9.05457 17.8549V20.9637C9.05457 21.5509 9.4871 22 10.0527 22H15.8753C16.4409 22 16.8734 21.5509 16.8734 20.9637V16.8532C16.8734 16.2314 16.7403 15.6442 16.5074 15.1261C19.2024 14.0553 20.9991 11.9136 20.9991 9.46114Z" fill="white"/></g></g><defs><clipPath id="clip0_34_3029"><rect width="18" height="20" fill="white" transform="translate(3 2)"/></clipPath><clipPath id="clip1_34_3029"><rect width="18" height="20" fill="white" transform="translate(3 2)"/></clipPath></defs></svg>';
const popDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

const projectLists = [
  {
    id: '1',
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keep track of hundreds of components',
    popDescription,
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: '2',
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keep track of hundreds of components',
    popDescription,
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: '3',
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keep track of hundreds of components',
    popDescription,
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: '4',
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keep track of hundreds of components',
    popDescription,
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: '5',
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keep track of hundreds of components',
    popDescription,
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
    icon1: shareIcon,
    icon2: liveIcon,
  },
  {
    id: '6',
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keep track of hundreds of components',
    popDescription,
    imageLink: '/icons/desktopimage/SnapshootPortfolio.png',
    tech: ['Codekit', 'Github', 'Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
    icon1: shareIcon,
    icon2: liveIcon,
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
                    <button class="see" type="button">See Project</button>
                    </div>   
                </div>         
        </div>
  `;
  projectsContainer.innerHTML = show;
});

const modal = document.querySelector('.modal');
const seeBtn = document.querySelectorAll('.see');
const ovarlayBg = document.querySelector('.ovarlay');
const body = document.querySelector('body');

seeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    const Index = Array.from(seeBtn).indexOf(event.target);
    modal.innerHTML = `
    <div class="modal-container ">
          <i onclick="closePopup()" id="close" class="close fa-regular fa-x" id="close-btn"></i>
            <img src=${projectLists[Index].imageLink} alt="project-img"/>
            <p class="title">${projectLists[Index].title}</p>
            <div class="btn-container">
              <a href="${projectLists[Index].liveVersion}" class="link">See Live <i>${projectLists[Index].icon1}</i></a>
              <a href="${projectLists[Index].source}" class="link">See Source <i>${projectLists[Index].icon2}</i></a>
            </div>
              <ul class="project-language">
                <li class="language hideMe codekit">${projectLists[Index].tech[0]}</li>
                <li class="language hideMe github">${projectLists[Index].tech[1]}</li>
                <li class="language ruby">${projectLists[Index].tech[2]}</li>
                <li class="language css">${projectLists[Index].tech[3]}</li>
                <li class="language js">${projectLists[Index].tech[4]}</li>
                <li class="language hideMe boot">${projectLists[Index].tech[5]}</li>
                <li class="language hideMe terminal">${projectLists[Index].tech[6]}</li>
                <li class="language hideMe codepen">${projectLists[Index].tech[7]}</li>
              </ul> 
              <p class="secondary-text">${projectLists[Index].popDescription}</p>
          </div> `;
    modal.classList.toggle('active');
    ovarlayBg.classList.toggle('ovalayActivated');
    body.classList.toggle('ovalayActivated');
  });
});

// eslint-disable-next-line no-unused-vars
function closePopup() {
  const close = document.querySelector('#close');
  close.addEventListener('click', () => {
    body.classList.remove('ovalayActivated');
    ovarlayBg.classList.remove('ovalayActivated');
    modal.classList.remove('active');
  });
}
