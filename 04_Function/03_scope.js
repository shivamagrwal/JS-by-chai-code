let b = 20;
const c = 30;
var a = 10;

if (true) {

    let b = 30;
    const c = 40;
    var a = 20;
}
console.log(b);
console.log(c);
console.log(a);

function one() {
    const userName = "Shivam"

    function two() {
        const website = "youtube"
        console.log(userName)
        // console.log(website)
    }
    // console.log(website)
    two();
}
one()

// another example

if (true) {
    const myName = "Shivam Agrawal"
    if (myName === "Shivam Agrawal") {
        const website = " google"
        console.log(myName + website)
    }
    console.log(website);
}