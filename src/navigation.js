import { todos } from "./todos";
import { todoArray } from "./todos";
import { isToday, isThisWeek, isThisMonth } from "./datefunctions";
import { todo } from "./createTodo";

export const nav = (() => {
  const home = () => {
    const filter = document.getElementById("filter");
    filter.value = "All";
    todo.renderPage();
  };

  const today = () => {
    const filter = document.getElementById("filter");
    filter.value = "Today";
    todo.renderPage();
  };

  const week = () => {
    const filter = document.getElementById("filter");
    filter.value = "This Week";
    todo.renderPage();
  };

  const month = () => {
    const filter = document.getElementById("filter");
    filter.value = "This Month";
    todo.renderPage();
  };

  return { home, today, week, month };
})();
