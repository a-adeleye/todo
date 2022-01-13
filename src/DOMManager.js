import { getTodoInput } from "./createTodo";
import { project } from "./projects";
import { update } from "./update";
import { note } from "./notes";

export function updateDOM() {
  const newTaskBtn = document.getElementById("newTodo");
  newTaskBtn.addEventListener("click", getTodoInput.displayForm);

  const newProjectBtn = document.getElementById("newProject");
  newProjectBtn.addEventListener("click", project.displayForm);

  const newNoteBtn = document.getElementById("newNote");
  newNoteBtn.addEventListener("click", note.displayForm);

  const editTodoBtns = Array.from(document.querySelectorAll(".fa-edit"));
  editTodoBtns.forEach((btn) => btn.addEventListener("click", update.editTodo));

  const updateTodoBtns = Array.from(document.querySelectorAll("#updateTodo"));
  updateTodoBtns.forEach((btn) =>
    btn.addEventListener("click", update.updateTodo)
  );
}
