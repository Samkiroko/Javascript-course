const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const todoText = inputElement.value;
  todoList.push(todoText);
  inputElement.value = '';
}

let i = 0;

while (i < 10) {
  console.log(i);
  i += 1;
}
