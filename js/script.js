// 2009 nettuts: http://net.tutsplus.com/tutorials/javascript-ajax/an-introduction-to-the-raphael-js-library/

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
	// BARCHART
	// ============================================= 
	var x = new Raphael('gRaph');	// creates paper
	
	// Raphael.g.barchart(x, y, width, height, values, options)
		// options are: type (round, square, soft, sharp), stacked (true, false), gutter etc.
	var data = [1,5,23,4,5,8,9,14,24,36,31,2,22,24,24,15,4,4,8,12];
	
	// add hover and label functionality
	var fin = function(){
		this.flag = x.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
	};
	 var fout = function(){
		 this.flag.animate({ opacity: 0 }, 300, function(){
			 this.remove();
		 });
	};
	
	var txtattr = { font: '24px sans-serif' };
	x.text(160, 10, 'My chart').attr(txtattr); // create heading
	
	var barchart = x.barchart(10, 50, 500, 220, [data]).hover(fin, fout);
	
});
