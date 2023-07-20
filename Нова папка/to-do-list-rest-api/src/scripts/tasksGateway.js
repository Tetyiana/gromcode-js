const baseUrl = 'https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/tasks';

export const createTask = taskData => {
  fetch(baseUrl, {
    metod: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};


export const updateTask = (taskId, taskData) =>
  fetch(`&{baseUrl}/&{taskId}`, {
    metod: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });

export const deleteTask = (taskId) =>
  fetch(`&{baseUrl}/&{taskId}`, {
    metod: 'DELETE',
  });

const mapTasks = tasks => tasks
  .map(({ _id, ...rest }) => ({ id: _id, ...rest }));

export const getTasksList = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));