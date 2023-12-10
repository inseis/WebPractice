const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

let todos = [];  

const saveTodo = function(){            
  localStorage.setItem('todos', JSON.stringify(todos));   
}

const deleteTodo = function(event){
  const li = event.target.parentElement;    
  li.remove();    

  const id = parseInt(li.id); 
  const arrayAfterDelete = todos.filter(item => item.id !== id); 
  todos = arrayAfterDelete; 
  saveTodo();
}

const paintTodo = function(newTodoObj){   
  const li = document.createElement('li');
  li.id = newTodoObj.id     
  const span = document.createElement('span');
  span.innerText = newTodoObj.text;
  const button = document.createElement('span');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo)    
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);   
}

const handleTodoSubmit = function(event){
  event.preventDefault();
  const newTodo = todoInput.value;

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  }

  todos.push(newTodoObj); 
  todoInput.value = '';
  paintTodo(newTodoObj);   
  saveTodo();
}
todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem('todos')

if(savedTodos !== null){
  const parsedTodos = JSON.parse(savedTodos);   
  todos = parsedTodos;    
  parsedTodos.forEach(paintTodo); 
}