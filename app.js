console.log('this is the app.js');
console.log(aVariable);

var addBtn = document.querySelector('#add-btn');
var newTodoInput = document.querySelector('#new-todo-input');
var todoList = document.querySelector('#todo-list');
var doneList = document.querySelector('#done-list');

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newListItem = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent); // Do this instead of innerHTML for compatability with old IE.
  newListItem.appendChild(newContent);
  todoList.appendChild(newListItem);
  newTodoInput.value = ''; // Clear input.

}

addBtn.addEventListener('click', addTodo);
newTodoInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});

todoList.addEventListener('click', function() {
  // console.log('click on you or your children');
  // console.log(event.target);
  
  if (event.target.tagName === 'LI') {
    event.target.className = 'done';
    event.target.parentElement.removeChild(event.target);
    doneList.appendChild(event.target);
  }
});
