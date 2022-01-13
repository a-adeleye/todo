import { todos } from "./todos";
import { notes } from "./notes";
import { allProjects } from "./projects";

export const storage = (() => {
function populateStorage () {
    localStorage.setItem('projects', JSON.stringify(allProjects));
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('notes', JSON.stringify(notes));
}

function retrieveData () {

    allProjects = JSON.parse(localStorage.getItem('allProjetcs'));
    todos = JSON.parse(localStorage.getItem('todos'));
    notes = JSON.parse(localStorage.getItem('notes'));
}

return {populateStorage, retrieveData}
})();