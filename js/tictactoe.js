window.onload = function(){
    console.log("this is the it")
    var startButton = document.getElementById('start');
    // var gameBoard = document.getElementById('game'); //identify the game id
    // gameBoard.innerHTML = " ";
	startButton.onclick = function() {
		start();
	}
}
var tiles = document.getElementsByClassName('box')
possibleAnswers = []
var player1 = document.getElementById("Player1")
var player2 = document.getElementById("Player2")

function start(){
	// console.log(tiles) //the tiles form an array
    for (var i = 0; i < tiles.length; i++){
    	tiles[i].addEventListener('click', function(){
    		whenClicked()
    	})
    }
}
function whenClicked(){
	
}

function gameOver(){
winCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], 
			  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
			  [0, 4, 8], [2, 4, 6]]
 if(??? === winCombos[i]){
 	alert("Game Over, " +  + "wins")
 }
			}