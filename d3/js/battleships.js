var destroyer = [1, 2, 3, 4];

// add battleship
grid.append('g').attr('class', 'draggable')
	.selectAll('rect')
	.data(destroyer).enter()
		.append('rect')
		.attr("width", rectWidth)
		.attr("height", rectHeight)
		.attr('x', function(data, index){
			return index * rectWidth;
		})
		.attr('y', function(data, index){
			return 0;
		})
		.style("fill", 'gray')
	    .style("stroke", '#555')

var drag = d3.behavior.drag()
	.on("dragstart", dragstarted)
    .on("drag", dragged)
    .on("dragend", dragended);

d3.selectAll(".draggable").call(drag);

function dragstarted() {
  this.style.opacity = '0.5';
  this.parentNode.appendChild(this);

  d3.select(this).transition()
      .ease("elastic")
      .duration(500)
}

function dragged(d) {
	var x = d3.event.x;
	var y = d3.event.y;
  d3.select(this)
  	.attr('x', d3.event.x)
  	.attr('y', d3.event.y)
    .attr("transform", "translate(" + x + ", " + y + ")");
}

function dragended() {
  this.style.opacity = '1';
  d3.select(this).transition()
      .ease("elastic")
      .duration(500)
}