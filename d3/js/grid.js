// create grid with d3
var mainData = [];

for(var y=0; y<10; y++) {
    mainData[y] = [ [], [], [], [], [], [], [], [], [], [] ];
}

var id = '#grid',
	width = 500,
	height = 500;

var grid = d3.select(id).append("svg")
	.attr("width", width)
	.attr("height", height);

var rectWidth = width/mainData.length;		// 50
var rectHeight = height/mainData.length;	// 50
var newY, rowId;

// draw grid
for (var i = 0; i < mainData.length; i++){
	rowId = i;
	// draw row of rectangles inside a group element
	var rectGroup = grid.append('g');
	var row = rectGroup.selectAll('rect')
		.data(mainData[i])
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
	        .style("stroke", '#555')
	        .on('click', function() {
	        	d3.select(this).style('fill', '#FF0000')
	        });
}