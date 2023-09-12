import { createEffect } from "effector";

const loadTasksFx = createEffect(async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

export { loadTasksFx };
