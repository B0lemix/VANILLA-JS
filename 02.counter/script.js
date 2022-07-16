
// Const definitions for DOM elements


const counter= document.getElementById("counter");
const btn_increase= document.getElementById("increase");
const btn_decrease= document.getElementById("decrease");
const btn_reset= document.getElementById("reset");


// Var definitions for counter 

var count=0;


// EventListeners for each button

    // btn increase

btn_increase.addEventListener('click',function(){
     count=count+1;
     counter.innerHTML=count;
});

    // btn decrease


btn_decrease.addEventListener('click',function(){
     count=count-1;
     counter.innerHTML=count;
});

    // btn reset

btn_reset.addEventListener('click',function(){
     count=0;
     counter.innerHTML=count;
});
