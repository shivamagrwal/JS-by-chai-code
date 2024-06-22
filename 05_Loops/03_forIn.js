const myObject = {
    cpp: "C++",
    js: "JavaScript",
    py: "Python",
    rb: "Ruby"
}

for(const key in myObject){
    // console.log(key+ " : " + myObject[key])
}

const arr= ["js", "rb", "cpp", "java"]

for(const val in arr){
    console.log(arr[val]);
}