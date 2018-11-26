var enemies = [];
var enemy;

//CREATING ENEMIES
function spawnEnemies(){
	
	//NUMBER OF ENEMIES GENERATED RANDOMLY
	var random = Math.floor((Math.random() * 10) + 1);
	
	//LOADING THE PICTURES
	var iconennemies = 'Images/enemy.png';
	
	//CREATING AND LOCATING ENEMIES
	for (var i = 0; i < random; i++) {	
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {	
				
				//RANDOMLY LOCATING
				var randomLat = (Math.random() * (- 0.0050 - 0.0050) + 0.0050);
				var randomLng = (Math.random() * (- 0.0050 - 0.0050) + 0.0050);
			
				var enemyPos ={
					lat: position.coords.latitude + randomLat,
					lng: position.coords.longitude + randomLng
				};
				
				var markerEnemy = new google.maps.Marker({
					draggable: false,
					position: enemyPos,
					map: map,
					icon : iconennemies
				});
				
				//CREATING AND STORING ENEMY OBJECTS IN TO AN ARRAY
				enemy = ({markerE: markerEnemy,lat : enemyPos.lat , lng:enemyPos.lng , life : 1});
				enemies.push(enemy);	
			});
        }
	}
	enemyAction();
	enemyBomb();
}

function enemyAction(){
	for(var i=0; i<enemies.length; i++){
		
		var randomVelLat = (Math.random() * (- 0.0002870 - 0.0002870) + 0.0002870);
		var randomVelLng = (Math.random() * (- 0.0002870- 0.0002870) + 0.0002870);
		enemies[i].lat += randomVelLat;
		enemies[i].lng += randomVelLng;
		
		var newLocation=new google.maps.LatLng(
			enemies[i].lat,
			enemies[i].lng
		);
		enemies[i].markerE.setPosition(newLocation);
		
		
	}
	setTimeout(enemyAction,2500);
	
}


function enemyBomb(){
	for(var i=0; i<enemies.length; i++){
		
	dropBomb(10,enemies[i].markerE.getPosition(),enemy);
	
	}
	
	setTimeout(enemyBomb,10000);
	
}
	
	

	


	