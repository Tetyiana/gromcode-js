const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
  // put your code here
  return fetch(baseUrl)
    .then(response => response.json());
}

// export function getTaskById(taskId) {
//   return fetch(baseUrl)
//     .then(response => response.json())
//     .then(task => task.id === taskId);
// }

export function getTaskById(taskId) {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
          return tasks[i];
        }
      }
      return null; // Если задача не найдена
    });
}



// examples
// getTasksList().then(tasksList => {
//   console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
// });

// getTaskById('2').then(taskData => {
//   console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
// });
