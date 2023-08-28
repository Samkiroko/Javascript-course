const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const todoText = inputElement.value;
  todoList.push(todoText);
  inputElement.value = '';
  console.log(todoList);
}
