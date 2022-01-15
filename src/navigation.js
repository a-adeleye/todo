import { isToday, isThisMonth } from "./datefunctions";
import { todos } from "./todos";
import { storage } from "./storage";
import { update } from "./update";
import { updateDOM } from "./DOMManager";

//let todayTodos = todos.filter((todo) => isToday(todo.date));
//let thisMonthTodos = todos.filter((todo) => isThisMonth(todo.date));

//console.log("I am todos " + todos.length);
//console.log("I am month " + thisMonthTodos.length);

export const nav = (() => {

  function today() {}

  function thisMonth() {
    renderPage();
  }

  function updateCard() {
    const dashboard = document.getElementById("dashboard");
    let thisMonthTodos = todos.filter((todo) => isThisMonth(todo.date));

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

    for (let i = thisMonthTodos.length; i > 0; i--) {
      let todoCard = thisMonthTodos[i - 1];
      create(todoCard);
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
      todoItem.setAttribute("id", thisMonthTodos.indexOf(obj));

      if (obj.status !== "completed") {
        todoList.appendChild(todoItem);
      } else {
        completedList.appendChild(todoItem);
      }
    }
  }

  function updateStatus() {
    let thisMonthTodos = todos.filter((todo) => isThisMonth(todo.date));
    const todoCount = document.getElementById("todoCount");
    let todoNumber = thisMonthTodos.filter(
      (todo) => todo.status !== "completed"
    );
    todoCount.textContent = todoNumber.length;

    const completedCount = document.getElementById("completedCount");
    let completedTodos = thisMonthTodos.filter(
      (todo) => todo.status == "completed"
    );
    completedCount.textContent = completedTodos.length;
  }

  function renderPage() {
    updateCard();
    updateStatus();
    updateDOM();
    updateHeading();
  }

  function updateHeading() {
    let thisMonthTodos = todos.filter((todo) => isThisMonth(todo.date));
    const heading = document.getElementById("categoryName");
    const count = document.getElementById("categoryCount");
    heading.textContent = "This Month";
    count.textContent = thisMonthTodos.length;
  }

  return { today, thisMonth, today };
})();
