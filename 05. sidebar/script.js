
//Const definitions for each element involved in navbar effect
const btn_menu = document.getElementById("btn_menu");
const nav_elements = document.getElementById("nav");


// EventListener TOGGLE  type that toggle between turn on/off class for navbar
btn_menu.addEventListener("click",function(){
    
    
    nav_elements.classList.toggle("nav_on");

});

