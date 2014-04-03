function init(){
	var mapOptions = {
		// center map on nairobi
		center: new google.maps.LatLng(-1.279114, 36.823318),
		zoom: 11
	};
	
	// create map
	var map = new google.maps.Map(document.getElementById('map-canvas'), 
		mapOptions);
}

function loadScript(){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=init';	// pass init function as callback
    document.body.appendChild(script);
}

window.onload = loadScript;

// Google Maps JavaScript API provides a set of events that you can handle to determine state changes. For more information, see Map Events
// https://developers.google.com/maps/documentation/javascript/events
