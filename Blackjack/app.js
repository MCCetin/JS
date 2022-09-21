let firstCard
let secondCard=getRandomInt(2,11)
let cards=[]
let sum
let hasBlackJack=false
let isAlive=true;
let pEl=document.getElementById("p-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function startGame(){
   if(isAlive && !hasBlackJack){
    firstCard=getRandomInt(2,11)
    secondCard=getRandomInt(2,11)
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()     
   }
}

function renderGame(){
    sum=sumCards()
    cardsEl.textContent="Cards: "
    sumEl.textContent="Sum: "
   for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
   }
    sumEl.textContent+=sum
    if(sum<21){
        message="Do you want to draw a new card?"
    }
    else if(sum === 21){
        message="BLACKJACK!"
        hasBlackJack=true
    }
    else{
        message="Game Over!"
        isAlive=false
    }
    pEl.innerText=message
}

function newCard(){
    if(!hasBlackJack && isAlive){
        let newCard=getRandomInt(2,11)
        cards.push(newCard)
        renderGame()
    }
}

function sumCards(){
    let sum=0
    for(let i=0;i<cards.length;i++){
        sum+=cards[i]
    }
    return sum
}

function getRandomInt(min , max){
    return Math.floor(Math.random()*(max-min))+min
}

