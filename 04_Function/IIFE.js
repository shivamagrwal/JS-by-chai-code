//Immediately Invoked Function Expression (IIFE)

//Named IIFE
(function callName() {
    console.log(`My name is Shivam`);
})();

//Unnamed IIFE
(() => {
    console.log("Shivam Agrawal")
})();

//or
((name) => {
    console.log(`My Name is ${name} Agrawal `);
})('Shivam')


//Nullish Coalescing operator (??) ==> assign first came value 

let val1 = 10 ?? 20;
console.log(val1); //10
let val2 = null ?? 20;
console.log(val2); //20
let val3 = undefined ?? 20 ?? 100;
console.log(val3); //20
