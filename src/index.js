import "./style.css";
import { storage } from "./storage";
import { todos } from "./todos";
import { updateDOM } from "./DOMManager";

document.addEventListener("DOMContentLoaded", () => {
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
