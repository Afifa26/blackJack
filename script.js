//Step-1: Create a Variable first card and second card
// Set their values to a random number
let firstCard=2
let secondCard=10
//array=ordered list of an item
//step after renderGame
let cards=[firstCard,secondCard]
// Create a variable and set its value to first+second
let sum=firstCard+secondCard
//step-4:
let isALive=true// Initially player is in the game
//step-3:
let hasBlackJack=false//Initially keep a var has blackjack as false
let message="";
let messageEl=document.getElementById("message-el")//save the p in a vae
let sumEl=document.getElementById("sum-el") //below line works the same
//let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
function startGame(){//html has onlcick start game so we are still using this function and calling new function, as it was sematically not lookig good to call start game funct again n again
    renderGame();
}
function renderGame(){// Initiailly it was start game but later changed
    sumEl.textContent="Sum : "+sum 
    cardsEl.textContent="Cards : " + cards[0] +","+ cards[1]
   //step-2:
    if(sum<21){
        message="Do you want to draw a new card?"
    }
    else if (sum===21) {
        message="Woohoo! You got a Black Jack!"
        
    } else {
        message="You're out of this game!"
        isALive=false//player lost step-4
    }
    messageEl.textContent=message;
}
// This part of code is used when your sum is <21
//Every time you click on new card, some value between 2-11 will be added to sum
function newCard(){
    //Draw a new card and assign some value btw (2-11)
    let card=7;
    //Add the new card to sum var
    sum += card;
    //call startGame
    renderGame();

}