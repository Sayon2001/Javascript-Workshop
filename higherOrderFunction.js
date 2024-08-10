//higher order function
    //forEach
    //map
    //reduce
    //filter

    //higher order function vaneko testo function jaslai argument ma hamile function dinu parxa
    //higher order function ma gako function lai chai call back function vaninxa
    
    const people = [
        {
            firstName : "Ram",
            lastName : "Agrawal",
            age : 23,
            address : "Dharan"
        },
        {
            firstName : "Manish",
            lastName : "Basnet",
            age : 22,
            address : "Itahari"
        },
        {
            firstName : "Sayon",
            lastName : "Shrestha",
            age : 23,
            address : "Dharan",
        }
    ]
    
    //forEach loop
    people.forEach(function(object){
        console.log(object)
    })

    //map function
    const data = people.map(function(person){
        return {
            ...person, //spread operator
            fullName : person.firstName + " " + person.lastName
        }
    })
    console.log(data)


    const products = [
        {
            name : "Laptop",
            price : 10000,
            qty : 2
        },
        {
            name : "Mobile",
            price : 5000,
            qty : 3
        },
        {
            name : "Camera",
            price : 2000,
            qty : 1
        }
    ]

    const newProducts = products.map(function(product) {
        return {
           ...product,
            totalPrice : product.price * product.qty
        }
    })
    console.log(newProducts)

    const numbers = [1,2,3,4,5]
    const squares = numbers.map(function(number){
        return number*number    
    })
    console.log(squares)

    //filter function
    const naturalNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    
    const evenNumbers = naturalNumbers.filter(function(num){
        return num % 2 == 0
    })
    console.log(evenNumbers)

    const books = [
        {
            title : "To Kill a Mockingbird",
            author : "Harper Lee",
            year : 1960
        },
        {
            title : "1984",
            author : "George Orwell",
            year : 1949
        },
        {
            title : "Pride and Prejudice",
            author : "Jane Austen",
            year : 1813
        }
    ]

    const newBooks = books.filter(function(book){
        return book.year > 1900
    })
    console.log(newBooks)
    
    const files = ["app.js", "a.c", ,"index.html", "style.css", "script.js"]

    const result = files.filter(function(file){
        return file.endsWith(".js")
    })
    console.log(result)

    const students = [
        {
            name : "Sayon",
            marks : 86,
            status : "pass",
            grade : "A"
        },
        {
            name : "Suman",
            marks : 93,
            status : "pass",
            grade : "A+"
        },
        {
            name : "Dipesh",
            marks : 36,
            status : "fail",
            grade : "F"
        },
        {
            name : "Saron",
            marks : 82,
            status : "pass",
            grade : "A"
        }
    ]

    const gradeA = students.filter(function(std){
        return std.marks >= 80 && std.marks < 90
    })

    console.log(gradeA)

    // difference between == and ===
    let age = "22"

    if(age==22){    //condition is true in this case    // == operator compares values after performing type conversion
        console.log("Age is 22")
    }
    else{
        console.log("Age is not 22")
    }

    // but

    if(age===22){    //condition is false in this case  // === operator compares values without type conversion
        console.log("Age is 22")
    }
    else{
        console.log("Age is not 22")
    }



    //reduce function
    const nums = [1,2,3,4,5]

    const sum = numbers.reduce(function(accumulator,number){
        return accumulator + number
     },0)  //0 - accumulator initial value
     console.log("Sum is : " + sum) //output chai 15 (1+2+3+4+5)

     const myCart = [
        {
            product : "Apple",
            price : 200,
            quantity : 20
        },
        {
            product : "Mango",
            price : 100,
            quantity : 10
        },
        {
            product : "Dragon Fruit",
            price : 400,
            quantity : 12
        }
     ]

     const output = myCart.reduce(function(acc,item){
        acc.totalPrice += item.price * item.quantity //acc.totalPrice = acc.totalPrice + (item.price * item.quantity)
        acc.totalQuantity += item.quantity
        return acc
     },{totalPrice :0, totalQuantity :0})

     console.log(output)