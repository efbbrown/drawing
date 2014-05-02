// d3 video lesson 13
// ==================
var data = {
	apples: [5, 100, 40, 23],
	oranges: [20, 4, 15, 30]
};
var width = 620;
var height = 620;
var radius = Math.min(width, height) / 2;

// construct new ordinal scale with a 10 color range
var color = d3.scale.category20();

// pie selection (returns array of objects)
var pie = d3.layout.pie()
	.value(function(d){ return d; });

// path for an arc
var arc = d3.svg.arc()
	.innerRadius(radius - 150)
	.outerRadius(radius - 20);

// append svg
var svg = d3.select('#target').append('svg')
	.attr('width', width)
	.attr('height', height)
	// creates group
	.append('g')
		.attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');

// draw path
var arcs = svg.selectAll('path')
	.data(pie(data['apples']))
	.enter()
		.append('path')		// append a path
		.attr('fill', function(d, i){
			return color(i);	// color based on index
		})
		.attr('d', arc);

// add text labels
var text = svg.selectAll('text')
	.data(pie(data['apples']))
	.enter()
	.append('text')
	.attr('transform', function(d){
		return 'translate(' + arc.centroid(d) + ')';
	})
	.text('text-anchor', 'middle')
	.attr('font-size', '2em')
	.text(function(d){
		return d.data;
	})

// listen for changes
d3.selectAll('input').on('change', change);

function change(){
	var value = this.value;	// this is selected <input> tag

	arcs = arcs.data(pie(data[value]));	// supply new data
	arcs.attr('d', arc);	// redraw arcs

	// redraw labels
	text.data(pie(data[value]))
		.attr('transform', function(d){
			return 'translate(' + arc.centroid(d) + ')';
		})
		.text(function(d){
			return d.data;
		})
}