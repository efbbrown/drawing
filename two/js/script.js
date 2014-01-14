
$(document).ready(function(){
	
	// create two instance on canvas div
	var canvas = $('#canvas').get(0);
	var two = new Two({ 
		fullscreen: true 
	}).appendTo(canvas);
	
	// init shapes
	var circle = two.makeCircle(-70, 0, 50);
	var rect = two.makeRectangle(70, 0, 100, 100);
	var line = two.makeLine(10, 10, 110, 210);
	var curve = two.makeCurve(710, 400, 120, 50, 140, 1150, 160, 80, 90);	// accepts as many x and y as we like
	var polygon = two.makePolygon(1000, 200, 600, 600, 1140, 350, 1110, 25, 1000, 800);
	
	// style shapes
	circle.fill = 'blue';
	circle.stroke = 'orangered'; // accepts all valid CSS colors
	circle.linewidth = 5;
	
	rect.fill = 'rgb(0, 200, 255)';
	rect.opacity = 0.75;
	rect.noStroke();
	
	line.linewidth = 10;
	line.stroke = 'rgba(255, 0, 0, 0.5)';
	
	curve.rotation = Math.PI / 2; // quarter turn
	curve.linewidth = 40;
	
	polygon.linewidth = 20;
	polygon.translation = new Two.Vector(700, 400); // coordinates for center of shape
	polygon.fill = '#ececec';
	polygon.stroke = '#cccccc';
	
	// group shapes
	var group = two.makeGroup(circle, rect);
	group.translation.set(two.width/2, two.height/2);
	group.scale = 0;
	group.noStroke();
	
	
	// bind a function to scale and rotate the 
	// group to the animation loop
	two.bind('update', function(frameCount){
		// called every time two.update() is called (60 times per second)
		if (group.scale > 0.9999){
			group.scale = group.rotation = 0;
		}
		var t = (1 - group.scale) * 0.125;
		group.scale += t;
		group.rotation += t * 4 * Math.PI;
	}).play(); // start the animation loop
	
	// render everything to the screen
	two.update();
});
