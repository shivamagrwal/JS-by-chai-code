const coding=["cpp","js", "ruby","py"]

//Method 1 to print all items =>
coding.forEach( function (val) {
    // console.log(val)
})

//Method 2 =>
coding.forEach((item)=> {
    // console.log(item)
})

// method3 =>
function printme(item){
    console.log(item);
}


// coding.forEach(printme)

//method to access all;
coding.forEach( (item, index, arr)=>{
    // console.log("at Index " + index + " item is " + item + " of array " + "["+arr+"]")
})

const myCoding =[
    {
    languageName: "C++",
    fileName: "cpp"
    },
    {
        languageName: "JAVA",
        fileName: "java"
    },
    {
        languageName: "Python",
        fileName: "py"
    }
]

//method to access data from objects of array
myCoding.forEach( (item)=>{
    console.log(`${item.languageName} and ${item.fileName}`)
})