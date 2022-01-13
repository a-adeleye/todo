import { populateStorage, retrieveData } from "./storage";
import { createForm } from "./form";
import { storage } from "./storage";
import { update } from "./update";

let notes = [];

function Note(title, noteContent) {
  return { title, noteContent };
}

export const note = (() => {
  function displayForm() {
    createForm.noteForm();
  }

  function closeForm() {
    const form = document.querySelector(".noteForm");
    form.parentNode.removeChild(form);
  }

  function addNote() {
    const $title = document.getElementById("noteTitle");
    const $note = document.getElementById("note");

    let title = $title.value;
    let noteContent = $note.value;

    let newNote = Note(title, noteContent);

    notes.push(newNote);
    storage.populateNotes();
    console.table(newNote);
    renderPage();
    closeForm();
  }

  function updateNotes() {
    const dashboard = document.getElementById("dashboard");

    dashboard.textContent = "";

    if (dashboard.className !== "noteView") {
      dashboard.className = "noteView";
    }

    for (let i = notes.length; i > 0; i--) {
      const noteCard = document.createElement("div");
      noteCard.className = "noteCard";

      const noteTitle = document.createElement("h4");
      noteTitle.textContent = notes[i - 1].title;
      noteCard.appendChild(noteTitle);

      const note = document.createElement("p");
      note.textContent = notes[i - 1].noteContent;
      noteCard.appendChild(note);

      const edit = document.createElement("i");
      edit.innerText = " Edit";
      edit.className = "far";
      edit.classList.add("fa-edit");
      edit.addEventListener("click", update.editNote);
      noteCard.appendChild(edit);

      dashboard.appendChild(noteCard);
    }

    assignId();
  }

  function assignId() {
    const notes = Array.from(document.querySelectorAll(".noteCard"));
    let id = "";
    for (let i = 0; i < notes.length; i++) {
      id = notes.length - i;
      notes[i].setAttribute("id", id);
    }
  }

  function renderPage() {
    storage.retrieveNotes();
    updateNotes();
  }

  return { displayForm, closeForm, addNote, renderPage };
})();

export { notes };
