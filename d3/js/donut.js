// d3 video lesson 13
// ==================
var data = [10, 27, 40, 23];
var radius = 300;

// create color scale
var color = d3.scale.ordinal()
	.range(['red', 'blue', 'orange', 'green'])

// append canvas
var canvas = d3.select('#target').append('svg')
	.attr('width', 620)
	.attr('height', 620);

var group = canvas.append('g')
	.attr('transform', 'translate(310, 310)');

// arc path generator
var arc = d3.svg.arc()
	.innerRadius(40)
	.outerRadius(radius);

// pie selection (returns array of objects)
var pie = d3.layout.pie()
	.value(function(d){
		return d;
	});

var arcs = group.selectAll('.arc')
	.data(pie(data))
	.enter()
	.append('g')
	.attr('class', 'arc');

// append path to each returned object
arcs.append('path')
	.attr('d', arc)
	.attr('fill', function(d){
		// d is whole object
		return color(d.data)
	})

// add text labels
arcs.append('text')
	.attr('transform', function(d){
		return 'translate(' + arc.centroid(d) + ')';
	})
	.text('text-anchor', 'middle')
	.attr('font-size', '2em')
	.text(function(d){
		return d.data;
	})