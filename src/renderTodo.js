// import { todoArray } from ".";
import { todoArray } from ".";
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
    const todoBtnContainer = document.createElement("div");
    todoBtnContainer.classList.add("todo-btn-container");
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
      // handleDelete(item.id, currentTodo);

      let fitteredArray = currentTodo.filter((current) => {
        return current.id !== item.id;
      });

      console.log("value from maintodoarray after every click", todoArray);

      renderTodo(fitteredArray);
      todoArray.length = 0;
      todoArray.push(...fitteredArray);
      // todoArray = fitteredArray;
    });

    console.log("editing", isEditing);
    const editBtn = createBtn("editBtn", "edit", () => {
      handleEdit(item.id, isEditing, todoContainer, currentTodo);
    });
    todoBtnContainer.append(deleteBtn, editBtn);
    todoList.append(todoBtnContainer);
    todoContainer.append(todoList);
    // ul.append(todoList);
    // listcontainer.append(ul);
    mainContianer.append(todoContainer);
    return todoList;
  });
  console.log("render function callled", renderArray);
  return currentTodo;

  // const { title, description, id } = todo;
};

// const handleDelete = (id, arr) => {
//   const index = arr.findIndex((item) => item.id === item);
//   // alert("dlete");
//   console.log("from handle delete", arr);

//   if (index !== -1) {
//     arr.splice(index, 1);
//   }

//   const filteredArray = arr.filter((item) => {
//     return item.id !== id;
//   });

//   renderTodo(filteredArray);
//   console.log("current", arr);
//   console.log("filteredArray", filteredArray);
//   // return filteredArray;
// };
const handleEdit = (id, editingSatte, element, arr) => {
  let isEditing = editingSatte;
  let editingId = id;
  let editingElement = element;
  let editedArray;
  let currentTitle;
  let currentDesc;
  console.log("element", editingElement);

  const inputGroup = createInputGroup();
  // editingElement.replaceWith(inputGroup);
  isEditing = true;
  if (isEditing) {
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
