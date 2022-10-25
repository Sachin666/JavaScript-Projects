//selectors
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const errorMsg = document.querySelector('.error-message')
const filterOption = document.querySelector(".filter-todo");

//Event listeners
todoBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)
filterOption.addEventListener('click', filterTodo)
document.addEventListener('DOMContentLoaded', getTodos)

//Functions
function addTodo(e){
    e.preventDefault()
    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //create li
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)
    //add todo to local storage
    saveLocalTodos(todoInput.value)
    //completed button
    const completedBtn = document.createElement('button')
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    completedBtn.classList.add("complete-btn")
    todoDiv.appendChild(completedBtn)

    //delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('delete-btn')
    todoDiv.appendChild(deleteBtn)

    todoList.appendChild(todoDiv)
    //Clear Todo input Value
    todoInput.value = ""

}

function deleteTodo(e){
    const item = e.target
    
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement
        todo.classList.add('fall')
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch(e.target.value){
            case 'all':
                todo.style.display = "flex";
                break;
            case 'completed':
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = []
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos' === null)){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        //create li
        const newTodo = document.createElement('li')
        newTodo.classList.add('todo-item')
        newTodo.innerText = todo
        todoDiv.appendChild(newTodo)
        //completed button
        const completedBtn = document.createElement('button')
        completedBtn.innerHTML = '<i class="fas fa-check"></i>'
        completedBtn.classList.add("complete-btn")
        todoDiv.appendChild(completedBtn)

        //delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        deleteBtn.classList.add('delete-btn')
        todoDiv.appendChild(deleteBtn)

        todoList.appendChild(todoDiv)
    })
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos= []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todosIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todosIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}



