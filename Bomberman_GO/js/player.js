var player = {id: 'player', life: 3 , numberBomb:1, playerRadius : 30, score: 0};

function looseHealthPlayer(player){
	player.life=player.life-1;
	
	if(player.life<=0){
		window.location.replace("https://upliftalter.github.io/game_over/")	
	}
	
	if(player.id == 'player') {
		document.getElementById("life").innerHTML = player.life;
	}
}

function gainScore(player){
	player.score=player.score+1;
	
	if(player.id == 'player') {
		document.getElementById("score").innerHTML = player.score;
	}
}


function dropBombP() {
	if(player.numberBomb>0) {	
		dropBomb(player.playerRadius,marker.getPosition(),player);
		//PUTTING A BOMB ON THE GROUND REMOVES ONE OF YOUR BAG
		player.numberBomb=player.numberBomb-1 ;
		document.getElementById("numberBomb").innerHTML = player.numberBomb;
	}
}

function addLife(){
	player.life+=1;
	document.getElementById("life").innerHTML = player.life;
	
}

function addBomb(){
	player.numberBomb+=1;
	document.getElementById("numberBomb").innerHTML = player.numberBomb;
}

function addFire(){
	player.playerRadius+=10;
	document.getElementById("playerRadius").innerHTML = player.playerRadius;
}


	
