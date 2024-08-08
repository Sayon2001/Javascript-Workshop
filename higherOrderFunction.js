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
    
    //reduce function
    // evenNumbers.reduce(function(){
    
    // })

    // difference between == and ===
    let age = "22"

    if(age==22){        // == operator compares values after performing type conversion
        console.log("Age is 22")
    }
    else{
        console.log("Age is not 22")
    }

    // but

    if(age===22){       // === operator compares values without type conversion
        console.log("Age is 22")
    }
    else{
        console.log("Age is not 22")
    }