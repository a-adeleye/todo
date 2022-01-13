import { getTodoInput } from "./createTodo";
import { project, allProjects } from "./projects";
import { note } from "./notes";

export const createForm = (() => {
  const content = document.querySelector("#content");

  // Todo form

  function todoForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "newTodoForm";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fas";
    closeBtn.classList.add("fa-window-close");
    closeBtn.setAttribute("id", "closeTodoForm");
    closeBtn.addEventListener("click", getTodoInput.closeForm);
    formContainer.appendChild(closeBtn);

    const form = document.createElement("form");
    form.setAttribute("onSubmit", "return false;");
    formContainer.appendChild(form);

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";
    form.appendChild(leftDiv);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    leftDiv.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder", "Title here");
    leftDiv.appendChild(titleInput);

    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "project");
    projectLabel.textContent = "Project";
    leftDiv.appendChild(projectLabel);

    const projectInput = document.createElement("select");
    projectInput.setAttribute("name", "project");
    projectInput.setAttribute("id", "project");

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
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");
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
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "due-date");
    dateInput.setAttribute("id", "due-date");
    rightDiv.appendChild(dateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority";
    rightDiv.appendChild(priorityLabel);

    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("id", "priority");

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
    submit.className = 'submitBtn';
    submit.textContent = "Submit";
    submit.addEventListener("click", getTodoInput.addTodo);
    rightDiv.appendChild(submit);

    content.appendChild(formContainer);
  }

  // Project form

  function projectForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "newProjectForm";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fas";
    closeBtn.classList.add("fa-window-close");
    closeBtn.setAttribute("id", "closeProjectForm");
    closeBtn.addEventListener("click", project.closeForm);
    formContainer.appendChild(closeBtn);

    const form = document.createElement("form");
    form.setAttribute("onSubmit", "return false;");
    formContainer.appendChild(form);

    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", "newProject");
    newProjectLabel.textContent = "New project";
    form.appendChild(newProjectLabel);

    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("name", "newProject");
    newProjectInput.setAttribute("id", "newProjectName");
    newProjectInput.setAttribute("placeholder", "New project here");
    form.appendChild(newProjectInput);

    const submit = document.createElement("a");
    submit.className = 'submitBtn';
    submit.textContent = "Submit";
    submit.addEventListener("click", project.addProject);
    form.appendChild(submit);

    content.appendChild(formContainer);
  }

  //Note form

  function noteForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "noteForm";

    const closeBtn = document.createElement("i");
    closeBtn.className = "fas";
    closeBtn.classList.add("fa-window-close");
    closeBtn.addEventListener("click", note.closeForm);
    formContainer.appendChild(closeBtn);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    formContainer.appendChild(titleLabel);

    const noteTitle = document.createElement("input");
    noteTitle.setAttribute("type", "text");
    noteTitle.setAttribute("name", "noteTitle");
    noteTitle.setAttribute("id", "noteTitle");
    noteTitle.setAttribute("placeholder", "Note title");
    formContainer.appendChild(noteTitle);

    const noteLabel = document.createElement("label");
    noteLabel.setAttribute("for", "note");
    noteLabel.textContent = "New note";
    formContainer.appendChild(noteLabel);

    const noteInput = document.createElement("textarea");
    noteInput.setAttribute("name", "note");
    noteInput.setAttribute("id", "note");
    noteInput.setAttribute("placeholder", "New note here");
    noteInput.setAttribute("rows", "5");
    noteInput.setAttribute("cols", "20");
    noteInput.setAttribute("wrap", "hard");
    formContainer.appendChild(noteInput);

    const submit = document.createElement("a");
    submit.className = 'submitBtn';
    submit.textContent = "Add note";
    submit.addEventListener("click", note.addNote);
    formContainer.appendChild(submit);

    content.appendChild(formContainer);
  }

  //Todo edit form

  function todoEditForm() {
    
  }

  return { todoForm, projectForm, noteForm };
})();
