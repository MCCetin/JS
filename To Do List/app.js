let todo = [];
const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("liveToastBtn");
const ulEl = document.getElementById("list");

inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addBtn.click();
    }
});

ulEl.addEventListener("click", (e) => {
    const listEl = e.target;
    listEl.classList.toggle("checked");
    if (listEl.classList[0] === "material-symbols-outlined") {
        listEl.parentElement.classList.add("fall");
    }
})


addBtn.addEventListener("click", () => {
    if (!isEmpty(inputEl.value)) {
        todo.push(inputEl.value);
    }
    else {
        alert("You cannot add empty object!");
    }
    add();
    inputEl.value = ""
});

function add() {
    let div = document.createElement("div")
    div.innerHTML = `
        <li class="list-item">${todo[todo.length - 1]}</li>
        <span class="material-symbols-outlined close-icon">close</span>
    `
    div.classList.add("todo");
    ulEl.append(div)
}

function isEmpty(str) {
    return !str.trim().length;
}



