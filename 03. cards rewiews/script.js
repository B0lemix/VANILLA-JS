// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


// Const definitions for elements

const img = document.getElementById("img-profile");
const name_reviewer = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");
const container=document.getElementById("container");

const btn_prev = document.getElementById("btn_prev");
const btn_next = document.getElementById("btn_next");
const btn_random = document.getElementById("btn_random");


const data_length = reviews.length;


// Inicializate the position of data in first item.

var position=0;
showReview(0);



// Function that returns a review data in the container

function showReview(element){

    img.src=reviews[element].img;
    name_reviewer.textContent=reviews[element].name;
    job.textContent=reviews[element].job;
    review.textContent=reviews[element].text;
}


// Function that return a random number for position in SURPRISE ME button
function getRandom(){

    return Math.floor(Math.random() * data_length);

}


// Click event listeners for each button 
// Each event show the review using the above function showReview(), 
// and use JS-CSS control to add-remove class hidden/visible, giving the container
// a transition effect.

btn_random.addEventListener('click',function(){

    showReview(getRandom());
    container.className = "container";
    container.classList.add('hidden_transition');
    container.classList.add('visible_transition');
    setTimeout(() => {  container.className = "container";},1000)


});

btn_next.addEventListener('click',function(){
    
    position++;
    if(position<data_length){
    
        
        showReview(position);
    
        container.className = "container";
        container.classList.add('hidden_transition');
        container.classList.add('visible_transition');
        setTimeout(() => {  container.className = "container";},1000)


      
    }

});

btn_prev.addEventListener('click',function(){

    position--;
    if(position=>0){
    
        showReview(position);
          
        container.className = "container";
        container.classList.add('hidden_transition');
        container.classList.add('visible_transition');
        setTimeout(() => {  container.className = "container";},1000)
    }



});

