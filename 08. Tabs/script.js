
// Const definitions for ecah DOM element
const btns=document.querySelectorAll(".tab-btn");
const about=document.querySelector(".about");
const articles=document.querySelectorAll(".content");


// Event Listener click associate to each button of tab section

about.addEventListener('click',function(e){

    const id = e.target.dataset.id;

    if(id){

        // remove ACTIVE CSS class from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // hide other articles

        articles.forEach(function(article){
            article.classList.remove("active")
        })

       // get id of article's button clicked 
        const element = document.getElementById(id);

        // add ACTIVE CSS class to id corresponding button article

        element.classList.add("active");



    }
    
})