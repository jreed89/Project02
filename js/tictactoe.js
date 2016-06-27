window.onload = function(){
    console.log("this is the it")
    var startButton = document.getElementById('start');
    // var gameBoard = document.getElementById('game'); //identify the game id
    // gameBoard.innerHTML = " ";
	// startButton.onclick = function() {
	// }
		start();
}
var tiles = document.getElementsByClassName('box')
possibleAnswers = []
var player1 = document.getElementById("Player1")
var player2 = document.getElementById("Player2")

function start(){
	// console.log(tiles) //the tiles form an array
    for (var i = 0; i < tiles.length; i++){
    	tiles[i].addEventListener('click', function(){
    		// console.log(this) //shows me the tiles tag
    		Clicked(this) //when each tile is clicked it will run this function
    	})
    }
}
clicked = 0;
var letterX = "<img src=https://zengaming.zendesk.com/system/photos/8507/2389/avatar-1452001476.jpg>";
var letterO = "<img src=http://ecx.images-amazon.com/images/I/41kZo9j0CeL._AC_UL115_.jpg>";
function Clicked(box){
	console.log(box) // the tile that is being clicked on 
	console.log(clicked) //the number of clicks before click
		clicked += 1; // add number of clicks by 1 everytime a tile is clicked
	console.log(clicked) // how many clicks there are after the click
		if( clicked %2 === 0){ //first click will be 1 which will cut to the else stament and display X
			box.innerHTML = letterO;
		} else {
			box.innerHTML = letterX;
		}
}

// function gameOver(){
// winCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], 
// 			  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
// 			  [0, 4, 8], [2, 4, 6]]
//  if(??? === winCombos[i]){
//  	alert("Game Over, " +  + "wins")
//  }
// 			}