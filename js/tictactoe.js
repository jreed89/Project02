window.onload = function(){
    console.log("this is the it")
    	var beginName = document.getElementById("start"); 
    	beginName.onclick = function(){ //when "lets get started" button is clicked,
    	addName()
    	}
		
}

//this is where all of my "universal variables" will go, access them when needed 
var arrayX = []
var arrayO = []
winCombos  = ['1', '2', '3', 
			  '4', '5', '6', 
			  '7', '8', '9']
// winCombos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], 
// 			  [1, 4, 7], [2, 5, 8], [3, 6, 9], 
// 			  [1, 5, 9], [3, 5, 7]]
var tiles = document.getElementsByClassName('box')
var player1 = document.getElementById("Player1")
var player2 = document.getElementById("Player2")
var winp1 = document.getElementById("Player1_Wins")
var winp2 = document.getElementById("Player2_Wins")
console.log(tiles)
//create the html that will hold where to enter your name


//creating the add name input field
// function createAddName(){
// 	var startButton = document.getElementById('start');
// 	var name = document.getElementById('input-container')
// 	// var nameButton = document.createElement('button')
// 	var nameInput = document.createElement('input')
// 	nameInput.setAttribute('id', "input-box")
// 	// nameInput.setAttribute('id', "input-box")
// 	// nameInput.setAttribute('type', "text")
// 	// nameButton.setAttribute('id', "submit")
// 	// nameButton.innerHTML = "NAME";
// 	name.appendChild(nameInput)
// 	// name.appendChild(nameButton)
// 	addName()
// }
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
   //  input.style.display = "none";
  	beginName.style.display = "none";
  	alert("Your turn " + player1.innerHTML)
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
	// tiles.innerHTML = " "
    for (var i = 0; i < tiles.length; i++){
    	tiles[i].addEventListener('click', function(){
    		// console.log(this) //shows me the tiles
    		// console.log(this.indexOf())
    		whenClicked(this) //when each tile is clicked it will run this function
    	})

    }
}

var letterX = "<img src=http://www.clker.com/cliparts/e/0/f/4/12428125621652493290X_mark_18x18_02.svg.hi.png>";
var letterO = "<img src=https://4.bp.blogspot.com/-eGTrVsnjTKU/Vtv0gRps6JI/AAAAAAAAAFI/GHuO3wjcL3U/s1600/player2.png>";
var clicked = 0;
function whenClicked(box){
	// for (var i = 0; i < tiles.length; i++){
 //    	tiles[i].addEventListener('click', function()
	// console.log(box) // the tile that is being clicked on
	// console.log(box.dataset.value) the v
	if(!box.innerHTML){
		if( clicked %2 === 0){ //first click will be 1 which will cut to the else stament and display X
			box.innerHTML = letterX;
			arrayX.push(box.dataset.value) // putting the data-value in the arrayX as a string value
			console.log(arrayX) //
			checkForWin()
			clicked += 1;
		} else {
			box.innerHTML = letterO;
			arrayO.push(box.dataset.value) // putting the data-value in the array0 as a string value
			console.log(arrayO) //
			checkForWin()
			clicked += 1;
		}
		// console.log(clicked) //the number of clicks before click
		// clicked += 1; // add number of clicks by 1 everytime a tile is clicked
		// console.log(clicked) // how many clicks there are after the click
	} 
	
}
player1Wins = 0;
player2Wins = 0;
tie = 0;
function checkForWin(){
	if (
		arrayX.includes("1") && arrayX.includes("2") && arrayX.includes("3") ||
		arrayX.includes("4") && arrayX.includes("5") && arrayX.includes("6") ||
		arrayX.includes("7") && arrayX.includes("8") && arrayX.includes("9") ||
		arrayX.includes("1") && arrayX.includes("4") && arrayX.includes("7") ||
		arrayX.includes("2") && arrayX.includes("5") && arrayX.includes("8") ||
		arrayX.includes("3") && arrayX.includes("6") && arrayX.includes("9") ||
		arrayX.includes("1") && arrayX.includes("5") && arrayX.includes("9") ||
		arrayX.includes("3") && arrayX.includes("5") && arrayX.includes("7") ) {
			alert( player1.innerHTML + " is the WINNER");
			winp1.innerHTML = "Wins: " + (player1Wins += 1);
			resetGame()
		} else if (
		arrayO.includes("1") && arrayO.includes("2") && arrayO.includes("3") ||
		arrayO.includes("4") && arrayO.includes("5") && arrayO.includes("6") ||
		arrayO.includes("7") && arrayO.includes("8") && arrayO.includes("9") ||
		arrayO.includes("1") && arrayO.includes("4") && arrayO.includes("7") ||
		arrayO.includes("2") && arrayO.includes("5") && arrayO.includes("8") ||
		arrayO.includes("3") && arrayO.includes("6") && arrayO.includes("9") ||
		arrayO.includes("1") && arrayO.includes("5") && arrayO.includes("9") ||
		arrayO.includes("3") && arrayO.includes("5") && arrayO.includes("7")) {
			alert( player2.innerHTML + " is the WINNER");
			winp2.innerHTML = "Wins: " + (player2Wins += 1);
			resetGame();
	} else if (clicked == 8) {
		alert("all tiles clicked")
		resetGame();
	}
	
}
// for (var i = 0; i < winCombos.length; i++){
// 		for (var j = 0; j < arrayX.length; i++) {
// 			if (winCombos[i] == arrayX[j]) {
// 				alert("win")
// 			}
// 		}
// 	}
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


function resetGame(){
	for (var i = 0; i < tiles.length; i++){
	tiles[i].innerHTML = "";
}
clicked = 0;
arrayO = [];
arrayX = [];
start();
}


