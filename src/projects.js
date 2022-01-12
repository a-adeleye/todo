import { projects } from "./todos";


export const project = (() => {

const projectList = document.querySelector("#project");
const projectForm = document.querySelector('.newProjectForm');
const $newProject = document.querySelector("#newProjectName");

function createProject (projectName) {
    let option = document.createElement('option');
    option.value = projectName;
    option.textContent = projectName;
    projectList.appendChild(option);
    console.table(projectName); 
}

function displayForm () {
    projectForm.style.height = "30%";
    projectForm.style.padding = "20px";
    projectForm.style.opacity = '1';
  }

  function closeForm () {
    projectForm.style.height = "0";
    projectForm.style.padding = "0";
    projectForm.style.opacity = '0';
  }

function addProject() {
    let projectName = $newProject.value;
    projects.push(projectName);
    populateProjects();
    closeForm();
    clearForm();
    console.table(projects);
}

function clearForm() {
    $newProject.value = "";
  }

return {displayForm, closeForm, addProject};

})();