// import { todoArray } from ".";
import {
  createBtn,
  createInputGroup,
  createSingleTodoUi,
  createUL,
  listcontainer,
  mainContianer,
  titleInputBox,
} from "./domelements";

let isEditing = false;
export const renderTodo = (arr) => {
  let currentTodo;
  mainContianer.innerHTML = "";

  currentTodo = arr;

  console.log("current todo list from the renderTodo", currentTodo);

  let renderArray = currentTodo.map((item) => {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    // const id = id;
    const todoList = document.createElement("li");
    todoList.classList.add("todo-list");

    const todotitlecontent = document.createElement("p");
    todotitlecontent.classList.add("title-content");
    todotitlecontent.textContent = item.title;

    const todoDescriptionContent = document.createElement("p");
    todoDescriptionContent.classList.add("desc-content");
    if (item.description) {
      todoDescriptionContent.textContent = item.description;
    }

    todoList.append(todotitlecontent, todoDescriptionContent);

    const deleteBtn = createBtn("deleteBtn", "delete", () => {
      handleDelete(item.id, currentTodo);
    });

    console.log("editing", isEditing);
    const editBtn = createBtn("editBtn", "edit", () => {
      handleEdit(item.id, isEditing, todoList, currentTodo);
    });

    todoList.append(deleteBtn, editBtn);
    // ul.append(todoList);
    // listcontainer.append(ul);
    mainContianer.append(todoList);
    return todoList;
  });
  console.log("render function callled", renderArray);
  return renderArray;

  // const { title, description, id } = todo;
};

const handleDelete = (id, arr) => {
  // alert("dlete");
  console.log("from handle delete", arr);

  const filteredArray = arr.filter((item) => {
    return item.id !== id;
  });

  renderTodo(filteredArray);
  console.log("current", arr);
  console.log("filteredArray", filteredArray);
  return filteredArray;
};
const handleEdit = (id, editingSatte, element, arr) => {
  let isEditing = editingSatte;
  let editingId = id;
  let editingElement = element;
  let editedArray;
  let currentTitle;
  let currentDesc;
  console.log("element", editingElement);

  const inputGroup = createInputGroup();
  isEditing = true;
  if (isEditing) {
    // editingElement.replaceWith(inputGroup);
    editedArray = arr.map((item) => {
      if (editingId === item.id) {
        inputGroup.inputBar.value = item.title;
        inputGroup.descbar.value = item.description;

        currentTitle = inputGroup.inputBar.value;
        currentDesc = inputGroup.descbar.value;
        // item.title = inputGroup.inputBar.value;
        // item.description = inputGroup.descbar.value;
      }
      return item;
      // return editedArray;
    });

    inputGroup.saveBtn.addEventListener("click", (e) => {
      // inputGroup.saveBtn.dataset.itemId = item.id;

      editedArray = editedArray.map((item) => {
        // const id = e.currentTarget.dataset.itemId;
        if (editingId === item.id) {
          return {
            ...item,
            title: inputGroup.inputBar.value,

            description: inputGroup.descbar.value,
          };
        }
        return item;
      });

      alert("saved");
      isEditing = false;
      if (!isEditing) {
        renderTodo(editedArray);
        inputGroup.descbar.style.display = "none";
        inputGroup.inputBar.style.display = "none";
        inputGroup.saveBtn.style.display = "none";
      }
      // renderTodo(editedArray);
      console.log("editarray from handle save", editedArray);
      // renderTodo(editedArray);
      console.log("is editing from savebtn", isEditing);
    });
    // const editedtitle = document.querySelector(".input-bar-edit");
    console.log("editedArray", editedArray);
  }
  console.log("handleedit clicked", isEditing);
  return editedArray;
};

// createInputGroup();
