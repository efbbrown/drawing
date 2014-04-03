// for every time that we see data but do not see an element
.enter()

/*
DOM elements < data elements (enter)
DOM elements > data elements (exit)
DOM elements === data elements (update)
*/

// closure
function functor(x){
	return function(){
		return x;
	};
}

var val = functor(10);
assert.equal(val(), 10);	// val is a function that always returns 10


// empty selection
var selection = d3.selectAll('circle')
					.data([1,2,3]);

// for each part of the data which is not joined to 
// an element in the selection, add an element
selection.enter()
	.append('circle');

// for each part of the selection that is no longer
// in the data, remove it
selection.exit()
	.remove();

// for each part of the selection update some attribute
selection.text(function(d){
	return d.fooBar;
})

// SCALE
d3.scale.linear()
	// data comes in
	.domain([0, 10])
	// representation comes out
	.range([0, 1]);

// GEO
var projection = d3.geo.mercator();
// data goes in representation comes out
var px projection([lon, lat]);