let todos = [];
let projects = ['Default'];

const Todo = function (title, description, project, date, priority) {
  let id = todos.length + 1;
    return { id,title, description, project, date, priority };
  };


export {todos, projects, Todo};