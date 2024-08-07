console.log("Hello world!");

// to use watch flag so that we don't have to type run command every time we change the code - node --watch script.js

// const glass = "panii" //string
// const age = 22  //integer
// const isNepali = false  //boolean

const friend1 = "Ram"
const friend2 = "Shyam"
const friend3 = "Hari"

const friends = ["Ram", "Shyam", "Hari"] // if same type ko data xa vane dherai variables banaunu vanda array banayera rakhne
console.log(friends[0])

//properties and methods
console.log(friends.length) //.length chai property

friends.push("Saron") //.push chai method //.push le chai last ma halxa

friends.unshift("Sayon") //.unshift le chai first ma halxa

// friends.pop() //.pop le chai last ko hatauxa
// friends.shift() //.shift le chai first ko hatauxa

console.log(friends)

friends.splice(2,0,"Suhana") 

console.log(friends)


//slice --> used to create a copy of portion of array. doesn't modify original array
const numbers = [1,2,3,4,5,6]
const newNumbers = numbers.slice(0,5)
console.log(numbers)
console.log(newNumbers)

//splice
numbers.splice(2,1,100,101)
console.log(numbers)

//split --> split string into array
const text = "I love JavaScript"
console.log(text)
newArray = text.split(" ")
console.log(newArray)


//task using splice
const languages = ["php", "js", "c"]
languages.splice(1,1,"html")
console.log(languages)

const characters = ['m','a','n','i','s','h']
characters.splice(0,6,13,1,14,9,19,8)
console.log(characters)

//object

const name = "Sayon Shrestha"
const age = "23"
const address = "Dharan"
const isNepali = true
//related data lai object ma halne
//object ma chai (key:value) pair hunxa
const person = {
    name : "Sayon Shrestha",
    age : 23,
    address : "Dharan",
    isNepali : true
}
console.log(person.name)
console.log(person.isNepali)

person.college = "Koshi St. James College"

console.log(person)

Object.freeze(person)   //to freeze the object so that it key value can't be changed
person.name = "Changed Name"
console.log(person)     //will still print old name because object is frozen

console.log(Object.keys(person))    //will print the keys of the object(person)
console.log(Object.values(person))  //will print the values of the object(person)

//casing
/*
UPPERCASE --> IHATEPROGRAMMINGINFORTAN
lowercase --> ihateprogramminginfortan
camelCase --> iHateProgrammingInFortan
snake_case --> i_hate_programming_in_fortan //mostly used in python
kebab-case --> i-hate-programming-in-fortan 
PascalCase --> IHateProgrammingInFortan //mostly used in oop languages like Java
*/

