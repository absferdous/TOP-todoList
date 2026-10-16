import "./styles.css";
// import "./";
import { addTitleBtn, titleInputBox, todoDescription } from "./domelements";
import { createNewTodo } from "./addTodos";
import { renderTodo } from "./renderTodo";

export const todoArray = JSON.parse(localStorage.getItem("todos")) || [];
export const completedTodos =
  JSON.parse(localStorage.getItem("completedTodo")) || [];
renderTodo(todoArray);
addTitleBtn.addEventListener("click", (e) => {
  let title = titleInputBox.value.trim();

  let description = todoDescription.value.trim();
  e.stopPropagation();
  if (title) {
    const newtodo = createNewTodo(title, description);
    todoArray.push(newtodo);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    renderTodo(todoArray);
    titleInputBox.value = "";
    todoDescription.value = "";
    titleInputBox.focus();
  } else {
    alert("add something");
  }

  // todoDescription.focus();

  console.log("todoarray after add btn is clicked", todoArray);
});
