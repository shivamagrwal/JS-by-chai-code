//Objects Literals

const mySym =Symbol("key1"); //have to define symbol if have to call inside objects

const JSuser = {
    name: "Shivam",
    age: 20,
    "full name": "Shivam Agrawal",
    location: "Ghaziabad",
    [mySym] : "Hello",
    email: "sagrawal2022@gmail.com",
    isLoggedIn: true
}

console.log(JSuser.name);
console.log(JSuser[`full name`]);
console.log(JSuser[mySym]);
console.log(typeof JSuser[mySym]); //string

JSuser.email="kumarshivam2017@gmail.com";44
console.log(JSuser);

JSuser.greeting = function(){
    console.log(`Hello JS User ${this.name}`)
}

console.log(JSuser.greeting());

// PART 2: -->
// Part 3:  -->>
//Object Destructuring

const kiet = {
    course : "B.Tech",
    branch : "Computer Science",
    section : "C",
    session : "2022-26"
}

// console.log(kiet.session);

const {course: crs}=kiet;
console.log(crs);
 
