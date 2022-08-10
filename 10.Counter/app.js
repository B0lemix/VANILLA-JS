//Const definitions for DOM elements
const value= document.getElementById("counter");
const btnIncrease= document.getElementById("increase");
const btnReset= document.getElementById("reset");
const btnDecrease= document.getElementById("decrease");

// Variable for counter mod counter value
let counter=0;


// This function set and update the value of the counter after each click 

function setValue(count){
    console.log(count);
   return value.textContent=count;
}


//Event Listeners for each button


btnIncrease.addEventListener('click', ()=> setValue(++counter) )
btnReset.addEventListener('click', ()=> setValue(counter=0) )
btnDecrease.addEventListener('click', ()=> setValue(--counter) )

