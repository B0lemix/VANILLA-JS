
// First, is loader the preloader and when video is loaded, preloader element HTML
// is hidden using .hide-preloader CSS class


const preloader=document.querySelector(".preloader")


window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader")

})


// Video manipulation controls
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");


// Event list that is used for add o remove de slide CSS class for switch button


btn.addEventListener("click",function(){
    if(!btn.classList.contains("slide")){

        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide")
        video.play();
    }
})

