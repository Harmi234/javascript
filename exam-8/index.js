const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

document.addEventListener('DOMContentLoaded', loadTodos);

addTodoBtn.addEventListener('click', addTodo);

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodoToDOM(todo));
}

function addTodo() {
    const todo = todoInput.value.trim();
    if (todo) {
        addTodoToDOM(todo);
        saveTodoToLocalStorage(todo);
        todoInput.value = '';
    }
}

function addTodoToDOM(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = todo;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
        removeTodoItem(li, todo);
    });

    li.appendChild(removeBtn);
    todoList.appendChild(li);
}

function saveTodoToLocalStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodoItem(li, todo) {
    li.remove();
    removeTodoFromLocalStorage(todo);
}

function removeTodoFromLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(item => item !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}