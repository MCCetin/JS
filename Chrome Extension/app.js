let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-button")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-button")
const savetabBtn = document.getElementById("savetab-button")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}
savetabBtn.addEventListener("click", function () {
    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let obj={
            url:tabs[0].url,
            favIconUrl:tabs[0].favIconUrl
        }
        myLeads.push(obj)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        renderLeads()
    })

})

inputBtn.addEventListener("click", function () {
    let obj={
        url:inputEl.value,
        favIconUrl:'https://cdn-icons-png.flaticon.com/128/1828/1828911.png'
    }
    myLeads.push(obj)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputBtn.click();
  }
});

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    myLeads.forEach(element => {
        // let li=document.createElement("li")
        // li.textContent=element
        // ulEl.append(li)
        listItems += `<li>
            <img src='${element.favIconUrl}'/>
            <a target='_blank' href='${element.url}'>
                ${element.url}
            </a>
        </li>`
    });

    ulEl.innerHTML = listItems
}




