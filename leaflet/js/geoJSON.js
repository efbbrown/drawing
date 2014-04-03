// http://leafletjs.com/examples/geojson.html

// a GeoJson object may represent a geometry, a feature or a collection of features

// GeoJSON geometry types: point, lineString, Polygon, MultiPoint, MultiLineString,
// MultiPolygon, GeometryCollection

// Features in GeoJSON contain a geometry object and additional properties
// a feature collection represents a list of features

// Features and FeatureCollections work best in leaflet.js
//		allows you to describe features with a set of properties

var geoMap = L.map('geoJsonMap');
var geojsonFeature = {
	'type': 'Feature',
	'properties': {
		'name': 'Coors Field',
		'amenity': 'Baseball Stadium',
		'popContent': 'The Colorado Rockies play here!'
	},
	'geometry': {
		'type': 'Point',
		'coordinates': [-104.99404, 39.75621]
	}
};

// GeoJSON objects are added to the map through the GeoJSON layer
L.geoJson(geojsonFeature).addTo(geoMap);

// or could create empty geoJson layer and add features later
// var geoLayer = L.geoJson().addTo(geoMap);
// geoLayer.addData(geojsonFeature);




