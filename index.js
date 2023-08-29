var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!"
}
//else if Player 2 wins
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 wins!"
}
//else if it's a draw
else {
    document.querySelector("h1").textContent = "Draw"
}



// var player1 = Math.floor(Math.random() * 6) + 1;
// console.log(player1);
// var player2 = Math.floor(Math.random() * 6) + 1;
// console.log(player2);

// function resultDisplay() {
//         if(player1 > player2) {
//             return("Player 1 Won!")
//         } 
//         else if(player1 < player2) {
//             return("Player 2 Won!");
//         }
//         else {
//             return("It,s a draw");
//         }

// }


// function dice1Png() {
//     if(player1 === 1) {
//         return("images/dice1.png");
//     }
//     else if(player1 === 2) {
//         return("images/dice2.png");
//     }
//     else if(player1 === 3) {
//         return("images/dice3.png");
//     }
//     else if(player1 === 4) {
//         return("images/dice4.png");
//     }
//     else if(player1 === 5) {
//         return("images/dice5.png");
//     }
//     else {
//         return("images/dice6.png");
//     }
// }

// function dice2Png() {
//     if(player2 === 1) {
//         return("images/dice1.png");
//     }
//     else if(player2 === 2) {
//         return("images/dice2.png");
//     }
//     else if(player2 === 3) {
//         return("images/dice3.png");
//     }
//     else if(player2 === 4) {
//         return("images/dice4.png");
//     }
//     else if(player2 === 5) {
//         return("images/dice5.png");
//     }
//     else {
//         return("images/dice6.png");
//     }
// }


// document.querySelector("h1").textContent = resultDisplay();
// document.querySelector(".img1").setAttribute("src", dice1Png());
// document.querySelector(".img2").setAttribute("src", dice2Png());

