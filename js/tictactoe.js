window.onload = function(){
    console.log("this is the it")
    	var beginName = document.getElementById("start"); 
    	beginName.onclick = function(){ //when "lets get started" button is clicked,
    	createAddName()
    	}
		
}

//this is where all of my "universal variables" will go, access them when needed 
var arrayX = []
var arrayO = []
winCombos  = ['1', '2', '3', 
				 '4', '5', '6', 
				 '7', '8', '9']
// winCombos = [ ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], 
// 			  ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], 
// 			  ["1", "5", "9"], ["3", "5", "7"]]
// winCombos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], 
// 			  [1, 4, 7], [2, 5, 8], [3, 6, 9], 
// 			  [1, 5, 9], [3, 5, 7]]
var tiles = document.getElementsByClassName('box')
var player1 = document.getElementById("Player1")
var player2 = document.getElementById("Player2")
console.log(tiles)
//create the html that will hold where to enter your name
function createAddName(){
	var startButton = document.getElementById('start');
	var name = document.getElementById('input-container')
	// var nameButton = document.createElement('button')
	var nameInput = document.createElement('input')
	nameInput.setAttribute('id', "input-box")
	// nameInput.setAttribute('id', "input-box")
	// nameInput.setAttribute('type', "text")
	// nameButton.setAttribute('id', "submit")
	// nameButton.innerHTML = "NAME";
	name.appendChild(nameInput)
	// name.appendChild(nameButton)
	addName()
}
//Display Players Names in the proper fields and make start button and name input dissapear
//the game is activated
function addName(){
  var input = document.getElementById('input-box')
  var myButton = document.getElementById('submit') //the submit name button
  var beginName = document.getElementById("start"); //the start button
  // nameClick = 0;
  var retVal = prompt("Enter your name Player1 : ", "Player1 Name");
    player1.innerHTML = retVal;
  var retVal = prompt("Enter your name Player2: ", "Player2 Name");
    player2.innerHTML = retVal;
    input.style.display = "none";
  	beginName.style.display = "none";
  	alert("your turn Player 1")
  	start();
//////////////ANOTHER FORMULA TO MAKE A PLAYERS NAMES/////////////////////////
  // myButton.addEventListener('click', function(){
  // 	var input = document.getElementById('input-box')
 // if (nameClick %2 === 0){
  	// 	player1.innerHTML = " ";
  	// 	player1.innerHTML = player1.innerHTML + input.value;
  	// 	nameClick += 1;
  	// 	alert("enter your name Player 2")
  	// 	input.value = " "
  	// } else {
  	// 	player2.innerHTML = " ";
  	// 	player2.innerHTML = player2.innerHTML + input.value;
  	// 	myButton.style.display = "none";
  	// 	input.style.display = "none";
  	// 	beginName.style.display = "none";
  	// 	start();

  // 	}
  // })

}

function start(){
	// console.log(tiles) //the tiles form an array
    for (var i = 0; i < tiles.length; i++){
    	tiles[i].addEventListener('click', function(){
    		// console.log(this) //shows me the tiles
    		// console.log(this.indexOf())
    		whenClicked(this) //when each tile is clicked it will run this function
    	})

    }
}

var letterX = "<img src=https://zengaming.zendesk.com/system/photos/8507/2389/avatar-1452001476.jpg>";
var letterO = "<img src=http://ecx.images-amazon.com/images/I/41kZo9j0CeL._AC_UL115_.jpg>";
clicked = 0;
function whenClicked(box){
	// console.log(box) // the tile that is being clicked on
	// console.log(box.dataset.value) the v
	if(!box.innerHTML){
		if( clicked %2 === 0){ //first click will be 1 which will cut to the else stament and display X
			box.innerHTML = letterX;
			arrayX.push(box.dataset.value) // putting the data-value in the arrayX as a string value
			console.log(arrayX) //
			checkForWin()
		} else {
			box.innerHTML = letterO;
			arrayO.push(box.dataset.value) // putting the data-value in the array0 as a string value
			console.log(arrayO) //
			checkForWin()
		}
		// console.log(clicked) //the number of clicks before click
		clicked += 1; // add number of clicks by 1 everytime a tile is clicked
		// console.log(clicked) // how many clicks there are after the click
	} else {
		alert('Already Clicked');
	}
	
}
function checkForWin(){
	// if (arrayX.includes(winCombos)){
	// 	alert("win")
	// }
	// console.log(winCombos[i])
	// console.log(winCombos[0])
	// console.log(arrayX[3])
	if (
		arrayX.includes("1") && arrayX.includes("2") && arrayX.includes("3") ||
		arrayX.includes("4") && arrayX.includes("5") && arrayX.includes("6") ||
		arrayX.includes("7") && arrayX.includes("8") && arrayX.includes("9") ||
		arrayX.includes("1") && arrayX.includes("4") && arrayX.includes("7") ||
		arrayX.includes("2") && arrayX.includes("5") && arrayX.includes("8") ||
		arrayX.includes("3") && arrayX.includes("6") && arrayX.includes("9") ||
		arrayX.includes("1") && arrayX.includes("5") && arrayX.includes("9") ||
		arrayX.includes("3") && arrayX.includes("5") && arrayX.includes("7") ) {
			alert( "Player1 Is the Truth");
		} else if (
		arrayO.includes("1") && arrayO.includes("2") && arrayO.includes("3") ||
		arrayO.includes("4") && arrayO.includes("5") && arrayO.includes("6") ||
		arrayO.includes("7") && arrayO.includes("8") && arrayO.includes("9") ||
		arrayO.includes("1") && arrayO.includes("4") && arrayO.includes("7") ||
		arrayO.includes("2") && arrayO.includes("5") && arrayO.includes("8") ||
		arrayO.includes("3") && arrayO.includes("6") && arrayO.includes("9") ||
		arrayO.includes("1") && arrayO.includes("5") && arrayO.includes("9") ||
		arrayO.includes("3") && arrayO.includes("5") && arrayO.includes("7")) {
		alert( "Player2 Is the Truth");
	}
	// for (var i = 0; i < winCombos.length; i++){
	// 	for (var j = 0; j < arrayX.length; i++) {
	// 		if (winCombos[i] == arrayX[j]) {
	// 			alert("win")
	// 		}
	// 	}
	// }
}
// 	// for (var i = 0; i < tiles.length; i++){
// 		if( arrayX == winCombos[0] || arrayX === winCombos[1] || arrayX === winCombos[2] || 
// 			arrayX === winCombos[3] || arrayX === winCombos[4] || arrayX === winCombos[5] || 
// 			arrayX === winCombos[6] || arrayX === winCombos[7] || arrayX === winCombos[8] ) {
//   			alert("checkForWin Player 1")		
// 	// arrayX check all numbers in arrayX if they are equal to anny winCombos, we have a winner
// 		} else if (arrayO === winCombos[0] || arrayO === winCombos[1] || arrayO === winCombos[2] || 
// 				   arrayO === winCombos[3] || arrayO === winCombos[4] || arrayO === winCombos[5] || 
// 				   arrayO === winCombos[6] || arrayO === winCombos[7] || arrayO === winCombos[8] ) {
// 			console.log("checkForWin Player 2")
// 	// }
// 		} 
// }

// function gameOver(){

//  if(??? === winCombos[i]){
//  	alert("Game Over, " +  + "wins")
//  }
// 			}