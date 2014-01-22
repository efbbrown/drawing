// create divs
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
