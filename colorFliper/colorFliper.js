
// Const definitions

const btn=document.getElementById("btn")
const message=document.getElementById("message")


// Copy the text of a element in the clipboard

function copyTextElement(element){


    navigator.clipboard.writeText(element.textContent);

    alert("Copiado color hex a portapapeles: " + element.textContent);


}


// Change the backgroundColor from a element througth argument

function asignBackgroundColor(element){
    let randomColor=getRandomColor();
    element.style.backgroundColor=randomColor;
    message.textContent=randomColor;

}


// Generate a ramdom color and return as hex form


function getRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#"+randomColor;

}


// Listener for click event over BTN element to change and display the background color
 
btn.addEventListener('click',() => {

    
    document.getElementsByClassName("top_message")[0].style.visibility = "visible";
    asignBackgroundColor(document.body);


});

// Listener for click event over MESSAGE element to copy hex color to clipboard

message.addEventListener('click',() => {


    copyTextElement(message);


});