import { createStore } from "effector";
import effectorEvents from "./events";
import { loadTasksFx } from "./operations";

// Создаем событие

// Создаем состояние (стор)
const count = createStore(0).on(effectorEvents.increment, (state) => state + 1);
const tasks = createStore([])
  .on(effectorEvents.addTask, (state, newTask) => [
    ...state,
    { id: state.length + 1, text: newTask, completed: false },
  ])
  .on(effectorEvents.removeTask, (state, taskId) =>
    state.filter((task) => task.id !== taskId)
  )
  .on(effectorEvents.toggleTask, (state, taskId) =>
    state.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  )
  .on(loadTasksFx.doneData, (_, tasks) => tasks);

const isLoading = createStore(false)
  .on(loadTasksFx, () => true)
  .on(loadTasksFx.done, () => false)
  .on(loadTasksFx.fail, () => false);


export { count, tasks, isLoading };
