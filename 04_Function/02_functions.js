function calcPrice(...price) { /// ... is known as rest operator
    return price
}

console.log(calcPrice(200, 500, 200, 1000))

const user = {
    productName: "Mobile",
    model: "Iqoo Z6 Pro /128",
    price: 21999
}

function handleObject(anyobject) {
    console.log(`Product Name is ${anyobject.productName}, Model is ${anyobject.model} and price is ${anyobject.price}`)
}

console.log(handleObject(user));

handleObject({
    productName: "Mobileee",
    price: 2000
})

const newArr = [100,500,2000,600,800]

function getSecondValue(anyArray){
    return anyArray[1]
}

console.log(getSecondValue(newArr))

console.log(getSecondValue([2,4,5,6,4,3]))