$(document).ready(function(){
	var location = $('#canvas').get(0);
	
	// create canvas: 
	// new Raphael(element, width, height)
	// new Raphael(x, y, width, height)
	var canvas = new Raphael(location, 600, 500)
	
	// (0,0) is at top left corner
	
	// CIRCLES 
	// raphaelObj.circle(x, y, radius)
	var circle = canvas.circle(100, 100, 80);
	
	for(var i = 0; i < 5; i++){
		var mult = i * 5;
		canvas.circle(250 + (2*mult), 100 + mult, 50 - mult);
	}
	
	// RECTANGLES (x, y, width, height)
	var rectangle = canvas.rect(200, 200, 250, 100);
	
	// ELLIPSES (x, y, x-radius, y-radius)
	var ellipse = canvas.ellipse(200, 400, 100, 50);
	
	// PATH DRAWING
	// 'M' means move without drawing, 'z' signifies path closing
	var tetronimo = canvas.path("M 175 300 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
	
	// styling
	tetronimo.attr({ 
		gradient: '90-#526c7a-#64a0c1',
		stroke: '#ddd', 
		'stroke-width': 5,
	});
	
	$('#rotate').on('click', function(){
		// ANIMATION
		tetronimo.animate({ transform: 'r90' }, 2000, 'bounce', function(){
			// callback for after original animation finishes
			this.animate({
				transform: 'r0'
			}, 1000, function(){
				// another animation
				this.animate({
					path: 'M 250 250 l 0 -50 l -50 0 l 0 -50 l -100 0 l 0 50 l 50 0 l 0 50 z'
				}, 1500, 'elastic');
			});
		});
	});	
	
	// ==============================================
	// MOOD METER
	var moods = ['shitty', 'surviving', 'good', 'awesome', 'great'];
	var colors = ['#cc0000', '#a97e22', '#9f9136', '#7c9a2d', '#3a9a2d'];
	var user_mood = 5;
	
	var target = $('#mood').get(0);
	var paper = new Raphael(target, 500, 500);
	
	var circle = paper.circle(250, 250, 200).attr({ 
		fill: '#000' 
	});
	
	var mood_text = paper.text(250, 250, 'Mood \nscore').attr({
		fill: '#fff'
	});
	
});


function showMood(){
	//...
	// javascript: http://net.tutsplus.com/tutorials/javascript-ajax/an-introduction-to-the-raphael-js-library/
}
