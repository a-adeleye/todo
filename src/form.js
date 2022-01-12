import { getTodoInput } from "./createTodo";
import { projects } from "./todos";

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

  function todoForm() {
    formContainer.className = "newTodoForm";

    leftDiv.appendChild(titleLabel);
    leftDiv.appendChild(titleInput);
    leftDiv.appendChild(projectLabel);

    projects.forEach((project) => appendProject(project));

    leftDiv.appendChild(projectInput);
    leftDiv.appendChild(descriptionLabel);
    leftDiv.appendChild(descriptionInput);

    rightDiv.appendChild(dateLabel);
    rightDiv.appendChild(dateInput);
    rightDiv.appendChild(priorityLabel);

    priorityInput.textContent = "";
    priorityInput.appendChild(optionLow);
    priorityInput.appendChild(optionMedium);
    priorityInput.appendChild(optionHigh);
    priorityInput.value = "Low";

    rightDiv.appendChild(priorityInput);

    submit.setAttribute("id", "newFormSubmit");
    submit.addEventListener("click", getTodoInput.addTodo);
    rightDiv.appendChild(submit);

    form.appendChild(leftDiv);
    form.appendChild(rightDiv);

    closeBtn.setAttribute("id", "closeTodoForm");
    closeBtn.addEventListener("click", getTodoInput.closeForm);

    formContainer.appendChild(closeBtn);
    formContainer.appendChild(form);

    function appendProject(project) {
      const option = document.createElement("option");
      option.setAttribute("value", project);
      option.textContent = project;
      projectInput.textContent = "";
      projectInput.appendChild(option);
    }

    content.appendChild(formContainer);
  }

  function projectForm() {
    formContainer.className = "newProjectForm";
    closeBtn.setAttribute("id", "closeProjectForm");

    projectInput.setAttribute("id", "newProjectName");

    form.appendChild(projectLabel);
    form.appendChild(projectInput);

    formContainer.appendChild(closeBtn);
    formContainer.appendChild(form);

    content.appendChild(formContainer);
  }

  return { todoForm, projectForm };
})();
