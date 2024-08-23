
const todoTasks = []
function addTask(){
    const todoNameInput = document.getElementById('todo-input')
    const todoDateInput = document.getElementById('date-input')
    const todoDescInput = document.getElementById('desc-input')
    const todoPriorityInput = document.getElementById('priority-input')
    const todoName = (todoNameInput.value)
    const todoDate = (todoDateInput.value)
    const todoDesc = (todoDescInput.value)
    const todoPriority = (todoPriorityInput.value)
    if (todoName !== "" && todoDate !== "" && todoDesc !== "" && todoPriority !== ""){
        todoTasks.push({
            name : todoName,
            date : todoDate,
            desc: todoDesc,
            priority : todoPriority,
            completed : false
        })
        todoNameInput.value = ""
        todoDateInput.value = ""
        todoDescInput.value = ""
        // todoPriorityInput.value = ""
        renderToDoTasks()
    } else {
        alert("All the fields are required")
    }
}

function renderToDoTasks(){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // clear previous task
    todoTasks.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `-- Task Name: ${task.name} -- Priority: ${task.priority} -- Deadline: ${task.date} --`
        listItem.className = task.completed ? 'completed' : ''
        listItem.onclick = () => {
            toggleCompleted(task)
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor ='red';
        deleteButton.onclick = () => {
            const index = todoTasks.indexOf(task)
            if (index !== -1){
                todoTasks.splice(index, 1)
                updateCount()
            }
            renderToDoTasks()
        }

        const viewDetails = document.createElement('button');
        viewDetails.textContent = 'View Details';
        viewDetails.style.backgroundColor = 'green';
        viewDetails.style.color = 'white';
        viewDetails.style.margin = '0 10px 0 60px'
        viewDetails.onclick = (event) => {
            event.stopPropagation()
            alert(`
                 Task Name : ${task.name}
                 Deadline : ${task.date}
                 Description : ${task.desc}
                 Priority : ${task.priority}`
            )
        }

        listItem.appendChild(viewDetails);
        listItem.appendChild(deleteButton);
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
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value
    const searchedTask = todoTasks.filter((todo)=>{
        return todo.name.includes(searchValue) || todo.date.includes(searchValue) || todo.priority.includes(searchValue)
    })
    renderTasksWithSearchedTask(searchedTask)
}

function renderTasksWithSearchedTask(searchedTask) {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // remove all previous child nodes
    searchedTask.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `-- Task Name: ${task.name} -- Priority: ${task.priority} -- Deadline: ${task.date} --`
        listItem.className = task.completed ? 'completed' : ''
        listItem.onclick = () => {
            toggleCompleted(task)
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor ='red';
        deleteButton.onclick = () => {
            const index = todoTasks.indexOf(task)
            if (index !== -1){
                todoTasks.splice(index, 1)
                updateCount()
            }
            renderToDoTasks()
        }

        const viewDetails = document.createElement('button');
        viewDetails.textContent = 'View Details';
        viewDetails.style.backgroundColor = 'green';
        viewDetails.style.color = 'white';
        viewDetails.style.margin = '0 10px 0 60px'
        viewDetails.onclick = (event) => {
            event.stopPropagation()
            alert(`
                 Task Name : ${task.name}
                 Deadline : ${task.date}
                 Description : ${task.desc}
                 Priority : ${task.priority}`
            )
        }
        console.log(listItem)
        listItem.appendChild(viewDetails);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem)
    })
    updateCount()
}

const textarea = document.getElementById('desc-input');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height to auto
        this.style.height = this.scrollHeight + 'px'; // Set height to match content
    });
