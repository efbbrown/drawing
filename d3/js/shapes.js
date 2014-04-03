// create divs
// **add class to element using d3?
d3.select('body').append('div').text('this is a div')
d3.select('body').append('div').text('this is a div')
d3.select('body').append('div').text('this is a div')
d3.select('body').append('div').text('this is a div')
d3.select('body').append('div').text('this is a div')
    
d3.selectAll('div')
	.data([125, 230, 435, 140, 335])
	.transition()
	.duration(1000)	// animation
	.style('width', function(d) { return d + 'px'; })	// set width based on data
	.style('background-color', 'steelblue')

// draw basic shapes
// =========================
var canvas = d3.select('#target')
			.append('svg')
			.attr('width', 500)
			.attr('height', 500);
			
var circle = canvas.append('circle')
				.attr('cx', 250)		// x position
				.attr('cy', 250)		// y position
				.attr('r', 50)			// radius
				.attr('fill', 'blue')	// color

var rectangle = canvas.append('rect')	// top left corner
					.attr('width', 100)
					.attr('height', 50);

var line = canvas.append('line')
				.attr('x1', 10)
				.attr('y1', 100)			// first point
				.attr('x2', 400)
				.attr('y2', 400)			// second point
				.attr('stroke', 'green')	// color
				.attr('stroke-width', 8);	// width