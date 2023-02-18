let taskDOM = document.querySelector("#task");
/******************* DOM Object *******************/
let addBtnDOM = document.querySelector("#addBtn");
let listDOM = document.querySelector("#list");
let deleteBtnDOM = document.querySelector(".delete");

/******************* Listeners *******************/
listDOM.addEventListener("click", changeTaskStatus);
taskDOM.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    newElement();
  }
});
/******************* Functions *******************/
function newElement() {
  if (taskDOM.value === "") {
    $("#liveToastError").toast("show");
  } else {
    const taskText = taskDOM.value;
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${taskText} <span class="delete" onclick="deleteTask(this.parentElement)">x</span>`;
    liDOM.classList.add("list-item");
    listDOM.append(liDOM);
    taskDOM.value = "";
    $("#liveToastSuccess").toast("show");
  }
}

function changeTaskStatus(e) {
  e.target.classList.toggle("checked");
}

function deleteTask(task) {
  listDOM.removeChild(task);
}
