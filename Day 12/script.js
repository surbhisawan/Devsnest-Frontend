inputtext = document.querySelector("#doMe");
addbtn = document.querySelector("#addbtn");
todolist = document.querySelector(".todolist");
// console.log(addbtn);

inputtext.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addbtn.click();
  }
});
const deletetodoitem = (item) => {
  let listtodel = item.target.parentNode;
  listtodel.remove();
  //   console.log(listtodel);
  storelocally();
};
const completetodoitem = (item) => {
  //   console.log(item);
  let listtomark = item.target.parentNode;
  // console.log(listtomark);
  listtomark.classList.add("completed");
  listtomark.firstChild.classList.add("completed");
  storelocally();
};

const createtodoitem = (item, status = false) => {
  containerTodo = document.createElement("div");
  containerTodo.classList.add("itemcontainer");
  todo = document.createElement("div");
  delbtn = document.createElement("button");
  delbtn.innerHTML = "Delete";
  compbtn = document.createElement("button");
  compbtn.innerHTML = "Completed";
  compbtn.classList.add("complete-btn");
  delbtn.classList.add("delete-btn");
  delbtn.addEventListener("click", deletetodoitem);
  compbtn.addEventListener("click", completetodoitem);
  todo.classList.add("todoitem");
  todo.innerHTML = item;

  if (status == "true") {
    todo.classList.add("completed");
    containerTodo.classList.add("completed");
  }
  containerTodo.append(todo);
  containerTodo.append(compbtn);
  containerTodo.append(delbtn);
  todolist.append(containerTodo);
};

const addtodolist = (e) => {
  if (inputtext.value == "") return;
  inputtext.focus();
  createtodoitem(inputtext.value);
  inputtext.value = "";
  storelocally();
};

const storelocally = () => {
  localStorage.clear();
  items = document.querySelectorAll(".itemcontainer");
  let cnt = 1;
  items.forEach((i) => {
    // console.log(i.firstChild.innerHTML);
    let status = i.classList.contains("completed");
    // console.log(status);
    let val = [`${i.firstChild.innerHTML}, ${status}`];
    localStorage.setItem(`item${cnt}`, val);
    cnt++;
  });
  console.log(items);
};

const showtodolist = () => {
  let listlength = localStorage.length;

  while (listlength) {
    let item = localStorage.getItem(`item${listlength}`);
    // console.log("item is", typeof item);
    let itemstr = item.split(", ");
    // let status = itemstr[1].slice(0);
    createtodoitem(itemstr[0], itemstr[1]);
    listlength--;
  }
};

showtodolist();
addbtn.addEventListener("click", addtodolist);