 const hamburger = document.getElementById('mobile-nav');
 const dropDown = document.getElementById('desktop-nav');
 

 
let isShown = false;
hamburger.addEventListener("click", function(){ 
   isShown = !isShown
   if(isShown === true){
     dropDown.style.display = "flex" 
     menuBar.style.color = 'white'
     menuBar.className = "your cross icon class name"
     menuBar.style.fontSize = '15px'
     menubar.childNodes.style.display = 'none'
   }
   else{
     dropDown.style.display = "none"
     menuBar.style.color = '#6070ff'
     menuBar.childNodes.className = "hamburger"
     menuBar.style.fontSize = '30px'
   }
  
});