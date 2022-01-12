import { todos, Todo } from "./todos";
import { createForm } from "./form";
import { updateDOM } from "./DOMManager";

export const getTodoInput = (() => {
  function displayForm() {
    createForm.todoForm();
    const form = document.querySelector(".newTodoForm");
    form.style.display = "flex";
    /*form.style.height = "60%";
    form.style.padding = "20px";
    form.style.opacity = "1";*/
  }

  function closeForm() {
    const form = document.querySelector(".newTodoForm");
    form.style.display = "none";
    /*form.style.height = "0";
    form.style.padding = "0";
    form.style.opacity = "0";*/
  }

  /*function clearForm() {
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
*/
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
    closeForm();
    updateDOM();
    console.log(todos);
  }

  function updateCard() {
    const dashboard = document.getElementById("dashboard");

    dashboard.textContent = "";

    if (dashboard.className !== "todoView") {
      dashboard.className = 'todoView';
    }

    const todo = document.createElement("div");
    todo.className = "todo";

    const status = document.createElement("div");
    status.className = "status";

    const todoList = document.createElement("div");
    todoList.className = "todoList";

    todoList.textContent = "";

    for (let i = todos.length; i > 0; i--) {
      let todo = todos[i - 1];
      update(todo);
    }

    function update(obj) {
      const $title = obj.title;
      const $description = obj.description;
      const $project = obj.project;
      const $dueDate = obj.date;
      const $priority = obj.priority;

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

      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";

      // Append

      todoItem.appendChild(title);
      todoItem.appendChild(project);
      todoItem.appendChild(description);
      todoItem.appendChild(dueDate);
      todoItem.appendChild(priority);
      todoItem.appendChild(taskActions);
      todoItem.appendChild(priorityIndicator);

      todoList.appendChild(todoItem);

      todo.appendChild(status);
      todo.appendChild(todoList);

      dashboard.appendChild(todo);
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
