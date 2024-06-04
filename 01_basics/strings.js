let name= new String(`Shivam`)
let education = "Graduation"

console.log(`Hello guys my name is ${name} and i've done my ${education}`)
console.log(education.indexOf(`t`))

const gameName = new String(`Subway Surfers`)

console.log(gameName.charAt(2)) // b
console.log(gameName.substring(0,4)) // Subw
console.log(gameName.slice(1,4)) //ubw
console.log(gameName.concat(0,4))

const newString= "    Shivam   "
console.log(newString)


const url = "https://hitesh.com/-hitesh%20choudhary"

console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) //false

console.log(url.includes('hitesh')) //true

console.log(url.split('-'));
