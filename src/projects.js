import { createForm } from "./form";
import { storage } from "./storage";
import {update} from './update';

let allProjects = ["Default"];

export const project = (() => {
  const projectList = document.querySelector("#project");

  function createProject(projectName) {
    let option = document.createElement("option");
    option.value = projectName;
    option.textContent = projectName;
    projectList.appendChild(option);
    console.table(projectName);
  }

  function displayForm() {
    createForm.projectForm();
    const form = document.querySelector(".newProjectForm");

    //projectForm.style.display = 'flex';
    /*projectForm.style.height = "40%";
    projectForm.style.padding = "20px";
    projectForm.style.opacity = "1";*/
  }

  function closeForm() {
    const form = document.querySelector(".newProjectForm");
    form.parentNode.removeChild(form);

    //projectForm.style.display = 'none';
    /*projectForm.style.height = "0";
    projectForm.style.padding = "0";
    projectForm.style.opacity = "0";*/
  }

  function addProject() {
    const $newProject = document.getElementById("newProjectName");
    let projectName = $newProject.value;
    allProjects.push(projectName);
    closeForm();
    storage.populateProjects();
    console.table(allProjects);
    renderPage();
  }

  function updateProjects() {
    storage.retrieveProjects();
    const dashboard = document.getElementById("dashboard");
    dashboard.textContent = "";

    if (dashboard.className !== "noteView") {
      dashboard.className = "noteView";
    }

    for (let i = allProjects.length; i > 0; i--) {
      const projectCard = document.createElement("div");
      projectCard.className = "projectCard";

      const div = document.createElement("div");
      div.className = "projectContent";

      const id = document.createElement("h5");
      id.textContent = allProjects.length - (i - 1) + ".";
      div.appendChild(id);

      const project = document.createElement("p");
      project.textContent = allProjects[i - 1];
      project.setAttribute("id", "projectContent");
      div.appendChild(project);

      const projectActions = document.createElement("div");
      projectActions.className = "projectActions";

      const edit = document.createElement("i");
      edit.innerText = " Edit";
      edit.className = "fas";
      edit.classList.add("fa-edit");
      edit.addEventListener("click", update.editProject);

      const deleteProject = document.createElement("i");
      deleteProject.innerText = " Delete";
      deleteProject.className = "fas";
      deleteProject.classList.add("fa-trash");
      /*deleteProject.addEventListener("click", update.editProject);*/

      projectActions.appendChild(edit);
      projectActions.appendChild(deleteProject);

      projectCard.appendChild(div);

      projectCard.appendChild(projectActions);

      dashboard.appendChild(projectCard);
    }
  }

  function assignId() {
    const cards = Array.from(document.querySelectorAll(".projectCard"));
    let id = "";
    for (let i = 0; i < cards.length; i++) {
      id = cards.length - i;
      cards[i].setAttribute("id", id);
    }
  }

  function renderPage() {
    updateProjects();
    assignId();
    updateHeading();
  }

  function updateHeading() {
    const heading = document.getElementById("categoryName");
    heading.textContent = "Projects";
  }

  return { displayForm, closeForm, addProject, renderPage };
})();

export { allProjects };
