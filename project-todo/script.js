
const todoTasks = []
function addTask(){
    const todoNameInput = document.getElementById('todo-input')
    const todoDateInput = document.getElementById('date-input')
    const todoName = (todoNameInput.value)
    const todoDate = (todoDateInput.value)
    if (todoName !== "" && todoDate !== ""){
        todoTasks.push({
            text : todoName,
            date : todoDate,
            completed : false
        })
        todoNameInput.value = ""
        todoDateInput.value = ""
        renderToDoTasks()
    } else {
        alert("Please enter both task name and date.")
    }
}

function renderToDoTasks(){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // clear previous task
    todoTasks.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `${task.text}  -  ${task.date}`
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
        return todo.text.includes(searchValue) || todo.date.includes(searchValue)
    })
    renderTasksWithSearchedTask(searchedTask)
}

function renderTasksWithSearchedTask(searchedTask) {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // remove all previous child nodes
    searchedTask.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `${task.text} - ${task.date}`
        listItem.className = task.completed ? 'completed' : ''
        listItem.onclick = () => {
            toggleCompleted(task)
        }
        console.log(listItem)
        todoList.appendChild(listItem)
    })
    updateCount()
}