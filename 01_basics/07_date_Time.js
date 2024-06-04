// Date

const myDate = new Date();
console.log(myDate.toString()); // Tue Jun 04 2024 01:51:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Jun 04 2024
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let newDate = new Date("06-03-2024");
console.log(newDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor((myTimeStamp/1000)));>