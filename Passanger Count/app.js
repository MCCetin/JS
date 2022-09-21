
let countEl=document.getElementById("count")
let saveEl= document.getElementById("storage")
let count=0




function Increment(){
    countEl.textContent=++count
}

function save(){
    let countStr= count + " - "
    saveEl.textContent+=countStr
    reset()
}


function reset(){
    count=0
    countEl.innerText=0
}
