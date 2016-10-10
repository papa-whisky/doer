console.log('this is the app.js');
console.log(aVariable);

var addBtn = document.getElementById('add-btn');
var newTodoInput = document.getElementById('new-todo-input');
var todoList = document.getElementById('todo-list');

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newListItem = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent); // Do this instead of innerHTML for compatability with old IE.
  newListItem.appendChild(newContent);

  newListItem.addEventListener('click', function(event) {
    // console.log(event.target);
    event.target.className = 'done';
  })

  todoList.appendChild(newListItem);
  newTodoInput.value = ''; // Clear input.

}

addBtn.addEventListener('click', addTodo);

var listItems = document.getElementsByTagName('li');

// for (var i = 0; i < listItems.length; i++) {

// }
