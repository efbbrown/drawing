var leafletMap = L.map('leafletMap').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.title.cloudmade.com/' + API_KEY + '/997/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; [...]',
	maxZoom: 18
}).addTo(leafletMap);

// marker
var marker = L.marker([51.5, -0.09]).addTo(leafletMap);

// circle
var circle = L.circle([51.508, -0.11], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(leafletMap);

// polygon
var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(leafletMap);

// popups
marker.bindPopup('<b>Hello popup!</b><br>Line 2').openPopup();
circle.bindPopup('I am a circle :)');
polygon.bindPopup('check out this awesome shape!');

// popups as layers
var popup = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent('I am a standalone popup')
	.openOn(leafletMap);
	
// dealing with events
var clickPopup = L.popup();

function showPopup(e){
	
	clickPopup
		.setLatLng(e.latlng)
		.setContent('you clicked the map at ' + e.latlng)
		.openOn(leafletMap);
}

leafletMap.on('click', showPopup);


