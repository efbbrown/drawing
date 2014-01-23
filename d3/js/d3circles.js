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

// =================================================

//select the circle and bind data.
var circle = d3.select("#example").selectAll("circle")
    .data([50,60,70]);

// change attribution based on data
circle
    .transition()
    .duration(3000)
    .attr("r",function(d){return d;});

// select the rest circle which are not binded to data yet.
circle.exit()
    .transition()
    .duration(3000)
    .attr("r",0)
    .remove();  // remove the data

// ====================================================

var draw_data = function(data){
    var svg = d3.select("svg");
    var circle = svg.selectAll("circle").data(data);
    
    circle.enter().append("circle")
      .attr("cx", function(d,i){return 40*(i+1);})
      .attr("cy", function(d,i){return 30*(i+1);})
      .attr("r", 0);
       
    circle.transition()
      .duration(750)
      .attr("cx", function(d,i){return 40*(i+1);})
      .attr("cy", function(d,i){return 30*(i+1);})
      .attr("r", function(d) { return Math.sqrt(d*0.3);});
    
    circle.exit()
        .transition()
        .duration(750)
        .attr("r", 0)
        .remove();
};

 setTimeout(function(){draw_data([1000,2000,3000]);},2000) ;
 setTimeout(function(){draw_data([100,200,300,400]);},4000); 
 setTimeout(function(){draw_data([500,700,600]);},6000) ;
 setTimeout(function(){draw_data([1200,1000]);},8000) ;
