let todos = getFromLocalStorage();
const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("liveToastBtn");
const ulEl = document.getElementById("list");

inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addBtn.click();
    }
});


renderTodos();
addBtn.addEventListener("click", addTodo);

function addTodo() {
    if (inputEl.value !== "") {
        const todo = {
            id: Date.now(),
            name: inputEl.value
        }
        todos.push(todo);
        inputEl.value = "";
        addToLocalStorage();
        renderTodos();
    }
}

function renderTodos() {
    ulEl.innerHTML = "";
    todos.forEach(element => {
        let li = document.createElement("li")
        li.innerHTML = `${element.name}
            <span class="material-symbols-outlined close-icon">
            close
            </span>
            `
        li.addEventListener("click", () => {
            li.classList.toggle("checked");
        })
        let icon = li.childNodes[1];
        icon.addEventListener("click", () => {
            li.classList.add("fall");
            const result = todos.filter(todo => todo.id !== element.id)
            todos = result;
            addToLocalStorage();
        })
        ulEl.append(li)
    });
}

function getFromLocalStorage() {
    const localStorageTodo = localStorage.getItem("todos");
    return JSON.parse(localStorageTodo);
}

function addToLocalStorage() {
    return localStorage.setItem("todos", JSON.stringify(todos));
}








