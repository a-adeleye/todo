import "./style.css";
import { pageload } from "./pageload";
import { storage } from "./storage";
import { updateDOM } from "./DOMManager";
import { todo } from "./createTodo";

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("projects")) {
    storage.populateProjects();
  } else {
    storage.retrieveProjects();
  }

  if (!localStorage.getItem("todos")) {
    storage.populateTodos();
  } else {
    storage.retrieveTodos();
  }

  if (!localStorage.getItem("notes")) {
    storage.populateNotes();
  } else {
    storage.retrieveNotes();
  }

  pageload.createNav();
  pageload.createTop();
  pageload.createHeading();
  pageload.createDashboard();
  pageload.createFooter();
  todo.renderPage();

  updateDOM();
});
