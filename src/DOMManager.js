import { getTodoInput } from "./createTodo";
import { showActions, editTodo } from "./updateTodo";
import { project } from "./projects";
import { update } from "./updateTodo";
import { projects } from "./todos";

export function updateDOM() {
  project.populateProjects();

  const closeBtn = document.querySelector("#close");
  closeBtn.addEventListener("click", getTodoInput.closeForm);

  const newTaskBtn = document.querySelector("#newTask");
  newTaskBtn.addEventListener("click", getTodoInput.displayForm);

  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", getTodoInput.addTodo);

  const newProjectBtn = document.querySelector("#newProject");
  newProjectBtn.addEventListener("click", project.displayForm);

  const closeProjectBtn = document.querySelector("#closeProject");
  closeProjectBtn.addEventListener("click", project.closeForm);

  const submitProjectBtn = document.querySelector("#submitProject");
  submitProjectBtn.addEventListener("click", project.addProject);

const editTodoBtns = Array.from(document.querySelectorAll('.fa-edit'));
editTodoBtns.forEach(btn => btn.addEventListener('click', update.editTodo));

const updateTodoBtns = Array.from(document.querySelectorAll('#updateTodo'));
updateTodoBtns.forEach(btn => btn.addEventListener('click', update.updateTodo));

}
