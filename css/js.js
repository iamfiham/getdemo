const  menubutton = document.querySelector('#burger');
const  menu = document.querySelector('#ul');
const  close = document.querySelector('#close');
const menu_lists = document.querySelectorAll('ul li');
const button = document.querySelector('#button');


function abc(){
    menu.style.transform="translateX(calc(-1*(100vw + 50px)))";
    close.style.transform="translateX(calc(-1*(100vw + 100px)))";

button.style.transform="translateX(calc(-1*(100vw + 50px)))"    
}
function xyz () {
   if (window.innerWidth <= 400) {
    console.log(true)
    menu.style.transform="translateX(0px)";
    close.style.transform="translateX(0px)"; 
    button.style.transform="translateX(0px)";
   }
   else{
       console.log(false)
   }   
}
menubutton.addEventListener('click',abc);
close.addEventListener('click',xyz);

menu_lists.forEach((x)=>{x.addEventListener('click',xyz)});
