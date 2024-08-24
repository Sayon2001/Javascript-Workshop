
const todoTasks = []
function addTask(){
    const todoNameInput = document.getElementById('todo-input')
    const todoDateInput = document.getElementById('date-input')
    const todoDescInput = document.getElementById('desc-input')
    const todoPriorityInput = document.getElementById('priority-input')
    const todoCategoryInput = document.getElementById('category-input')
    const todoName = (todoNameInput.value)
    const todoDate = (todoDateInput.value)
    const todoDesc = (todoDescInput.value)
    const todoPriority = (todoPriorityInput.value)
    const todoCategory = (todoCategoryInput.value)
    if (todoName !== "" && todoDate !== "" && todoDesc !== "" && todoPriority !== "" && todoCategory !== "" && todoName !== ""){
        todoTasks.push({
            name : todoName,
            date : todoDate,
            desc: todoDesc,
            priority : todoPriority,
            category : todoCategory,
            completed : false
        })
        todoNameInput.value = ""
        todoDateInput.value = ""
        todoDescInput.value = ""
        todoPriorityInput.value = "Medium"
        todoCategoryInput.value = "Personal"
        renderToDoTasks()
        checkForUpcomingDeadlines()
    } else {
        alert("All the fields are required")
    }
}

function renderToDoTasks(){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // clear previous task
    todoTasks.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `|| Task Name: ${task.name} || Priority: ${task.priority} || Category: ${task.category} || Deadline: ${task.date} ||`
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
        viewDetails.style.margin = '0 10px 0 0'
        viewDetails.onclick = (event) => {
            event.stopPropagation()
            alert(`
                 Task Name : ${task.name}
                 Deadline : ${task.date}
                 Description : ${task.desc}
                 Priority : ${task.priority}
                 Category : ${task.category}`
            )
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.backgroundColor = '#2196F3';
        editButton.style.color = 'white';
        editButton.style.margin = '0 10px 0 60px'
        editButton.onclick = (event) => {
            event.stopPropagation()
            editTask(task);
        }

        listItem.appendChild(editButton);
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
        return todo.name.toLowerCase().includes(searchValue) || todo.date.includes(searchValue) || todo.priority.toLowerCase().includes(searchValue) || todo.category.toLowerCase().includes(searchValue)
    })
    renderTasksWithSearchedTask(searchedTask)
}

function renderTasksWithSearchedTask(searchedTask) {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // remove all previous child nodes
    searchedTask.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `|| Task Name: ${task.name} || Priority: ${task.priority} || Category: ${task.category} || Deadline: ${task.date} ||`
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
        viewDetails.style.margin = '0 10px 0 0'
        viewDetails.onclick = (event) => {
            event.stopPropagation()
            alert(`
                 Task Name : ${task.name}
                 Deadline : ${task.date}
                 Description : ${task.desc}
                 Priority : ${task.priority}
                 Category : ${task.category}`
            )
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.backgroundColor = '#2196F3';
        editButton.style.color = 'white';
        editButton.style.margin = '0 10px 0 60px'
        editButton.onclick = (event) => {
            event.stopPropagation()
            editTask(task);
        }

        console.log(listItem)
        listItem.appendChild(editButton);
        listItem.appendChild(viewDetails);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem)
    })
    updateCount()
}

function filterTasks() {
    const priorityFilter = document.getElementById('priority-filter').value;
    const categoryFilter = document.getElementById('category-filter').value;

    // If both filters are set to "All", show all tasks
    if (priorityFilter === "All" && categoryFilter === "All") {
        renderToDoTasks();
        return;
    }

    const filteredTasks = todoTasks.filter(todo => {
        const priorityMatches = priorityFilter === "All" || todo.priority === priorityFilter;
        const categoryMatches = categoryFilter === "All" || todo.category === categoryFilter;
        return priorityMatches && categoryMatches;
    });

    renderTasksWithFilteredTasks(filteredTasks);
}

function renderTasksWithFilteredTasks(filteredTasks){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = "" // clear previous task
    filteredTasks.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent = `|| Task Name: ${task.name} || Priority: ${task.priority} || Category: ${task.category} || Deadline: ${task.date} ||`
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
        viewDetails.style.margin = '0 10px 0 0'
        viewDetails.onclick = (event) => {
            event.stopPropagation()
            alert(`
                 Task Name : ${task.name}
                 Deadline : ${task.date}
                 Description : ${task.desc}
                 Priority : ${task.priority}
                 Category : ${task.category}`
            )
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.backgroundColor = '#2196F3';
        editButton.style.color = 'white';
        editButton.style.margin = '0 10px 0 60px'
        editButton.onclick = (event) => {
            event.stopPropagation()
            editTask(task);
        }

        console.log(listItem)
        listItem.appendChild(editButton);
        listItem.appendChild(viewDetails);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem)
        updateCount()
    })
}

function editTask(task){
    const todoNameInput = document.getElementById('todo-input');
    const todoDateInput = document.getElementById('date-input');
    const todoDescInput = document.getElementById('desc-input');
    const todoPriorityInput = document.getElementById('priority-input');
    const todoCategoryInput = document.getElementById('category-input');

    todoNameInput.value = task.name;
    todoDateInput.value = task.date;
    todoDescInput.value = task.desc;
    todoPriorityInput.value = task.priority;
    todoCategoryInput.value = task.category;

    const index = todoTasks.indexOf(task);
    if (index !== -1){
        todoTasks.splice(index, 1);
    }

    renderToDoTasks();
} 

function checkForUpcomingDeadlines(){
    const currentDate = new Date();

    todoTasks.forEach(function(task){
        const deadlineDate = new Date(task.date);
        const deadlineDays = Math.ceil((deadlineDate - currentDate) / (1000 * 60 * 60 * 24));

        if (deadlineDays <=2 && !task.completed){
            alert(`Task "${task.name}" is due in ${deadlineDays} day(s)!`)
        }
    })
}

const textarea = document.getElementById('desc-input');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height to auto
        this.style.height = this.scrollHeight + 'px'; // Set height to match content
    });
