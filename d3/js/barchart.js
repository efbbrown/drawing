// ==================
// horizontal bar chart
// ==================
var width = 500;
var height = 500;
var dataArray = [120, 50, 30, 70, 90, 10];
// ascending array
dataArray.sort(function(a,b){
	return a-b;
});

// get maximum value of an array
// Math.max.apply(Math, array);

// define scales
var widthScale = d3.scale.linear()
					.domain([0, Math.max.apply(Math, dataArray)])	
					.range([0, width]);

var colorScale = d3.scale.linear()
					.domain([0, Math.max.apply(Math, dataArray)])
					.range(['blue', 'green']);

var axis = d3.svg.axis()
				.ticks(5)
				.scale(widthScale);

// set canvas
var canvas = d3.select('#target')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')	// create a group
			.attr('transform', 'translate(20, 0)')	// move everything

// draw bars
var bars = canvas.selectAll('rect')		// empty selection
			.data(dataArray)			// bind data to empty selection
			.enter()					// placeholders for each point that has no corresponding rectangle
				// for each data selection
				.append('rect')
				.attr('width', function(d){
					// width corresponds to data
					return widthScale(d);
				})
				.attr('height', 50)
				.attr('fill', function(d){
					return colorScale(d);
				})
				.attr('y', function(d, index){
					// 25px gap between each rectangle
					return index * 75;
				});

canvas.append('g')
		.attr('transform', 'translate(0, 450)')
		.call(axis);