var app = angular.module('donutApp', []);

app.directive('donutChart', function(){
	// isolate scope
	return {
		scope: {
			'data': '=',
			'onClick': '&'
		},
		restrict: 'E',
		link: link
	};

	function link(scope, element){
		// d3 part
		var color = d3.scale.category10();
		var el = element[0];
		var width = el.clientWidth;
		var height = el.clientHeight;
		var min = Math.min(width, height);
		var pie = d3.layout.pie().sort(null);
		var arc = d3.svg.arc()
			.outerRadius(min / 2 * 0.9)
			.innerRadius(min / 2 * 0.5);

		var svg = d3.select(el).append('svg')
			.attr({ width: width, height: height })
			.append('g')
				.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		svg.on('mousedown', function(d){
			// tell angular the code in this callback 
			// might make a change to the scope
			// $watch to catch errors
			scope.$apply(function(){
				if(scope.onClick) scope.onClick();
			})
		});

		function arcTween(a){
			// d3 update values with animated transition
			// http://bl.ocks.org/mbostock/1346410
			var i = d3.interpolate(this._current, a);
			this._current = i(0);

			return function(t){
				return arc(i(t));
			}
		}

		// add <path>s for each arc slice
		var arcs = svg.selectAll('path.arc').data(pie(scope.data))
			.enter().append('path')
				.attr('class', 'arc')
				.style('stroke', 'white')
				.attr('fill', function(d, i){ return color(i)})
				// store the initial angles
				.each(function(d){
					return this._current = d;
				});

		// data changed! update the arcs: add, update or remove element
		scope.$watch('data', function(newData, oldData){
			var data = newData.slice(0);	// copy
			var duration = 500;
			var PI = Math.PI;

			while(data.length < oldData.length)
				data.push(0)

			arcs = svg.selectAll('.arc').data(pie(data));
			arcs.transition().duration(duration).attrTween('d', arcTween);

			// transition in any new slices
			arcs.enter().append('path')
				.style('stroke', 'white')
				.attr('class', 'arc')
				.attr('fill', function(d, i){ return color(i)})
				.each(function(d){
					this._current = {
						startAngle: 2 * PI - 0.001,
						endAngle: 2 * PI
					}
				})
				.transition().duration(duration).attrTween('d', arcTween);
			// transition out any slices with size = 0
			arcs.filter(function(d){ return d.data === 0 })
				.transition()
				.duration(duration)
				.each(function(d){
					d.startAngle = 2 * PI - 0.001;
					d.endAngle = 2 * PI;
				})
				.attrTween('d', arcTween).remove();
		})
	}
});	// end donutChart

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.shared = { data: [1] };
	$scope.charts = d3.range(10);
	$scope.chartClicked = function(){
		var n = Math.round(Math.random() * 9) + 1;
		$scope.shared.data = d3.range(n).map(function(d){
			return Math.random();
		})
	}
}])