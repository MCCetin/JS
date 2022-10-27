let todo = [];
const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("liveToastBtn");
const ulEl = document.getElementById("list");

inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    }
});


addBtn.addEventListener("click", function () {
    if (!isEmpty(inputEl.value)) {
        todo.push(inputEl.value);
    }
    else {
        alert("You cannot add empty object!");
    }
    renderToDo();
    inputEl.value = ""
});

function renderToDo() {
    let listItems = "";
    todo.forEach(element => {
        listItems += `<li class="list-item">${element}</li>`
    })
    ulEl.innerHTML = listItems
}

function isEmpty(str) {
    return !str.trim().length;
}

