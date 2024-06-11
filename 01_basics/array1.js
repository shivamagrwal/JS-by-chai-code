const myArr = [0, 6, 4, 7, 8, 8, 6, 4]
const myHeroes = ["ShaktiMan", "Batman",]

console.log(myHeroes[1]); //Batman
console.log(myArr[3]); // 7

const myArr2 = [5, 6, 8, 9];

myArr2.push(3,5); //add to last
console.log("push on array:",myArr2); // [5, 6, 7, 8, 9, 3 ]

myArr2.pop(); //delete from last
console.log("pop from array: ",myArr2);

myArr2.unshift(6); // add parameter to first
console.log(`unshift 6: ${myArr2}`);

myArr2.shift(6); //remove paramater or anything from the first
console.log("shifting 6 :",myArr2);

console.log(myArr2.includes(8));//parameter value is present or not 
console.log(myArr2.indexOf(9));
console.log(myArr2.indexOf(90));//vlaue not exist so op is -1

const newArr = myArr2.join(); //change array to string

console.log(newArr);
console.log(myArr2);

console.log(myArr2.slice(1,4)); //slice make change by making copy of original array
console.log("A:",myArr2);
console.log(myArr2.splice(1,4)); //splice make change to original array & it doesn't consider the range;
console.log("B: ",myArr2);

const s
console.log(Array.from(myArr2));
    