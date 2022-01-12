import { getTodoInput } from "./createTodo";
import { project, allProjects } from "./projects";

export const createForm = (() => {
  const content = document.querySelector("#content");

  const formContainer = document.createElement("div");

  const closeBtn = document.createElement("img");
  closeBtn.src = "./images/close.png";

  const form = document.createElement("form");
  form.setAttribute("onSubmit", "return false;");

  const leftDiv = document.createElement("div");
  leftDiv.className = "left";

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");

  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "Title here");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description here");

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("name", "project");
  projectInput.setAttribute("id", "project");

  const rightDiv = document.createElement("div");
  rightDiv.className = "right";

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "due-date");
  dateLabel.textContent = "Due date";

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "due-date");
  dateInput.setAttribute("id", "due-date");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";

  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("name", "priority");
  priorityInput.setAttribute("id", "priority");

  const optionLow = document.createElement("option");
  optionLow.setAttribute("value", "Low");
  optionLow.textContent = "Low";

  const optionMedium = document.createElement("option");
  optionMedium.setAttribute("value", "Medium");
  optionMedium.textContent = "Medium";

  const optionHigh = document.createElement("option");
  optionHigh.setAttribute("value", "High");
  optionHigh.textContent = "High";

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.value = "Submit";

  let closeListener = "";

  function toggleTodoCloseListener() {
    if (!closeListener) {
      closeBtn.addEventListener("click", getTodoInput.closeForm);
      closeListener = "todo";
    }

    if (closeListener == "project") {
      closeBtn.removeEventListener("click", project.closeForm);
      closeBtn.addEventListener("click", getTodoInput.closeForm);
      closeListener = "todo";
    }
  }

  function toggleProjectCloseListener() {
    if (!closeListener) {
      closeBtn.addEventListener("click", project.closeForm);
      closeListener = "project";
    }

    if (closeListener == "todo") {
      closeBtn.removeEventListener("click", getTodoInput.closeForm);
      closeBtn.addEventListener("click", project.closeForm);
      closeListener = "project";
    }
  }

  let submitListener = "";
  function toggleTodosubmitListener() {
    if (!submitListener) {
      submit.addEventListener("click", getTodoInput.addTodo);
      submitListener = "todo";
    }

    if (submitListener == "project") {
      submit.removeEventListener("click", project.addProject);
      submit.addEventListener("click", getTodoInput.addTodo);
      submitListener = "todo";
    }
  }

  function toggleProjectSubmitListener() {
    if (!submitListener) {
      submit.addEventListener("click", project.addProject);
      submitListener = "project";
    }

    if (submitListener == "todo") {
      submit.removeEventListener("click", getTodoInput.addTodo);
      submit.addEventListener("click", project.addProject);
      submitListener = "project";
    }
  }


  function todoForm() {
    formContainer.className = "newTodoForm";
    formContainer.textContent = "";

    leftDiv.appendChild(titleLabel);
    leftDiv.appendChild(titleInput);
    leftDiv.appendChild(projectLabel);


    projectInput.textContent = "";

    allProjects.forEach((project) => appendProject(project));

    function appendProject(project) {
      const option = document.createElement("option");
      option.setAttribute("value", project);
      option.textContent = project;
      projectInput.appendChild(option);
    }

    leftDiv.appendChild(projectInput);
    leftDiv.appendChild(descriptionLabel);
    leftDiv.appendChild(descriptionInput);

    rightDiv.appendChild(dateLabel);
    rightDiv.appendChild(dateInput);
    rightDiv.appendChild(priorityLabel);

    form.textContent = "";

    priorityInput.appendChild(optionLow);
    priorityInput.appendChild(optionMedium);
    priorityInput.appendChild(optionHigh);
    priorityInput.value = "Low";

    rightDiv.appendChild(priorityInput);

    submit.setAttribute("id", "newTodoSubmit");

    toggleTodosubmitListener()

    rightDiv.appendChild(submit);

    form.appendChild(leftDiv);
    form.appendChild(rightDiv);

    closeBtn.setAttribute("id", "closeTodoForm");
    toggleTodoCloseListener();

    formContainer.appendChild(closeBtn);
    formContainer.appendChild(form);

    content.appendChild(formContainer);
  }

  function projectForm() {
    formContainer.className = "newProjectForm";

    closeBtn.setAttribute("id", "closeProjectForm");
    toggleProjectCloseListener();

    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", "newProject");
    newProjectLabel.textContent = "New Project";

    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("name", "newProject");
    newProjectInput.setAttribute("id", "newProjectName");
    newProjectInput.setAttribute("placeholder", "New project here");

    submit.setAttribute("id", "newProjectSubmit");

    toggleProjectSubmitListener()

    form.textContent = "";

    form.appendChild(newProjectLabel);
    form.appendChild(newProjectInput);
    form.appendChild(submit);

    formContainer.appendChild(closeBtn);
    formContainer.appendChild(form);

    content.appendChild(formContainer);
  }

  return { todoForm, projectForm };
})();
