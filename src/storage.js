import { todos } from "./todos";
import { notes } from "./notes";
import { allProjects } from "./projects";

export const storage = (() => {

  function populateTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function populateNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function populateProjects() {
    localStorage.setItem("projects", JSON.stringify(allProjects));
  }

  function retrieveProjects() {
    allProjects = JSON.parse(localStorage.getItem("projects"));
  }

  function retrieveTodos() {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  function retrieveNotes() {
    notes = JSON.parse(localStorage.getItem("notes"));
  }

  return { populateTodos, populateProjects, populateNotes, retrieveNotes, retrieveProjects, retrieveTodos };
})();
