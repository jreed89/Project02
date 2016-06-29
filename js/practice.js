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
	// var indexX = this.tiles.indexOf(box);
	// console.log(indexX);
// while (indexX != -1) {
// 	arrayX
// }

var letterX = "<img src=https://zengaming.zendesk.com/system/photos/8507/2389/avatar-1452001476.jpg>";
var letterO = "<img src=http://ecx.images-amazon.com/images/I/41kZo9j0CeL._AC_UL115_.jpg>";
clicked = 0;
function whenClicked(box){
	console.log(box) // the tile that is being clicked on
	if(!box.innerHTML){
		if( clicked %2 === 0){ //first click will be 1 which will cut to the else stament and display X
			box.innerHTML = letterX;

		} else {
			box.innerHTML = letterO;
		}
		console.log(clicked) //the number of clicks before click
		clicked += 1; // add number of clicks by 1 everytime a tile is clicked
		console.log(clicked) // how many clicks there are after the click
		checkForWin();
	} else {
		alert('Already Clicked');
	}
	
}


function checkForWin(){

		// if ()
}

// function gameOver(){
// winCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], 
// 			  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
// 			  [0, 4, 8], [2, 4, 6]]
//  if(??? === winCombos[i]){
//  	alert("Game Over, " +  + "wins")
//  }
// 			}