
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')

}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
console.log(menu)

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')

// Using your menuButton reference, add a click handler that calls toggleMenu

//Begin Menu Slide Stretch
menu.style.display = "block";
menu.style.left = "-350px"

const slide = () => {
  let pos = -350;
  let openPos = 0;
  let id = setInterval(frame,0.5);
 
  function frame(){
    if (pos === 0){     
     clearInterval(id)    
    }else if (menu.style.left === openPos + 'px'){
      openPos--;
      menu.style.left = openPos + "px";
       if(openPos === pos){ clearInterval(id)}
    }
      else{
        pos++;
          menu.style.left = pos + "px";
      }    
    }
  }

menuButton.addEventListener('click', slide)
//End Menu Slide
//menuButton.addEventListener('click', toggleMenu)  // from MPV code

//



