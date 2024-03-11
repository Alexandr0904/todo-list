// ! Создание и добавление HTML элементов
// let container = document.querySelector(".container");
// let button = document.querySelector(".add");
// button.onclick = addHtml;
// function addHtml() {
//   let div = document.createElement("div");
//   let h2 = document.createElement("h2");
//   let p = document.createElement("p");
//   let title = prompt("Введите заголовок");
//   let text = prompt("Введите текст");
//   div.classList.add("item");
//   h2.innerHTML = title;
//   p.innerHTML = text;
//   div.append(h2);
//   div.append(p);
//   container.append(div);
// }
let todoInp = document.querySelector(".todo__inp");
let todoBtn = document.querySelector(".todo__btn");
let todoBody = document.querySelector(".todo__body");
todoBtn.onclick = addTodo;
//  <div class="todo__item">
//             <div class="todo__left">
//               <input type="checkbox" name="" id="" />
//               <span class="todo__name"> Lorem, ipsum dolor. </span>
//             </div>
//             <button class="todo__delete">Remove</button>
//           </div>
function addTodo() {
  let value = todoInp.value; // todoInp.value - достаём введённое значение пользователя в input
  if (value != "") {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo__item");
    let todoLeft = document.createElement("div");
    todoLeft.classList.add("todo__left");
    let input = document.createElement("input");
    input.type = "checkbox"; //Создаём атрибут type для input
    let span = document.createElement("span");
    span.classList.add("todo__name");
    span.innerHTML = value;
    let button = document.createElement("button");
    button.classList.add("todo__delete");
    button.innerHTML = "Remove";
    button.onclick = () => deleteTodo(todoItem); // когда функцция принимает в себя параметры
    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("todo__edit");
    buttonEdit.innerHTML = "Edit";
    buttonEdit.onclick = () => editTodo(span);

    todoLeft.append(input, span);
    todoItem.append(todoLeft, button, buttonEdit);
    todoBody.append(todoItem); // добавление готовые html элементы
    todoInp.value = ""; // очищаем поле ввода input
  } else {
    alert("Введите дело");
  }
}
function deleteTodo(item) {
  if (confirm("Вы уверены ,что хотите удалить?")) {
    item.remove();
  }
}
function editTodo(span) {
  let value = prompt("Введите новое дело");
  span.innerHTML = value;
}
