import { todos } from "./todos";

export const update = (() => {
  const editTodo = (event) => {
    const element = event.target.parentNode;
    element.parentNode.setAttribute("contenteditable", "true");
    element.parentNode.style.border = "2px solid red";
    document.getElementById("updateTodo").style.display = "block";
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