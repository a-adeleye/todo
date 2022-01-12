import { todos, Todo } from "./todos";
import { createForm } from "./form";
import { updateDOM } from "./DOMManager";

export const getTodoInput = (() => {
  function displayForm() {
    createForm.todoForm();
    const form = document.querySelector(".newTodoForm");
    form.style.height = "60%";
    form.style.padding = "20px";
    form.style.opacity = "1";
  }

  function closeForm() {
    const form = document.querySelector(".newTodoForm");
    form.style.height = "0";
    form.style.padding = "0";
    form.style.opacity = "0";
  }

  function clearForm() {
    const $title = document.querySelector("#title");
    const $description = document.querySelector("#description");
    const $project = document.querySelector("#project");
    const $date = document.querySelector("#due-date");
    const $priority = document.querySelector("#priority");
    $title.value = "";
    $description.value = "";
    $project.value = "Default";
    $date.value = "";
    $priority.value = "Low";
  }

  function addTodo() {
    const $title = document.querySelector("#title");
    const $description = document.querySelector("#description");
    const $project = document.querySelector("#project");
    const $date = document.querySelector("#due-date");
    const $priority = document.querySelector("#priority");

    let title = $title.value;
    let description = $description.value;
    let project = $project.value;
    let date = $date.value;
    let priority = $priority.value;

    const newTodo = Todo(title, description, project, date, priority);

    todos.push(newTodo);
    updateCard();
    assignId();
    clearForm();
    closeForm();
    updateDOM();
    console.log(todos);
  }

  function updateCard() {
    const todoList = document.querySelector(".todoList");
    todoList.textContent = "";

    todos.forEach((todo) => update(todo));

    function update(todo) {
      const $title = todo.title;
      const $description = todo.description;
      const $project = todo.project;
      const $dueDate = todo.date;
      const $priority = todo.priority;

      const title = document.createElement("h4");
      title.textContent = $title;
      const description = document.createElement("h5");
      description.textContent = $description;
      const project = document.createElement("h5");
      project.textContent = $project;
      const dueDate = document.createElement("h5");
      dueDate.textContent = $dueDate;
      const priority = document.createElement("h5");
      priority.textContent = $priority;

      // Task actions

      const taskActions = document.createElement("div");
      taskActions.className = "taskActions";

      const edit = document.createElement("i");
      edit.innerText = " Edit";
      edit.className = "far";
      edit.classList.add("fa-edit");

      const complete = document.createElement("i");
      complete.innerText = " Complete";
      complete.className = "far";
      complete.classList.add("fa-check-square");

      taskActions.appendChild(edit);
      taskActions.appendChild(complete);

      const priorityIndicator = document.createElement("div");
      priorityIndicator.setAttribute(
        "class",
        `priority ${$priority.toLowerCase()}`
      );

      const taskCard = document.createElement("div");
      taskCard.className = "todo-item";

      // Append

      taskCard.appendChild(title);
      taskCard.appendChild(project);
      taskCard.appendChild(description);
      taskCard.appendChild(dueDate);
      taskCard.appendChild(priority);
      taskCard.appendChild(taskActions);
      taskCard.appendChild(priorityIndicator);

      todoList.appendChild(taskCard);
    }
  }

  function assignId() {
    const cards = Array.from(document.querySelectorAll(".todo-item"));
    for (let i = 0; i < cards.length; i++) {
      cards[i].setAttribute("id", i);
    }
  }

  return { displayForm, closeForm, addTodo, todos };
})();
