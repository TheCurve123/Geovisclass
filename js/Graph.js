
		<script type="text/javascript">
		
	        //set the width and height
                var wt = 500;
                var ht = 200;
                var padding = 30;
                var dataset = [
                  [ 5,     95 ],
                  [ 50,   90 ],
                  [ 100,   50 ],
                  [ 150,   33 ],
                  [ 200,   22 ],
                  [ 250,   12 ],
                  [ 300,   44 ],
                  [ 350,    67 ],
                  [ 400,    77 ],
                  [ 450,   88 ]
              ];

	      //Create scale functions
	      var xScale = d3.scale.linear()
                   .domain([0, d3.max(dataset, function(d) { return d[0]; })])
		   .range([padding, wt- padding]);

             var yScale = d3.scale.linear()
                  .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                  .range([ht - padding, padding]);

		//Define X axis
	     var xAxis = d3.svg.axis()
		  .scale(xScale)
		  .orient("bottom")
		  .ticks(5);

			//Define Y axis
	     var yAxis = d3.svg.axis()
		   .scale(yScale)
		   .orient("left")
		   .ticks(5);
                //create svg element
                var svg = d3.select("body")
                          .append("svg")
                          .attr("width", wt)
                          .attr("height", ht);

                svg.selectAll("circle")
                        .data(dataset)
                        .enter()
                        .append("circle")
                        .attr("cx", function(d) {
                           return xScale(d[0]);
                         })
                        .attr("cy", function(d) {
                           return yScale(d[1]);
                          })
                        .attr("r", 5);

             //Create labels
			svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d[0] + "," + d[1];
			   })
			   .attr("x", function(d) {
			   		return xScale(d[0]);
			   })
			   .attr("y", function(d) {
			   		return yScale(d[1]);
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "red");

		  	
			//Create X axis
			svg.append("g")
				.attr("class", "axis")
				.attr("transform", "translate(0," + (ht - padding) + ")")
				.call(xAxis);
			
			//Create Y axis
			svg.append("g")
				.attr("class", "axis")
				.attr("transform", "translate(" + padding + ",0)")
				.call(yAxis);

                      svg.append("text")
                            .attr("y", 50)
                            .attr("x", 200)
                            .attr("transform", "rotate(0)")
                            .attr("dy", "1em")
                            .style("text-anchor", "middle")
                            .text("Value");
			
		</script>