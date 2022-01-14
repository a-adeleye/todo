export const pageload = (() => {
  const body = document.querySelector("body");

  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const main = document.createElement("main");
  content.appendChild(main);

  function createNav() {
    const navigation = document.createElement("nav");

    const logo = document.createElement("div");
    logo.className = "logo";

    const logoText = document.createElement("h3");
    logoText.textContent = ".mytoDO";

    logo.appendChild(logoText);
    navigation.appendChild(logo);

    const navItems = document.createElement("div");
    navItems.className = "nav-items";
    navigation.appendChild(navItems);

    let items = [
      { title: " Home", src: "./images/home.png", id: 'homeLink' },
      { title: " Today", src: "./images/today.png", id: 'todayLink' },
      { title: " This Week", src: "./images/week.png", id: 'weekLink' },
      { title: " This Month", src: "./images/calendar.png", id: 'monthLink' },
      { title: " Projects", src: "./images/folder.png", id: 'projectLink' },
      { title: " Notes", src: "./images/notes.png", id: 'noteLink' },
    ];

    for (let i = 0; i < items.length; i++) {
      let item = document.createElement("a");
      let img = document.createElement("img");
      img.src = items[i].src;
      img.setAttribute('id',items[i].id);
      item.appendChild(img);
      //let text = document.createTextNode();
      img.after(items[i].title);

      navItems.appendChild(item);
    }

    main.appendChild(navigation);
    content.appendChild(main);
    body.appendChild(content);
  }

  function createTop() {
    const app = document.createElement("section");
    app.className = "app";

    const top = document.createElement("div");
    top.className = "top";

    const searchBox = document.createElement("div");
    searchBox.className = "search-box";

    const i = document.createElement("i");
    i.className = "fas";
    i.classList.add("fa-search");

    const search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("placeholder", "search");

    searchBox.appendChild(i);
    searchBox.appendChild(search);

    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const todo = document.createElement("div");
    todo.className = "button";
    todo.setAttribute("id", "newTodo");

    const newTodo = document.createElement("i");
    newTodo.className = "fas";
    newTodo.classList.add("fa-plus-circle");

    const todoA = document.createElement("a");
    todoA.textContent = "New Todo";

    todo.appendChild(newTodo);
    todo.appendChild(todoA);

    const project = document.createElement("div");
    project.className = "button";
    project.setAttribute("id", "newProject");

    const newProject = document.createElement("i");
    newProject.className = "fas";
    newProject.classList.add("fa-plus-circle");

    const projectA = document.createElement("a");
    projectA.textContent = "New Project";

    project.appendChild(newProject);
    project.appendChild(projectA);

    const note = document.createElement("div");
    note.className = "button";
    note.setAttribute("id", "newNote");

    const newNote = document.createElement("i");
    newNote.className = "fas";
    newNote.classList.add("fa-plus-circle");

    const noteA = document.createElement("a");
    noteA.textContent = "New Note";

    note.appendChild(newNote);
    note.appendChild(noteA);

    buttons.appendChild(todo);
    buttons.append(project);
    buttons.append(note);

    top.appendChild(searchBox);
    top.appendChild(buttons);

    app.appendChild(top);

    main.appendChild(app);
  }

  function createHeading() {
    const app = document.querySelector(".app");
    const heading = document.createElement("section");
    heading.className = "heading";

    const category = document.createElement("div");
    category.className = "category";

    const h2 = document.createElement("h2");
    h2.setAttribute("id", "categoryName");
    h2.textContent = "Home";

    category.appendChild(h2);
    heading.appendChild(category);

    const filter = document.createElement("select");
    filter.setAttribute("id", "filter");

    const today = document.createElement("option");
    today.value = "Today";
    today.textContent = "Today";

    const thisWeek = document.createElement("option");
    thisWeek.value = "thisWeek";
    thisWeek.textContent = "This Week";

    const thisMonth = document.createElement("option");
    thisMonth.value = "thisMonth";
    thisMonth.textContent = "This Month";

    filter.appendChild(today);
    filter.appendChild(thisWeek);
    filter.appendChild(thisMonth);

    heading.appendChild(filter);

    app.appendChild(heading);

  }

  function createDashboard() {
    const app = document.querySelector(".app");

    const dashboard = document.createElement("section");
    dashboard.setAttribute("id", "dashboard");
    app.appendChild(dashboard);
  }

  function createFooter() {
    const footer = document.createElement("footer");

    const a = document.createElement("a");
    a.href = "https://icons8.com/";
    a.setAttribute("target", "_blank");
    a.textContent = "Icons by Icons8";
    footer.appendChild(a);

    const madeBy = document.createElement("p");
    madeBy.innerHTML = "Adeleye Adeyemi &copy; 2021";
    footer.appendChild(madeBy);
    content.appendChild(footer);
  }

  return { createNav, createFooter, createTop, createHeading, createDashboard };
})();
