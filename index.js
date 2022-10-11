const hamburger = document.getElementById('mobile-nav');
 const dropDown = document.getElementById('desktop-nav');
 const icon = document.querySelector('.fa-bars');
 const links = document.querySelectorAll('.nav-link');
 const showNo = document.querySelector('.mobile-none');

let isShown = false;
hamburger.addEventListener("click", function(){ 
   isShown = !isShown
   if(isShown === true){
     dropDown.style.display = "flex" 
     hamburger.style.color = 'black'
     icon.className = "fa-regular fa-x"
     icon.style.fontSize = '15px'
     dropDown.classList.remove('active')
   }
   else{
     dropDown.style.display = "none"

    icon.className = "fa-solid fa-bars"

   }
})

links.forEach((btn) => {
    btn.addEventListener('click', () => {
        // dropDown.style.display = "none" 
        dropDown.classList.toggle('active')
        icon.className = 'fa-solid fa-bars'
        
    });
  });