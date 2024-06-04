const score = 500;
console.log(score); //500

const balance = new Number(200);
console.log(balance); //[Number: 200]

console.log(balance.toString()); //200
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //200.00

const otherNumber = 23.9774; 
console.log(otherNumber.toPrecision(4)); //23.98

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000
 

// +++++++++++++++++++ Math +++++++++++++
console.log(Math);
console.log(Math.abs(-9)); //9
console.log(Math.round(4.9)); //5
console.log(Math.floor(4.8)); //4
console.log(Math.ceil(4.3)); //5
console.log(Math.sqrt(16)); //4
console.log(Math.max(4,5,8,9,1)); //9
console.log(Math.floor(Math.random()*10)+1);//minimum 1 will be output and is between 1-10

const min = 10;
const max = 20;

console.log(Math.random() * (max - min +1) +min); //without floor method, value is not precised
console.log(Math.floor(Math.random() * (max - min +1)) +min); //with floor method, value precised and give integer values


