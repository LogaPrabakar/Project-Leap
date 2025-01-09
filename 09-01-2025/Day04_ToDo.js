var listofData = [];

// DOM Elements
var input = document.getElementById("input");
var todo = document.getElementById("todo");
var button = document.getElementById("button");
button.onclick = addItem;
function addItem() {
    if (input.value.trim() !== "") {
        listofData.push(input.value.trim());
        input.value = "";
        showList();
    }
}
function showList() {
    todo.innerHTML = "";
    listofData.forEach(function (item, index) {
        var li = document.createElement("li");
        li.textContent = item;
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.marginRight = "10px";
        editBtn.onclick = function () {
            editItem(index);
        };
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            deleteItem(index);
        };
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todo.appendChild(li);
    });
}
function editItem(index) {
    var newValue = prompt("Please insert new value", listofData[index]);
    if (newValue !== null && newValue.trim() !== "") {
        listofData[index] = newValue.trim();
        showList();
    }
}
function deleteItem(index) {
    listofData.splice(index, 1);
    showList();
}