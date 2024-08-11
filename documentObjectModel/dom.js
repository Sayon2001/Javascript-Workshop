const h1 = document.querySelector('.heading')
h1.textContent = 'Hello, world!'

document.getElementsByTagName('button')[0]
    .addEventListener('click', function() {
        h1.textContent = 'Goodbye, world!'
        let newParagraph = document.createElement('p')
        newParagraph.textContent = 'This is a new paragraph.'
        document.body.appendChild(newParagraph)
        h1.style.color ='red'
        h1.style.fontSize = '50px'
    })

