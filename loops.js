//loops

const vowels = ['a','e','i','o','u']

//for loop
for(let i=0; i<vowels.length; i++){
    console.log(vowels[i])
}

//for of
for(let vowel of vowels){
    console.log(vowel)
}

//while loop

let i = 0
while(i < vowels.length){
    console.log(vowels[i])
    i++
}

i=0
while (i < 10) {
    console.log("The number is " + i)
    i++;
}

//do while loop
i=0
do{
    console.log(vowels[i])
    i++;
}while (i<vowels.length) 

i=0
do {
    console.log("The number is " + i)
    i++;
} while (i < 10);

//for in
const members = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

for(let key in members){
    console.log(key + " is " + members[key])
}