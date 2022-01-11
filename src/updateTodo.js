import { todos } from "./todos";
import { getTodoInput } from "./createTodo";

export const update = (() => {
  const editTodo = (event) => {
    const element = event.target.parentNode;
    let id = element.parentNode.id;
    console.log(element.parentNode.id);
    getTodoInput.displayForm();

    // const form = document.querySelector(".newTodoForm");

    const cards = Array.from(document.querySelectorAll('.todo-item'));
    let card = cards[id];

    let todo = todos[id];

    const $title = document.querySelector("#title");
    $title.value = todo.title;
    console.log(todo.title);

    const $description = document.querySelector("#description");
    $description.value = todo.description;

    const $project = document.querySelector("#project");
    $project.value = todo.project;

    const $date = document.querySelector("#due-date");
    $date.value = todo.date;

    const $priority = document.querySelector("#priority");
    $priority.value = todo.priority;


    /* const $title = form.querySelector("#title");
    
    const $notes = form.querySelector("#notes");
    
    
    const $priority = form.querySelector("#priority");

  };

  const updateTodo = (event) => {
    const element = event.target.parentNode;
    element.parentNode.setAttribute("contenteditable", "false");
    element.parentNode.style.border = "none";
    document.getElementById("updateTodo").style.display = "none";
  };

  return { editTodo, updateTodo };
})();

/*const $title = document.querySelector("#title");
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