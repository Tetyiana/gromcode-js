import { onCreateTask } from "./createTasks.js";
import { onToggleTask } from "./updateTask.js";

export const initTogoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
}

