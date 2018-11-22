var bombs = [];

function dropBomb(radius,pos,entity){

	//var pos = marker.getPosition();
	
	//LOADING THE PICTURES
	if(entity == player) {
		var iconExpl = 'Images/explosion_slow.gif';
	}
	else {
		var iconExpl = 'Images/explosion.gif';
	}
	
	var iconBomb = 'Images/bomb.png';
	
	//GET THE BOMB LOCATION
	var markerBomb = new google.maps.Marker({
		draggable: false,
		position: pos,
		map: map,
		icon: iconBomb
	});
	
	//CREATING THE BOMB OBJECT
	var bomb = ({markerb: markerBomb, timeDetonation: 5000});
	
	
	//DRAW A RED CIRCLE
	var radiusBomb = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat: pos.lat(), lng: pos.lng()},
        radius: radius
    });
	
	bombs.push(bomb);
	
	
	//BOMB TIMER 
	setTimeout(function(){
		markerBomb.setIcon(iconExpl);
		//TAKING OUT THE BOMB
		setTimeout(function(){
			markerBomb.setMap(null);
			radiusBomb.setMap(null);
		}, 1800);
		
		if(entity == player) {
			//ADDING A NEW BOMB TO THE BOMB CARRYING CAPACITY
			player.numberBomb=player.numberBomb+1;
			document.getElementById("numberBomb").innerHTML = player.numberBomb;
		}
		
		//IF THE PLAYER IS IN A BOMB RADIUS , HE LOSES A LIFE
		var posPlayer = marker.getPosition();
		if(google.maps.geometry.spherical.computeDistanceBetween(posPlayer, pos)<= radius){
			looseHealthPlayer(player);
			
		}
		//IF THERE IS A MONSTER IN A BOMB RADIUS , HE DIES
		for(var i = 0;i<enemies.length;i++){
			posMonster=enemies[i].markerE.getPosition();
			if((google.maps.geometry.spherical.computeDistanceBetween(posMonster, pos)<= radius) && (enemies[i].markerE.getMap())) {
				enemies[i].markerE.setMap(null);
				//SEND THEM TO THE MOON
				enemies[i].lat+=9999;
				enemies[i].lng+=9999;
				gainScore(player);
			if(score==enemies.length){
				window.location.replace("victory.html")
			}
			
			
			}
		}
		
	}, bomb.timeDetonation);
	

}
