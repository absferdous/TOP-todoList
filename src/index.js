import "./styles.css";
// import "./";
import { addTitleBtn, titleInputBox, todoDescription } from "./domelements";
import { createNewTodo } from "./addTodos";
import { renderTodo } from "./renderTodo";

const todoArray = [];
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

  // console.log(todoArray);
});

// export const storeTodo = (todo) => {
//   const todolistArray = [];
//   todolistArray.push(todo);
//   console.log("from storeTodo function", todolistArray);
//   return todolistArray;
// };
