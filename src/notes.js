import { createForm } from "./form";

let notes = [];

function Note(title, note) {
  return { title, note };
}

export const note = (() => {
  function displayForm() {
    createForm.noteForm();
    const form = document.querySelector(".noteForm");
    form.style.display = "flex";
  }

  function closeForm() {
    const form = document.querySelector(".noteForm");
    form.style.display = "none";
  }

  function addNote() {
    const $title = document.getElementById("noteTitle");
    const $note = document.getElementById("note");

    let title = $title.value;
    let note = $note.value;

    let newNote = Note(title, note);

    notes.push(newNote);
    console.table(newNote);
    updateNotes();
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
      const note = document.createElement("p");

      noteTitle.textContent = notes[i - 1].title;
      note.textContent = notes[i - 1].note;

      noteCard.appendChild(noteTitle);
      noteCard.appendChild(note);

      dashboard.appendChild(noteCard);
    }
  }

  return { displayForm, closeForm, addNote, updateNotes, notes };
})();
