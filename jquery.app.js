console.log('jquery version of doer');

// $ in front of variable name is a jquery naming convention.
var $newTodoInput = $('#new-todo-input');
var $addBtn = $('#add-btn');
var $todoList = $('#todo-list');
var $doneList = $('#done-list');

var addTodo = function() {
  $todoList.append($('<li>')
    .text($newTodoInput.val()));
  $newTodoInput.val('');
}

$addBtn.on('click', addTodo);

$todoList.on('click', 'li', function(event) {
  // create new li
  var $doneLI = $('<li>')
    .addClass('done')
    .text(event.target.textContent);
  // append to done UL
  $doneList.append($doneLI);
  // remove existing LI
  $(event.target).remove();
})
