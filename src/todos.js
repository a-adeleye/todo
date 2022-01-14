let todos = [];

const Todo = function (title, description, project, date, priority) {
  let id = todos.length + 1;
  let status = 'open';
    return { id,title, description, project, date, priority, status };
  };


export {todos, Todo};