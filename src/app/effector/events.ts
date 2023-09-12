import { createEvent } from "effector";

// Создаем события
const addTask = createEvent();
const removeTask = createEvent();
const toggleTask = createEvent();
const increment = createEvent();

const effectorEvents = {
  addTask,
  removeTask,
  toggleTask,
  increment,
};

export default effectorEvents;
