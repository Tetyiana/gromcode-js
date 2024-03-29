import { onCreateTask } from "./createTasks.js";
import { onToggleTask } from "./updateTask.js";
import { onDeleteTask } from "./deleteTask.js";

export const initTogoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);

  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);

  const deleteListElem = document.querySelector(".list__item-delete-btn");
  deleteListElem.addEventListener("click", onDeleteTask);
};
