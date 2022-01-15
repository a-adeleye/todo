import { storage } from "./storage";
import { todos, todoArray, Todo } from "./todos";
import { createForm } from "./form";
import { update } from "./update";
import { updateDOM } from "./DOMManager";
import { isToday, isThisWeek, isThisMonth } from "./datefunctions";

export const todo = (() => {
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

    if ($title.checkValidity()) {
      const newTodo = Todo(title, description, project, date, priority);

      todos.push(newTodo);
      storage.populateTodos();
      closeForm();
      renderPage();
    } else {
      const errorMsg = document.getElementById('errorMsg');
      errorMsg.textContent = 'Title can not be empty';
    };
  }
  //let todoArray = [];

  function updateCard() {
    const dashboard = document.getElementById("dashboard");

    storage.retrieveTodos();

    const filter = document.getElementById("filter");
    todoArray = todos;

    if (filter.value == "This Month") {
      todoArray = todos.filter((todo) => isThisMonth(todo.date));
    } else if (filter.value == "Today") {
      todoArray = todos.filter((todo) => isToday(todo.date));
    } else if (filter.value == "This Week") {
      todoArray = todos.filter((todo) => isThisWeek(todo.date));
    }

    dashboard.textContent = "";

    if (dashboard.className !== "todoView") {
      dashboard.className = "todoView";
    }

    // Todo

    const todoPane = document.createElement("div");
    todoPane.className = "todo";

    const status = document.createElement("div");
    status.className = "status";

    const todoStatusName = document.createElement("div");
    todoStatusName.className = "status-name";
    todoStatusName.textContent = "Todo";
    status.appendChild(todoStatusName);

    const todoCount = document.createElement("div");
    todoCount.className = "count";
    todoCount.setAttribute("id", "todoCount");
    status.appendChild(todoCount);

    const todoList = document.createElement("div");
    todoList.className = "todoList";

    todoList.textContent = "";

    todoPane.appendChild(status);
    todoPane.appendChild(todoList);

    //Completed

    const completedPane = document.createElement("div");
    completedPane.className = "completed";

    const completedStatus = document.createElement("div");
    completedStatus.className = "status";

    const completedStatusName = document.createElement("div");
    completedStatusName.className = "status-name";
    completedStatusName.textContent = "Completed";
    completedStatus.appendChild(completedStatusName);

    const completedCount = document.createElement("div");
    completedCount.className = "count";
    completedCount.setAttribute("id", "completedCount");
    completedStatus.appendChild(completedCount);

    const completedList = document.createElement("div");
    completedList.className = "todoList";

    completedList.textContent = "";

    completedPane.appendChild(completedStatus);
    completedPane.appendChild(completedList);

    dashboard.appendChild(todoPane);
    dashboard.appendChild(completedPane);

    for (let i = todoArray.length; i > 0; i--) {
      let todoCard = todoArray[i - 1];
      create(todoCard);
    }

    function create(obj) {
      const $title = obj.title;
      const $description = obj.description;
      const $project = `Project: ${obj.project}`;
      const $dueDate = `Due date: ${obj.date}`;
      const $priority = `Priority: ${obj.priority}`;

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
      edit.addEventListener("click", update.editTodo);

      const complete = document.createElement("i");
      complete.innerText = " Complete";
      complete.className = "fas";
      complete.classList.add("fa-check-square");
      complete.addEventListener("click", update.completeTodo);

      const deleteTodo = document.createElement("i");
      deleteTodo.innerText = " Delete";
      deleteTodo.className = "fas";
      deleteTodo.classList.add("fa-trash");
      deleteTodo.addEventListener("click", update.deleteTodo);

      taskActions.appendChild(edit);
      taskActions.appendChild(complete);
      taskActions.appendChild(deleteTodo);

      const priorityIndicator = document.createElement("div");
      priorityIndicator.setAttribute(
        "class",
        `priority ${$priority.toLowerCase()}`
      );

      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      if (obj.status == "completed") {
        todoItem.classList.add("completedTodo");
      }

      // Append

      todoItem.appendChild(title);
      todoItem.appendChild(project);
      todoItem.appendChild(description);
      todoItem.appendChild(dueDate);
      todoItem.appendChild(priority);
      todoItem.appendChild(taskActions);
      todoItem.appendChild(priorityIndicator);
      todoItem.setAttribute("id", todoArray.indexOf(obj));

      if (obj.status !== "completed") {
        todoList.appendChild(todoItem);
      } else {
        completedList.appendChild(todoItem);
      }
    }
  }

  function updateStatus() {
    const todoCount = document.getElementById("todoCount");
    let todoNumber = todoArray.filter((todo) => todo.status !== "completed");
    todoCount.textContent = todoNumber.length;

    const completedCount = document.getElementById("completedCount");
    let completedTodos = todoArray.filter((todo) => todo.status == "completed");
    completedCount.textContent = completedTodos.length;
  }

  function renderPage() {
    updateCard();
    updateStatus();
    updateDOM();
    updateHeading();
  }

  function updateHeading() {
    const filter = document.getElementById("filter");
    const heading = document.getElementById("categoryName");
    const count = document.getElementById("categoryCount");
    if (filter.value == "All") {
      heading.textContent = "Home";
    } else {
      heading.textContent = filter.value;
    }
    count.textContent = todoArray.length;
  }

  return { displayForm, closeForm, addTodo, renderPage, todos };
})();
