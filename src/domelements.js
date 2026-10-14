export const titleInputBox = document.querySelector("#title-input");
export const addTitleBtn = document.querySelector("#title-btn");
export const todoDescription = document.querySelector("#description");
export const mainContianer = document.querySelector(".container");
export const editBtn = document.querySelector("#edit-btn");
export const listcontainer = document.querySelector("list-container");
export const addNote = document.querySelector("#note-btn");
export const addBtncontainer = document.querySelector(".add-button-container");

export const createBtn = (className, text, callback) => {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.textContent = text;
  btn.addEventListener(
    "click",
    // e.stopPropagation();
    callback,
  );
  return btn;
};
// export const addBtncontainer = document.querySelector(".add-button-container");

export const createSingleTodoUi = () => {
  console.log("createSingleTodoUi function callled");
  const container = document.createElement("div");
  container.classList.add("todo-container");

  const deleteBtn = createBtn("del-single-todo", "delete", () => {
    console.log("delete button created from createSingleTodoUi");
  });
  const editBtn = createBtn("edit-single-todo", "edit", () => {
    console.log("edit button created from createSingleTodoUi");
  });

  container.append(editBtn, deleteBtn);
};

export const createUL = () => {
  const ul = document.createElement("ul");
  ul.classList.add("todo-list-parent");
  return ul;
};

export const createInputGroup = () => {
  const inputBar = document.createElement("input");
  inputBar.classList.add("input-bar-edit");
  inputBar.id = "title-input";
  const saveBtn = document.createElement("button");
  saveBtn.classList.add("save-btn");
  saveBtn.textContent = "save";
  saveBtn.id = "save-btn";
  const descbar = document.createElement("textarea");
  descbar.classList.add("descbar-edit");
  descbar.id = "description";

  mainContianer.append(inputBar, saveBtn, descbar);
  return {
    inputBar,
    saveBtn,
    descbar,
  };
};

export const createTickmark = () => {
  const tickBtn = document.createElement("btn");
  tickBtn.classList.add("tickBtn");
  tickBtn.textContent = tick;
};
