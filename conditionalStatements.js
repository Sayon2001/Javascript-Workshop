
//conditional statements

const isRaining = true

if(isRaining){
    console.log("Carry an umbrella")
} else {
    console.log("Don't carry an umbrella")
}

//ternary operator

const isSunny = true
// isSunny ? console.log("It's a sunny day") : console.log("It's a rainy day")
console.log(isSunny ? "It's a sunny day" : "It's a rainy day")

//short circuit
isSunny && console.log("It's a sunny day") //if isSunny is true then this is executed
isSunny || console.log("It's a rainy day") //if isSunny is false then this is executed

const temperature = 10
if(temperature > 30){
    console.log("It's hot outside")
}
else if(temperature > 25){
    console.log("It's warm outside")
}
else{
    console.log("It's cold outside")
}


//nullish coelescing operator

let age1 = null
let age2 = 25
let age3 = undefined

console.log(age1 ?? "Age is not provided")
console.log(age2 ?? "Age is not provided")
console.log(age3 ?? "Age is not provided")
