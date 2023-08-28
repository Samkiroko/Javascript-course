const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const todoText = inputElement.value;
  todoText = '';
  todoList.push(todoText);
  console.log(todoText);
}
