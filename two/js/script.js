
$(document).ready(function(){
	
	// create two instance on canvas div
	var canvas = $('#canvas').get(0);
	var two = new Two({ width: 500, height: 500 }).appendTo(canvas);
	
	// make shapes
	var circle = two.makeCircle(72, 100, 50);
	var rect = two.makeRectangle(213, 100, 100, 100);
	
	// style shapes
	circle.fill = 'blue';
	circle.stroke = 'orangered'; // accepts all valid CSS colors
	circle.linewidth = 5;
	
	rect.fill = 'rgb(0, 200, 255)';
	rect.opacity = 0.75;
	rect.noStroke();
	
	// render everything to the screen
	two.update();
});
