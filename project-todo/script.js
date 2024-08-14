
let todoTasks = [];
function addTask(){
    const todoInput = document.getElementById('todo-input')
    const todoValue = (todoInput.value)
    if (todoValue !== ""){
        todoTasks.push({
            text : todoValue,
            completed : false
        })
        todoInput.value = ""
        renderToDoTasks()
    }
}

function renderToDoTasks(){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // remove all previous child nodes
    todoTasks.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = task.text
        listItem.className = task.completed ? 'completed' : ''
        listItem.onclick = () => {
            toggleCompleted(task)
        }
        todoList.appendChild(listItem)
        updateCount()
    })
}

function toggleCompleted(task){
    task.completed = !task.completed
    renderToDoTasks()
}

function updateCount(){
    const totalTask = document.getElementById('total-task')
    const completedTask = document.getElementById('completed-task')
    const total = todoTasks.length
    totalTask.textContent = total
    const completed = todoTasks.reduce((acc,todo)=>{
        return todo.completed ? acc + 1 : acc
    },0)
    completedTask.textContent = completed
}

function searchTask(){
    const searchInput = document.getElementById('search')
    const searchValue = searchInput.value
    const searchedTask = todoTasks.filter((todo)=>{
        return todo.text.includes(searchValue)
    })
    renderTasksWithSearchedTask(searchedTask)
}

function renderTasksWithSearchedTask(searchedTask) {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // remove all previous child nodes
    searchedTask.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = task.text
        listItem.className = task.completed ? 'completed' : ''
        listItem.onclick = () => {
            toggleCompleted(task)
        }
        console.log(listItem)
        todoList.appendChild(listItem)
    })
    updateCount()
}