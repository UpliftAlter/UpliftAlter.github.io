function initializeGeolocation(){
	var geolocation=null;
		
	if(window.navigator && window.navigator.geolocation){
		geolocation=window.navigator.geolocation;
	}
	
	if(geolocation){
		geolocation.getCurrentPosition(onLocationUpdate);
		
		// call onLocationUpdate when sensor gets new location
		watch = geolocation.watchPosition(onLocationUpdate,null,{
			enableHighAccuracy:true,
			maximumAge:1000
		});
		
		return true;
	}
	return false;
}
		
function onLocationUpdate(event){
	var newLocation=new google.maps.LatLng(
		event["coords"].latitude,
		event["coords"].longitude
	);
	
	map.setCenter(newLocation);
	marker.setPosition(newLocation);
	document.getElementById("life").innerHTML = player.life;
	document.getElementById("numberBomb").innerHTML = player.numberBomb;
	document.getElementById("playerRadius").innerHTML = player.playerRadius;
}































