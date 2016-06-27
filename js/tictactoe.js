window.onload = function(){
    console.log("this is the it")
    var startButton = document.getElementById('start');
	startButton.onclick = function() {
		start();
	}
}

function start(){
    alert("there we go")
}