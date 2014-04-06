var width = 500;
var height = 500;

d3.json('../people_data.json', function(data){

	var canvas = d3.select('#routes').append('svg')
					.attr('width', width)
					.attr('height', height);

	canvas.selectAll('rect')
		.data(data)
		.enter()
			.append('rect')
			.attr('width', function(d){
				// width is person's age
				return d.age * 10;
			})
			.attr('height', 50)
			.attr('y', function(d, i){
				// separate bars
				return i * 60;
			})
			.attr('fill', 'blue');

	canvas.selectAll('text')
		.data(data)
		.enter()
			.append('text')
			.text(function(d){
				return d.name;
			})
			.attr('fill', 'white')
			.attr('y', function(d, i){
				// where to place text
				return i * 60 + 24;
			})
			
})