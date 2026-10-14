import "./styles.css";
// import "./";
import { addTitleBtn, titleInputBox, todoDescription } from "./domelements";
import { createNewTodo } from "./addTodos";
import { renderTodo } from "./renderTodo";

export const todoArray = [];

export const populateStorage = () => {
  localStorage.setItem("title", titleInputBox.value);
  localStorage.setItem("description", todoDescription.value);
  // localStorage.setItem('completed',titleInputBox.value);
  // localStorage.setItem('title',titleInputBox.value);
};
if (!localStorage.getItem("title")) {
  populateStorage();
} else {
  setValues();
}
export const setValues = () => {
  let currentitle = localStorage.getItem("title");
  let currentDescription = localStorage.getItem("description");

  titleInputBox.value = currentitle;
  todoDescription.value = currentDescription;

  console.log(`[LocalStorage Set] Key: "${currentitle}" | Value:`);
};

addTitleBtn.addEventListener("click", (e) => {
  let title = titleInputBox.value.trim();

  let description = todoDescription.value.trim();
  e.stopPropagation();
  const newtodo = createNewTodo(title, description);
  setValues();
  todoArray.push(newtodo);
  renderTodo(todoArray);
  titleInputBox.value = "";
  todoDescription.value = "";
  titleInputBox.focus();
  // todoDescription.focus();

  console.log("todoarray after add btn is clicked", todoArray);
});
