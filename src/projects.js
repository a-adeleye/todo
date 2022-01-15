import { createForm } from "./form";
import { storage } from "./storage";
import { update } from "./update";

let allProjects = ["General"];

export const project = (() => {
  const projectList = document.querySelector("#project");

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

    if ($newProject.checkValidity()) {
      allProjects.push(projectName);
      closeForm();
      storage.populateProjects();
      console.table(allProjects);
      renderPage();
    } else {
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = "Project name cannot be empty";
    }
  }

  function updateProjects() {
    storage.retrieveProjects();
    const dashboard = document.getElementById("dashboard");
    dashboard.textContent = "";

    if (dashboard.className !== "projectView") {
      dashboard.className = "projectView";
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

      const deleteBtn = document.createElement("i");
      deleteBtn.innerText = " Delete";
      deleteBtn.className = "fas";
      deleteBtn.classList.add("fa-trash");
      deleteBtn.addEventListener("click", update.deleteProject);

      projectActions.appendChild(edit);
      projectActions.appendChild(deleteBtn);

      projectCard.appendChild(div);

      if (i !== 1) {
        projectCard.appendChild(projectActions);
        projectCard.setAttribute("id", i - 1);
      }

      dashboard.appendChild(projectCard);
    }
  }

  function renderPage() {
    updateProjects();
    updateHeading();
  }

  function updateHeading() {
    const heading = document.getElementById("categoryName");
    const count = document.querySelector(".count");
    heading.textContent = "Projects";
    count.textContent = allProjects.length;
  }

  return { displayForm, closeForm, addProject, renderPage };
})();

export { allProjects };
