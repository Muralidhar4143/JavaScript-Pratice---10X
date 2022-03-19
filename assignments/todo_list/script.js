let todoList;
featchItem();
// EventListener for All todoList button
document.querySelector("#b1").addEventListener("click", () => {
    loadItems(todoList);
});
// EventListener for Completed todoList button
document.querySelector("#b2").addEventListener("click", () => {
    let completedTodoList = todoList.filter(ele => ele.completed);
    loadItems(completedTodoList);
});
// // EventListener for Pending todoList button
document.querySelector("#b3").addEventListener("click", () => {
    let pendingTodoList = todoList.filter(ele => !ele.completed);
    loadItems(pendingTodoList);
});
// Featching data from api
function featchItem() {
    let todos = new XMLHttpRequest;
    todos.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    todos.onload = function () {
        todoList = JSON.parse(this.responseText);
        loadItems(todoList);
    }
    todos.send();
}
// Loading data to webPage
function loadItems(list) {
    let todoArea = document.querySelector("#todoArea");
    let html = "";
    list.forEach(ele => {
        let val
        if (ele.completed) {
            val = "Completed"
        }
        else {
            val = "Pending"
        }
        html += `<div class="card" style="width: 17rem; margin: 7px">
        <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            <p class="card-text">User Id :  ${ele.userId}</p>
            <p class="card-text">Id :  ${ele.id}</p>
            <p class="card-text">Status : ${val}</p>
        </div>
        </div>`;
    });
    todoArea.innerHTML = html;
}