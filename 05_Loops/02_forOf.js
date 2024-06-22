//for of loop

const myArray = [1, 2, 3, 4, 5,]

for (const i of myArray) {
    // console.log(i);
}

const newArr = "Shivam Agrawal"

for (const val of newArr) {
    if (val == " ")
        continue
    // console.log(val);
}

//maps
 
const map = new Map()
map.set("IN", "India")
map.set("US", "United State")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

for(const [key,value] of map){
    // console.log(key + " :- " + value)
}

// const myObject = {
//     game1: "GTA",
//     game2: "GOW"
// }

//Object is not iterable with forEach
// for(let key of myObject){
//     console.log(key);
// }


