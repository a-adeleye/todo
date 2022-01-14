import { storage} from './storage';
import { todos } from "./todos";
import { getTodoInput } from "./createTodo";
import { note, notes } from "./notes";
import { pageload } from './pageload';

export const update = (() => {
  let currentCardId = "";
  let currentNoteId = "";

  const editTodo = (event) => {
    getTodoInput.displayForm();
    const element = event.target.parentNode;
    let id = element.parentNode.id - 1;

    let todo = todos[id];

    const $title = document.querySelector("#title");
    $title.value = todo.title;

    const $description = document.querySelector("#description");
    $description.value = todo.description;

    const $project = document.querySelector("#project");
    $project.value = todo.project;

    const $date = document.querySelector("#due-date");
    $date.value = todo.date;

    const $priority = document.querySelector("#priority");
    $priority.value = todo.priority;

    const btn = document.querySelector(".submitBtn");
    btn.removeEventListener("click", getTodoInput.addTodo);
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

    let id = currentCardId + 1;

    todos[currentCardId] = { id, title, description, project, date, priority };

    storage.populateTodos();

    getTodoInput.closeForm();
    getTodoInput.renderPage();
  }

  /*

  function editProject() {}

  function updateProject() {} */

  function editNote(event) {
    note.displayForm();

    const element = event.target.parentNode;
    let id = element.id - 1;

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

    notes[currentNoteId] = { title, noteContent };

    storage.populateNotes();
    note.closeForm();
    note.renderPage();
  }

  function deleteNote(event){
    const element = event.target;
    const card = element.parentNode.parentNode;

    let id = card.id - 1;
    todos.splice(id,1);
    card.parentNode.removeChild(card);
    storage.populateNotes();
    note.renderPage();
  }

  return {
    editTodo,
    updateTodo,
    //editProject,
    //updateProject,
    editNote,
    updateNote,
    deleteNote
  };
})();

/* 
  const updateTodo = (event) => {
    const element = event.target.parentNode;
    element.parentNode.setAttribute("contenteditable", "false");
    element.parentNode.style.border = "none";
    document.getElementById("updateTodo").style.display = "none";
  };



const $title = document.querySelector("#title");
const $description = document.querySelector("#description");
const $notes = document.querySelector("#notes");
const $project = document.querySelector("#project");
const $date = document.querySelector("#due-date");
const $priority = document.querySelector("#priority");

let title = $title.value;
let description = $description.value;
let notes = $notes.value;
let project = $project.value;
let date = $date.value;
let priority = $priority.value;
*/
