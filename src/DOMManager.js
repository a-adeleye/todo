import { todo } from "./createTodo";
import { project } from "./projects";
import { note } from "./notes";
import { nav } from "./navigation";

export function updateDOM() {
  const newTaskBtn = document.getElementById("newTodo");
  newTaskBtn.addEventListener("click", todo.displayForm);

  const newProjectBtn = document.getElementById("newProject");
  newProjectBtn.addEventListener("click", project.displayForm);

  const newNoteBtn = document.getElementById("newNote");
  newNoteBtn.addEventListener("click", note.displayForm);

  const homeLink = document.getElementById("homeLink");
  homeLink.addEventListener("click", nav.home);

  const todayLink = document.getElementById("todayLink");
  todayLink.addEventListener("click", nav.today);

  const weekLink = document.getElementById("weekLink");
  weekLink.addEventListener("click", nav.week);

  const monthLink = document.getElementById("monthLink");
  monthLink.addEventListener("click", nav.month);

  document.getElementById("filter").addEventListener("change", todo.renderPage);

  const noteLink = document.getElementById("noteLink");
  noteLink.addEventListener("click", note.renderPage);

  const projectLink = document.getElementById("projectLink");
  projectLink.addEventListener("click", project.renderPage);
}
