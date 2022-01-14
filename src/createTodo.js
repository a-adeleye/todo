import {storage} from './storage';
import { todos, Todo } from "./todos";
import { createForm } from "./form";
import { update } from './update';
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
    form.parentNode.removeChild(form);
    //form.style.display = "none";
    /*form.style.height = "0";
    form.style.padding = "0";
    form.style.opacity = "0";*/
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
    storage.populateTodos();
    closeForm();
    renderPage();
  }

  function updateCard() {
    const dashboard = document.getElementById("dashboard");
    storage.retrieveTodos();

    dashboard.textContent = "";

    if (dashboard.className !== "todoView") {
      dashboard.className = "todoView";
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
      create(todo);
    }

    function create(obj) {
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
      edit.className = "fas";
      edit.classList.add("fa-edit");
     edit.addEventListener('click',update.editTodo);

      const complete = document.createElement("i");
      complete.innerText = " Complete";
      complete.className = "fas";
      complete.classList.add("fa-check-square");

      const  deleteTodo = document.createElement("i");
      deleteTodo.innerText = " Delete";
      deleteTodo.className = "fas";
      deleteTodo.classList.add("fa-trash");

      taskActions.appendChild(edit);
      taskActions.appendChild(complete);
      taskActions.appendChild( deleteTodo);

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
      updateStatus(status);
      todo.appendChild(status);
      todo.appendChild(todoList);

      dashboard.appendChild(todo);
    }

    function updateStatus(status) {
      let todoCount = todos.length;

      const statusName = document.createElement("div");
      statusName.className = "status-name";
      statusName.textContent = "Todo";

      const count = document.createElement("div");
      count.className = "count";
      count.setAttribute("id", "todoCount");
      count.textContent = todoCount;

      status.textContent = "";

      status.appendChild(statusName);
      status.appendChild(count);

      // Update competed todos
    }

    const completedList = document.createElement("div");
    completedList.className = "completed";

    const completedStatus = document.createElement("div");
    completedStatus.className = "status";

    function updateCompleted() {
      const dashboard = document.getElementById("dashboard");
      const statusName = document.createElement("div");
      statusName.className = "status-name";
      statusName.textContent = "Completed";

      const count = document.createElement("div");
      count.className = "count";
      count.setAttribute("id", "todoCount");

      let completedCount = todos.length;
      count.textContent = completedCount;

      completedList.textContent = "";
      completedStatus.textContent = "";

      completedStatus.appendChild(statusName);
      completedStatus.appendChild(count);

      completedList.appendChild(completedStatus);

      dashboard.appendChild(completedList);
    }
    updateCompleted();
  }

  function assignId() {
    const cards = Array.from(document.querySelectorAll(".todo-item"));
    let id = "";
    for (let i = 0; i < cards.length; i++) {
      id = cards.length - i;
      cards[i].setAttribute("id", id);
    }
  }

  function renderPage(){
    updateCard();
    assignId();
    updateDOM();
    updateHeading();
  }

  function updateHeading(){
    const heading = document.getElementById('categoryName');
      heading.textContent = 'Home';
  }

  return { displayForm, closeForm, addTodo, renderPage, todos };
})();
