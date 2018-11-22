var map;
var marker;

function hide(element){
	document.getElementById(element).style.display="none";
}
function show(element){
	document.getElementById(element).style.display="";
}

function showToggleButton(){
	show("toggleBtn");
}
function hideMainMenu(){
	hide("menuControls");
}

function startGame(){
	g_gameStarted=true;
	initMap();
	hideMainMenu();
	showToggleButton();
}
function initMap() {
	var defaultLocation = {lat: 62.599851, lng: 29.748322};

		map= new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: defaultLocation,
		
		fullscreenControl: false,
		streetViewControl: false,
		zoomControl: false,
		mapTypeControl: false,
	});
	
	google.maps.event.addListener(map,"dragstart",function(){
		mapStates="user";
	});	
	
	var icon={
		size:new google.maps.Size(20,20),
		scaledSize:new google.maps.Size(20,20),
		origin:new google.maps.Point(0,0),
		anchor:new google.maps.Point(10,10)
		
	}
	
	var iconBase = 'Images/marker.png';
	marker = new google.maps.Marker({
		draggable: true,
		position: defaultLocation,
		map: map,
		icon: iconBase
	});
	
	spawnEnemies();
	powerups();
	
	var success=initializeGeolocation();
	if(success==false){
		alert("Problem with location...");
	}
	
}

function toggleMap(){
	mapStates="all";
	var param=new Array();
	param["coords"]=new Array();
	param["coords"]["latitude"]=marker.getPosition().lat();
	param["coords"]["longitude"]=marker.getPosition().lng();

	onLocationUpdate(param);
}













