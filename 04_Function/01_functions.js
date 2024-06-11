function greeting() {
    console.log("hii")
    console.log("Hello World")
    console.log("Its Agrawal Here")
    console.log("Learning java script")
    console.log("from Hitesh")
}

greeting()

function add(val1, val2) {
    console.log(val1 + val2)
}
add(5, 6)

function addTwoNum(number1, number2) {
    return number1 + number2
}

const result = addTwoNum(5, 7)
console.log(result)

function loginUserMessage(username){
    console.log(username,"Just Logged in")
}
loginUserMessage("shivam")

//2nd method
function loginMessage(username = "sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
     return `${username} just logged in`
}

const message=loginMessage("shivam"); 
console.log(message); //shivam just logged in
const message2=loginMessage(); 
console.log(message2); //sam just logged in