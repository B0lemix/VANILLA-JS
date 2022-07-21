

//Const definitions for DOM elements


const slides = document.querySelectorAll(".slide");
const nextBtn=document.querySelector(".nextBtn");
const prevBtn=document.querySelector(".prevBtn");


// Put each slide with a left position to form the roll carousel. 
// Alternatively, we could use CSS  ".slide:nth-child{left:....}"
slides.forEach(function(slide,index){
    slide.style.left=`${index*100}%`
})


// working with a counter to control each image shown
let counter =0;


// Even listeners click for next and prev buttons

nextBtn.addEventListener("click", function(){

    // Doing click counter increase shown that element invoke carousel function
    counter++;
    carousel();
})

prevBtn.addEventListener("click", function(){

    // Doing click counter increase shown that element invoke carousel function
    counter--;
    carousel();
})


function carousel(){

    // If not images, counter equal to zero
    if(counter === slides.length){

        
        counter=0;
    }

     // If there are images, counter equal elements number minus 1
    if(counter < 0){
        counter=slides.length-1;
    }


    // To hide Next button when we go to roll carousel final
    
    if (counter<slides.length-1) {
        nextBtn.style.display="block"
    }else{
        nextBtn.style.display="none"
    }


    // To hide Prev button when we go to roll carousel start

    if (counter>0) {
        prevBtn.style.display="block"
    }else{
        prevBtn.style.display="none"
    }

    // For each slide shown doing click, the roll sliders move in X axis using counter %

    slides.forEach(function(slide){

        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

prevBtn.style.display="none";