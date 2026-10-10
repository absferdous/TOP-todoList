import { addTitleBtn, titleInputBox, todoDescription } from "./domelements";

export const canCreateNewTodo = (title = "", description = "") => ({
  title,

  description,

  id: crypto.randomUUID(),

  // console.log({ todotitle, tododescription })
});

export const createNewTodo = (title, description) => {
  return {
    ...canCreateNewTodo(title, description),
  };
};
