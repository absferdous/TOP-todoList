import "./styles.css";
// import "./";
import { addTitleBtn, titleInputBox, todoDescription } from "./domelements";
import { createNewTodo } from "./addTodos";
import { renderTodo } from "./renderTodo";

export const todoArray = [];
addTitleBtn.addEventListener("click", (e) => {
  let title = titleInputBox.value.trim();

  let description = todoDescription.value.trim();
  e.stopPropagation();
  const newtodo = createNewTodo(title, description);
  todoArray.push(newtodo);
  renderTodo(todoArray);
  titleInputBox.value = "";
  todoDescription.value = "";
  titleInputBox.focus();
  // todoDescription.focus();

  console.log("todoarray after add btn is clicked", todoArray);
});
