var powerup;


//CREATING POWERUPS
function powerups(){
	
	//NUMBER OF POWERUPS GENERATED RANDOMLY
	var random = Math.floor((Math.random() * 10) + 4);
	
	//LOADING THE PICTURES
	var ammo = 'Images/power_bomb.png';
	var bombfire = 'Images/power_fire.png';
	var life = 'Images/power_life.png';
	var img ;
	
	
	//CREATING AND LOCATING POWERUPS
	for (var i = 0; i < random; i++) {	
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {	
				
				//RANDOMLY LOCATING
				var randomLat = (Math.random() * (- 0.0050 - 0.0050) + 0.0050);
				var randomLng = (Math.random() * (- 0.0050 - 0.0050) + 0.0050);
			
				var powerupPos ={
					lat: position.coords.latitude + randomLat,
					lng: position.coords.longitude + randomLng
				};
				
				var poweRandom = Math.floor(Math.random() * 3) + 1 ;
				
				
				//DRAW A GREEN CIRCLE
				var radiusPowerup = new google.maps.Circle({
				strokeColor: '#14770c',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#2dff00',
				fillOpacity: 0.35,
				map: map,
				center: {lat: powerupPos.lat, lng: powerupPos.lng},
				radius: 30
				});
				
				if(poweRandom == 1) {
					img=ammo;
				}
				
				if(poweRandom == 2) {
					img=bombfire;
				}
				
				if(poweRandom == 3) {
					img=life;
				}
				
				var markerpowerup = new google.maps.Marker({
					draggable: false,
					position: powerupPos,
					map: map,
					icon : img
				});
				
				markerpowerup.addListener('click', function() {
					var posPlayer = marker.getPosition();
					if(google.maps.geometry.spherical.computeDistanceBetween(posPlayer,markerpowerup.getPosition())<= 30){				
						if(markerpowerup.getIcon()==ammo){
							addBomb();
							markerpowerup.setMap(null);
							radiusPowerup.setMap(null);
						}
						if(markerpowerup.getIcon()==life){
							addLife();
							markerpowerup.setMap(null);
							radiusPowerup.setMap(null);
						}
						if(markerpowerup.getIcon()==bombfire){
							addFire();
							markerpowerup.setMap(null);
							radiusPowerup.setMap(null);
							
						}
						
					}
							
							
				});

		}
);
		}
	}
	
	
	


}	