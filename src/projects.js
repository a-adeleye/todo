import { createForm } from "./form";

let allProjects = ['Default'];

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
    const projectForm = document.querySelector(".newProjectForm");
    projectForm.style.height = "30%";
    projectForm.style.padding = "20px";
    projectForm.style.opacity = "1";
  }

  function closeForm() {
    const projectForm = document.querySelector(".newProjectForm");
    projectForm.style.height = "0";
    projectForm.style.padding = "0";
    projectForm.style.opacity = "0";
  }

  function addProject() {
    const $newProject = document.getElementById("newProjectName");
    let projectName = $newProject.value;
    allProjects.push(projectName);
    closeForm();
    console.table(allProjects);
  }

  return { displayForm, closeForm, addProject };
})();

export {allProjects};