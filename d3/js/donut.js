var data = [10, 20, 80, 30];

var canvas = d3.select('#target').append('svg')
	.attr('width', 500)
	.attr('height', 500);

// create group..
var group = canvas.append('g')
	.attr('transform', 'translate(200, 200)');

var radius = 100;
var perimeter = Math.PI * 2;	// full circle is pi*2 radians

var arc = d3.svg.arc()
	.innerRadius(radius - 20)
	.outerRadius(radius)
	.startAngle(0)
	.endAngle(perimeter - 1);	// one radian short of a full circle

// add path to svg
group.append('path')
	.attr('d', arc);