import { addTitleBtn, titleInputBox, todoDescription } from "./domelements";

export const canCreateNewTodo = (title = "", description = "") => ({
  title,

  description,

  id: generateUUID(),

  // console.log({ todotitle, tododescription })
});

export const createNewTodo = (title, description) => {
  return {
    ...canCreateNewTodo(title, description),
  };
};

function generateUUID() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for non-secure HTTP contexts
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}
