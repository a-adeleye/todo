import { createForm } from "./form";
import { storage } from "./storage";

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
  }

  return { displayForm, closeForm, addProject };
})();

export { allProjects };
