import { getTodoInput } from "./createTodo";
import { project } from "./projects";
import { update } from "./updateTodo";

export function updateDOM() {
  //project.populateProjects();

  const newTaskBtn = document.getElementById("newTodo");
  newTaskBtn.addEventListener("click", getTodoInput.displayForm);

  const newProjectBtn = document.getElementById("newProject");
  newProjectBtn.addEventListener("click", project.displayForm);

  /*

  const closeProjectBtn = document.querySelector("#closeProject");
  closeProjectBtn.addEventListener("click", project.closeForm);

  
*/
const editTodoBtns = Array.from(document.querySelectorAll('.fa-edit'));
editTodoBtns.forEach(btn => btn.addEventListener('click', update.editTodo));

const updateTodoBtns = Array.from(document.querySelectorAll('#updateTodo'));
updateTodoBtns.forEach(btn => btn.addEventListener('click', update.updateTodo));

}
