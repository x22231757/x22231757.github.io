function check(id_name){
	//Get the input from user
	var userGesture = String(document.getElementById(id_name).value);
	
	//Generate a choose a random gesture from the 3 available by computer:
	var computerOptions = ['Rock','Paper','Scissors'];
	var computerChoiceNumber = Math.floor(Math.random()*3);
	var computerChoice = String(computerOptions[computerChoiceNumber]);
	
	//Determine who won:
	if(userGesture === "Select Rock"){
		if(computerChoice === 'Rock'){
			document.getElementById("selection").innerHTML = "You " + userGesture + "! Computer Selected "+  computerChoice + " : Draw!"
			document.getElementById("selection").innerHTML +="<br></br><<button onClick='window.location.href=window.location.href'>Play Again</button>";
		}else if(computerChoice === 'Paper'){
			document.getElementById("selection").innerHTML = "You " + userGesture +"! Computer Selected " +  computerChoice + " : You Lost!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}else{
			document.getElementById("selection").innerHTML = "You " + userGesture + "! Computer Selected " +  computerChoice + " : You Won!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}
		
		
	}else if(userGesture === "Select Paper"){
		if(computerChoice === 'Rock'){
			document.getElementById("selection").innerHTML = "You " + userGesture + " Computer Selected Rock: You Won!!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}else if(computerChoice === 'Paper'){
			document.getElementById("selection").innerHTML = "You " + userGesture + " Computer Selected Paper: Draw!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}else{
			document.getElementById("selection").innerHTML = "You " + userGesture + " Computer Selected Scissors: You Lost!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}
		
		
	}else{// user selects scissors
		if(computerChoice === 'Rock'){
			document.getElementById("selection").innerHTML = "You " + userGesture + " Computer Selected Rock: You Lost!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}else if(computerChoice === 'Paper'){
			document.getElementById("selection").innerHTML = "You " + userGesture + " Computer Selected Paper: You Won!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}else{
			document.getElementById("selection").innerHTML = "You " + userGesture + " Computer Selected Scissors: Draw!"
			document.getElementById("selection").innerHTML +="<br></br><button onClick='window.location.href=window.location.href'>Play Again</button>";
		}
		
		
	}
	
	
}

function hide(){
	document.getElementById("selection").style.visibility = "hidden";
}

