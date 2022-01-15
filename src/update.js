import { storage } from "./storage";
import { todos } from "./todos";
import { todo } from "./createTodo";
import { note, notes } from "./notes";
import { project, allProjects } from "./projects";

export const update = (() => {
  let currentCardId = "";
  let currentNoteId = "";
  let currentProjectId = "";

  const editTodo = (event) => {
    todo.displayForm();
    const element = event.target.parentNode;
    let id = element.parentNode.id;

    let currentTodo = todos[id];

    const $title = document.querySelector("#title");
    $title.value = currentTodo.title;

    const $description = document.querySelector("#description");
    $description.value = currentTodo.description;

    const $project = document.querySelector("#project");
    $project.value = currentTodo.project;

    const $date = document.querySelector("#due-date");
    $date.value = currentTodo.date;

    const $priority = document.querySelector("#priority");
    $priority.value = currentTodo.priority;

    const btn = document.querySelector(".submitBtn");
    btn.removeEventListener("click", todo.addTodo);
    btn.addEventListener("click", updateTodo);

    currentCardId = id;
  };

  function updateTodo() {
    const $title = document.querySelector("#title");
    let title = $title.value;

    const $description = document.querySelector("#description");
    let description = $description.value;

    const $project = document.querySelector("#project");
    let project = $project.value;

    const $date = document.querySelector("#due-date");
    let date = $date.value;

    const $priority = document.querySelector("#priority");
    let priority = $priority.value;

    let id = currentCardId;

    if ($title.checkValidity()) {
      todos[currentCardId] = {
        id,
        title,
        description,
        project,
        date,
        priority,
      };

      storage.populateTodos();

      todo.closeForm();
      todo.renderPage();
    } else {
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "Title can not be empty";
    }
  }

  function completeTodo(event) {
    const element = event.target;
    const card = element.parentNode.parentNode;
    card.classList.add("completedTodo");
    let id = card.id;
    if (todos[id].status !== "completed") {
      todos[id].status = "completed";
    }
    storage.populateTodos();
    todo.renderPage();
  }

  function deleteTodo(event) {
    const element = event.target;
    const card = element.parentNode.parentNode;
    let id = card.id;
    todos.splice(id, 1);
    storage.populateTodos();
    todo.renderPage();
  }

  function editProject(event) {
    project.displayForm();

    const element = event.target.parentNode.parentNode;
    let id = element.id;

    let currentProject = allProjects[id];

    const $project = document.getElementById("newProjectName");

    $project.value = currentProject;

    const btn = document.querySelector(".submitBtn");
    btn.removeEventListener("click", project.addProject);
    btn.addEventListener("click", updateProject);

    currentNoteId = id;
  }

  function updateProject() {
    const $projectText = document.getElementById("newProjectName");
    let projectText = $projectText.value;

    if ($projectText.checkValidity()) {
      allProjects[currentNoteId] = projectText;
      storage.populateProjects();
      project.closeForm();
      project.renderPage();
    } else {
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "Project name cannot be empty";
    }
  }

  function editNote(event) {
    note.displayForm();

    const element = event.target.parentNode.parentNode;
    let id = element.id;

    let currentNote = notes[id];

    const $title = document.getElementById("noteTitle");
    const $note = document.getElementById("note");

    $title.value = currentNote.title;
    $note.value = currentNote.noteContent;

    const btn = document.querySelector(".submitBtn");
    btn.removeEventListener("click", note.addNote);
    btn.addEventListener("click", updateNote);

    currentNoteId = id;
  }

  function updateNote() {
    const $title = document.getElementById("noteTitle");
    let title = $title.value;

    const $note = document.getElementById("note");
    let noteContent = $note.value;

    if ($title.checkValidity() && $note.checkValidity()) {
      notes[currentNoteId] = { title, noteContent };
      storage.populateNotes();
      note.closeForm();
      note.renderPage();
    }
    if (!$title.checkValidity() && !$note.checkValidity()) {
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "Title and note can not be empty";
    }

    if (!$title.checkValidity() && $note.checkValidity()) {
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "Title can not be empty";
    }

    if ($title.checkValidity() && !$note.checkValidity()) {
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "Note can not be empty";
    }
  }

  function deleteProject(event) {
    const element = event.target;
    const card = element.parentNode.parentNode;

    let id = card.id;
    allProjects.splice(id, 1);
    storage.populateProjects();
    project.renderPage();
  }

  function deleteNote(event) {
    const element = event.target;
    const card = element.parentNode.parentNode;

    let id = card.id;
    notes.splice(id, 1);
    storage.populateNotes();
    note.renderPage();
  }

  return {
    editTodo,
    updateTodo,
    deleteTodo,
    completeTodo,
    editProject,
    updateProject,
    deleteProject,
    editNote,
    updateNote,
    deleteNote,
  };
})();