const btn = document.getElementById("btn");
const text = document.getElementById("text");
const tasksBox = document.getElementById("tasklistbox");
let delElButton = document.querySelectorAll(".fa-times");
const deleteAllBtn = document.querySelector("#deleteall");


btn.addEventListener("click", addElement);
deleteAllBtn.addEventListener("click", deleteAllElements);

function addElement() {
    if (text.value == "")
        alert("Please write something..");
    else {
        var li = document.createElement("li");
        li.innerText = text.value;
        var i = document.createElement("i");
        i.classList = "fas fa-times";
        li.appendChild(i);
        tasksBox.appendChild(li);
        text.value = "";
        delElButton = document.querySelectorAll(".fa-times");
        for (var i = 0; i < delElButton.length; i++) {
            delElButton[i].addEventListener("click", delElement);
        }
    }
}

function delElement() {
    var choice = confirm("Are you sure?");
    if (choice == true) {
        var removed = this.parentElement;
        removed.remove();
    }
}

function deleteAllElements() {
    var choice = confirm("Do you want to remove all?");
    if (choice == true) {
        var removed = document.querySelectorAll("li");
        for (var j = 0; j < removed.length; j++) {
            removed[j].remove();
        }
    }
}