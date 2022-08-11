
// updateCount() function: get the value and increment of a DOM dataset value  and 
// set a Interval count with a 1 millisecond increase the shown value through textContent until
// the value setted is reached.

const updateCount= (counter)=>{

/*     console.log(counter);
    console.log(counter.dataset.value); */

    // Const definitions for the counter. Value setted in the dataset-value tag. Increment a division of integers
    const value = parseInt(counter.dataset.value)
    const increment=Math.ceil(value/1000)

    // Initial value for the loop
    let initialValue=0;


    //increaseCount() function increase the initialValue and is shown each 1 millisecond in setInterval method.
    // This loop end when the VALUE is reached.

    const increaseCount= setInterval(()=> {
        initialValue += increment;


        // When value is reached
        if(initialValue>value){
            counter.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;

        }

        //Meanwhile VALUE is reached

        counter.textContent = `${initialValue}+`;

    },1) 




}



// Defines counters array that contains each .number selector ref to counters

const counters=document.querySelectorAll(".number")


// Execute the function for each counter in arrays counters.

counters.forEach(counter => updateCount(counter));

