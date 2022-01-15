import { todo } from "./createTodo";
import { project } from "./projects";
import { update } from "./update";
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
  homeLink.addEventListener("click", todo.renderPage);

  const noteLink = document.getElementById("noteLink");
  noteLink.addEventListener("click", note.renderPage);

  const projectLink = document.getElementById("projectLink");
  projectLink.addEventListener("click", project.renderPage);

  //nav.today();

  document.getElementById("filter").addEventListener("change", function () {
    const filter = document.getElementById("filter");
    if (filter.value == "Today") {
      nav.today();
    } else if(filter.value == "thisMonth"){
      nav.thisMonth();
    }
  });

  /*const editTodoBtns = Array.from(document.querySelectorAll(".fa-edit"));
  editTodoBtns.forEach((btn) => btn.addEventListener("click", update.editTodo));

  const updateTodoBtns = Array.from(document.querySelectorAll("#updateTodo"));
  updateTodoBtns.forEach((btn) =>
    btn.addEventListener("click", update.updateTodo)
  );*/
}
