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
