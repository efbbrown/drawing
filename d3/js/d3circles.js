// change circle radius to 10 times its 1-based index
d3.selectAll('circle').attr('r', function(data, index){
	//console.log(data); // undefined
	return (index+1) * 10;
});

// select the first circle and fill the circle with the color blue
d3.select('circle').style('fill', 'blue');	// <circle style="fill: red">


// bind data to circle child elements
var circles = d3.select("#svgCanvas").selectAll('circle')
    .data([30, 200, 300, 100]);
    
circles.enter().append('circle')	// create circle svg elements
	.attr('cx', function(data){
		return data;	// data is bound to circle elements
	})
	.attr('cy', 140)
	.attr('r', function (d) { return d/10 });
