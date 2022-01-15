import { todo } from "./createTodo";
import { project, allProjects } from "./projects";
import { note } from "./notes";
import { storage } from "./storage";

export const createForm = (() => {
  // Todo form

  function todoForm() {
    const content = document.getElementById("content");

    storage.retrieveProjects();

    const formContainer = document.createElement("div");
    formContainer.className = "newTodoForm";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fas";
    closeBtn.classList.add("fa-window-close");
    closeBtn.id = "closeTodoForm";
    closeBtn.addEventListener("click", todo.closeForm);
    formContainer.appendChild(closeBtn);

    const errorMsg = document.createElement("p");
    errorMsg.id = "errorMsg";

    const form = document.createElement("form");
    form.setAttribute("onSubmit", "return false;");
    formContainer.appendChild(form);

    formContainer.appendChild(errorMsg);

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";
    form.appendChild(leftDiv);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title*";
    leftDiv.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.setAttribute("name", "title");
    titleInput.id = "title";
    titleInput.required = true;
    titleInput.setAttribute("placeholder", "Title here");
    leftDiv.appendChild(titleInput);

    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "project");
    projectLabel.textContent = "Project";
    leftDiv.appendChild(projectLabel);

    const projectInput = document.createElement("select");
    projectInput.setAttribute("name", "project");
    projectInput.id = "project";

    projectInput.textContent = "";

    allProjects.forEach((project) => appendProject(project));

    function appendProject(project) {
      const option = document.createElement("option");
      option.setAttribute("value", project);
      option.textContent = project;
      projectInput.appendChild(option);
    }
    leftDiv.appendChild(projectInput);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";
    leftDiv.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.setAttribute("name", "description");
    descriptionInput.id = "description";
    descriptionInput.setAttribute("placeholder", "Description here");
    leftDiv.appendChild(descriptionInput);

    const rightDiv = document.createElement("div");
    rightDiv.className = "right";
    form.appendChild(rightDiv);

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "due-date");
    dateLabel.textContent = "Due date";
    rightDiv.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.setAttribute("name", "due-date");
    dateInput.id = "due-date";
    rightDiv.appendChild(dateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority";
    rightDiv.appendChild(priorityLabel);

    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("name", "priority");
    priorityInput.id = "priority";

    const optionLow = document.createElement("option");
    optionLow.setAttribute("value", "Low");
    optionLow.textContent = "Low";
    priorityInput.appendChild(optionLow);
    priorityInput.value = "Low";

    const optionMedium = document.createElement("option");
    optionMedium.setAttribute("value", "Medium");
    optionMedium.textContent = "Medium";
    priorityInput.appendChild(optionMedium);

    const optionHigh = document.createElement("option");
    optionHigh.setAttribute("value", "High");
    optionHigh.textContent = "High";
    priorityInput.appendChild(optionHigh);

    rightDiv.appendChild(priorityInput);

    const submit = document.createElement("a");
    submit.className = "submitBtn";
    submit.textContent = "Submit";
    submit.addEventListener("click", todo.addTodo);
    rightDiv.appendChild(submit);

    content.appendChild(formContainer);
  }

  // Project form

  function projectForm() {
    const content = document.getElementById("content");

    const formContainer = document.createElement("div");
    formContainer.className = "newProjectForm";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fas";
    closeBtn.classList.add("fa-window-close");
    closeBtn.id = "closeProjectForm";
    closeBtn.addEventListener("click", project.closeForm);
    formContainer.appendChild(closeBtn);

    const errorMsg = document.createElement("p");
    errorMsg.id = "errorMsg";

    const form = document.createElement("form");
    form.setAttribute("onSubmit", "return false;");
    formContainer.appendChild(form);

    formContainer.appendChild(errorMsg);

    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", "newProject");
    newProjectLabel.textContent = "Project*";
    form.appendChild(newProjectLabel);

    const newProjectInput = document.createElement("input");
    newProjectInput.type = "text";
    newProjectInput.setAttribute("name", "newProject");
    newProjectInput.id = "newProjectName";
    newProjectInput.required = true;
    newProjectInput.setAttribute("placeholder", "New project here");
    form.appendChild(newProjectInput);

    const submit = document.createElement("a");
    submit.className = "submitBtn";
    submit.textContent = "Submit";
    submit.addEventListener("click", project.addProject);
    form.appendChild(submit);

    content.appendChild(formContainer);
  }

  //Note form

  function noteForm() {
    const content = document.getElementById("content");
    const formContainer = document.createElement("div");
    formContainer.className = "noteForm";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fas";
    closeBtn.classList.add("fa-window-close");
    closeBtn.addEventListener("click", note.closeForm);
    formContainer.appendChild(closeBtn);

    const errorMsg = document.createElement("p");
    errorMsg.id = "errorMsg";
    errorMsg.textCOntent = "Reddddd";

    const form = document.createElement("form");
    form.setAttribute("onSubmit", "return false;");
    formContainer.appendChild(form);

    formContainer.appendChild(errorMsg);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title*";
    form.appendChild(titleLabel);

    const noteTitle = document.createElement("input");
    noteTitle.type = "text";
    noteTitle.setAttribute("name", "noteTitle");
    noteTitle.id = "noteTitle";
    noteTitle.required = true;
    noteTitle.setAttribute("placeholder", "Note title");
    form.appendChild(noteTitle);

    const noteLabel = document.createElement("label");
    noteLabel.setAttribute("for", "note");
    noteLabel.textContent = "Note*";
    form.appendChild(noteLabel);

    const noteInput = document.createElement("textarea");
    noteInput.setAttribute("name", "note");
    noteInput.id = "note";
    noteInput.required = true;
    noteInput.setAttribute("placeholder", "New note here");
    noteInput.setAttribute("rows", "5");
    noteInput.setAttribute("cols", "20");
    noteInput.setAttribute("wrap", "hard");
    form.appendChild(noteInput);

    const submit = document.createElement("a");
    submit.className = "submitBtn";
    submit.textContent = "Add note";
    submit.addEventListener("click", note.addNote);
    form.appendChild(submit);

    content.appendChild(formContainer);
  }

  return { todoForm, projectForm, noteForm };
})();
