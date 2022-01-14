import "./style.css";
import { pageload } from "./pageload";
import { storage } from "./storage";
import { todos } from "./todos";
import { updateDOM } from "./DOMManager";
import { todo } from "./createTodo";

document.addEventListener("DOMContentLoaded", () => {
  pageload.createNav();
  pageload.createFooter();
  pageload.createTop();
  pageload.createHeading();
  pageload.createDashboard();
  todo.renderPage();
 
  updateDOM();

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
});
