import { todos } from "./todos";
import { getTodoInput } from "./createTodo";

export const update = (() => {
  let arrayId = "";

  const editTodo = (event) => {
    getTodoInput.displayForm();
    const element = event.target.parentNode;
    let id = element.parentNode.id - 1;

    const cards = Array.from(document.querySelectorAll(".todo-item"));
    let card = cards[id];

    let todo = todos[id];

    const $title = document.querySelector("#title");
    $title.value = todo.title;

    const $description = document.querySelector("#description");
    $description.value = todo.description;

    const $project = document.querySelector("#project");
    $project.value = todo.project;

    const $date = document.querySelector("#due-date");
    $date.value = todo.date;

    const $priority = document.querySelector("#priority");
    $priority.value = todo.priority;

    const btn = document.querySelector(".submitBtn");
    btn.removeEventListener("click", getTodoInput.addTodo);
    btn.addEventListener("click", updateTodo);

    arrayId = id;
    console.table(todos);
  };

  function updateTodo() {
    const $title = document.querySelector("#title");
    let title = $title.value;

    const $description = document.querySelector("#description");
    let description = $description.value;

    const $project = document.querySelector("#project");
    let project = $project.value;

    const $date = document.querySelector("#due-date");
    let date = $date.value;

    const $priority = document.querySelector("#priority");
    let priority = $priority.value;

    let id = arrayId + 1;

    todos[arrayId] = { id, title, description, project, date, priority };

    console.table(todos);
    getTodoInput.closeForm();
    getTodoInput.renderPage();
  }

  return { editTodo, updateTodo };
})();

/* 
  const updateTodo = (event) => {
    const element = event.target.parentNode;
    element.parentNode.setAttribute("contenteditable", "false");
    element.parentNode.style.border = "none";
    document.getElementById("updateTodo").style.display = "none";
  };



const $title = document.querySelector("#title");
const $description = document.querySelector("#description");
const $notes = document.querySelector("#notes");
const $project = document.querySelector("#project");
const $date = document.querySelector("#due-date");
const $priority = document.querySelector("#priority");

let title = $title.value;
let description = $description.value;
let notes = $notes.value;
let project = $project.value;
let date = $date.value;
let priority = $priority.value;
*/
