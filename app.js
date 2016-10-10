var addBtn = document.getElementById('add-btn');
var newTodoInput = document.getElementById('new-todo-input');
var todoList = document.getElementById('todo-list');

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newListItem = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newListItem.appendChild(newContent);
  todoList.appendChild(newListItem);
}

addBtn.addEventListener('click', addTodo);
