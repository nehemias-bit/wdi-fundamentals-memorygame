const cards = [{
rank: "queen",
suit: "hearts",
cardImage: 	"images/queen-of-hearts.png"
}, {
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"   
}, {
rank: "king",
suit: "hearts",
cardImage: 	"images/king-of-hearts.png"
}, {
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}];

let cardsInPlay = [];

// function resetGame() { 
//     document.getElementById('game-board').reset();
// }

function flipCard() {
    let cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if(cardsInPlay.length === 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
        }
        else{
            alert("Sorry, try again.");
        }
    }
    this.setAttribute('src', cards[cardId].cardImage);
};

function createBoard() {
    for(let i = 0; i < cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
    // let game = document.getElementById('game-board');
    // game.querySelector('.resetButton').addEventListener('click', resetGame);
};

// document.getElementsByClassName('resetButton').onclick = function (){
//     document.getElementById('game-board').reset();
// }

createBoard();
// resetGame();



//The way I implemented the reset button is not the way you wanted me to do it 
//because I didn't use javascript. I really just couldn't figure it out. I also didn't want 
//to hand in the project without a working reset button so I went ahead and just made it
//work the cheap way using HTML. I left my attempts at making the reset button with javascript 
// commented out in this js file so that we can maybe discuss it in the future.