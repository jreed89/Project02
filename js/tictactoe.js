window.onload = function(){
    console.log("this is the it")
    	var beginName = document.getElementById("start"); 
    	beginName.onclick = function(){ //when "lets get started" button is clicked, 
    	createAddName()
    	}
		start();
}


var arrayX = []
var arrayO = []
var tiles = document.getElementsByClassName('box')
var player1 = document.getElementById("Player1")
var player2 = document.getElementById("Player2")


function createAddName(){
	var startButton = document.getElementById('start');
	var name = document.getElementById('input-container')
	var nameButton = document.createElement('button')
	var nameInput = document.createElement('input')
	nameInput.setAttribute('id', "input-box")
	nameInput.setAttribute('type', "text")
	nameButton.setAttribute('id', "submit")
	nameButton.innerHTML = "NAME";
	name.appendChild(nameInput)
	name.appendChild(nameButton)
}

function addName(){
	// var $myButton = $('#submit');

 //  $($myButton).click(function(event) {
 //    event.preventDefault(); //stops the page from reloading when clicked
 //    var $box = $('input'); //makes a variable 
 //    addtoDo($box.val());
 //    $box.val(""); //reset after it types 
 //  });
  
 //  var $toDo = $('#to-do-list');
 //  var addtoDo = function(task){
 //    var newTask = document.createElement('div');//tried using the jQuery method $('<div></div>')
 //    newTask.innerHTML = task;                   // or ('<div')
 //    $toDo[0].appendChild(newTask);
 //  };
}

function start(){
	// console.log(tiles) //the tiles form an array
    for (var i = 0; i < tiles.length; i++){
    	tiles[i].addEventListener('click', function(){
    		// console.log(this) //shows me the tiles 
    		whenClicked(this) //when each tile is clicked it will run this function
    	})
    }
}





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

}

// function gameOver(){
// winCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], 
// 			  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
// 			  [0, 4, 8], [2, 4, 6]]
//  if(??? === winCombos[i]){
//  	alert("Game Over, " +  + "wins")
//  }
// 			}