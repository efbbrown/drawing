// create grid with d3
var mainData = [];

for(var y=0; y<10; y++) {
    mainData[y] = [ [y], [y], [y], [y], [y], [y], [y], [y], [y], [y] ];
}

var id = '#grid',
	width = 500,
	height = 500;

var grid = d3.select(id).append("svg")
	.attr("width", width)
	.attr("height", height);

var rectWidth = width/mainData.length;		// 50
var rectHeight = height/mainData.length;	// 50
var newY;

// draw grid
for (var i = 0; i < mainData.length; i++){

	var rectGroup = grid.append('g');
	var rectangles = rectGroup.selectAll('rect')
		.data(mainData[i])		// draw row
		.enter().append("rect")
			.attr("width", rectWidth)
			.attr("height", rectHeight)
			.attr('x', function(data, index){
				return index * rectWidth;
			})
			.attr('y', function(data, index){
				return i * rectHeight;
			})
			.style("fill", '#FFF')
	        .style("stroke", '#555');
}