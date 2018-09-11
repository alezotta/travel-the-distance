function viz6() {

let width = 858
let height = 520
let margin = 42

let force = 2.84

//squares scale
let dimMin = 0
let dimMax = 50

let svg = d3.select("#viz-6")
.append("svg")
.attr("width", width + margin)
.attr("height", height + margin / 2)
.style("background", "#f9f8f4")

//scales
let colors = d3.scaleOrdinal()
    .domain(["Europe", "America", "Asia", "Africa", "Oceania"])
    .range(["#FAC44D", "#F2D6AD", "#9F8A66", "#F0863C", "#C06C38"])

let x = d3.scaleLog()
.domain([0,210000000])
.range([0 + margin, width])

let y = d3.scaleLinear()
.domain([0,100])
.range([height, margin])

let size = d3.scaleSqrt()
.range([dimMin,dimMax])

let xScale = d3.fisheye.scale(d3.scaleLog)
.domain([0,210000000])
.range([0 + margin, width])

let yScale = d3.fisheye.scale(d3.scaleLinear)
.domain([0,100])
.range([height, margin])

let xAxis = d3.axisBottom(x)
              /*.ticks(5)*/
              .tickValues([10000, 100000, 1000000, 10000000, 100000000, 200000000])
              .tickFormat(d3.format(".2s"))
              .tickSize(- height + margin)

let yAxis = d3.axisLeft(y)
              .ticks(10)
              .tickSize(- width + margin)

d3.csv("https://alezotta.github.io/travel-the-distance-git/libs/data/viz6_it.csv", function(error, data) {
	if (error) throw error

	x.domain(d3.extent(data, d => +d.muslim_population))

	/*y.domain(d3.extent(data, d => +d.GINI_index))*/

	xScale.domain(d3.extent(data, d => +d.muslim_population))

	/*yScale.domain(d3.extent(data, d => +d.GINI_index))*/

	size.domain(d3.extent(data, d => +d.ff_mln))

	/*colors.domain(d3.extent(data, d => +d.continent))*/

  //axis
  svg.append("g")
  	.attr("class", "x axis")
  	.attr("transform", "translate(0," + (height) + ")")
  	.call(xAxis)

  svg.append("g")
  	.attr("class", "y axis")
  	.attr("transform", "translate(" + margin + ",0)")
  	.call(yAxis)

// console.log(colors(d => d.continent))

  //graph
  let squares = svg.selectAll("svg")
    	.data(data)
    	.enter()
    	.append("rect")
        .attr("class", d => "square_" + d.continent + " square")
      	.style("fill-opacity", 0.4)
      	.style("fill", d => colors(d.continent))
      	.style("stroke-width", 1)
      	.style("stroke", d => colors(d.continent))
      	.style("stroke-opacity", 1)
      	/*.style("mix-blend-mode", "multiply")*/
      	.attr("width", d => size(d.ff_mln))
      	.attr("height", d => size(d.ff_mln))
      	.attr("x", d => x(d.muslim_population) - size(d.ff_mln)/2)
        .attr("y", d => y(d.GINI_index) - size(d.ff_mln)/2)
        .attr("transform", d => `rotate(-45 ${x(d.muslim_population)} ${y(d.GINI_index)})`)
      
  let circles = svg.append("g")
      .selectAll(".circle")
      .data(data)
      .enter()
      .append("circle")
       	.attr("fill", "#191919")
  	    .attr("r", 1)
        .attr("cx", d => x(d.muslim_population))
        .attr("cy", d => y(d.GINI_index))
        .style("mix-blend-mode", "multiply")
  	   
  let labels = svg.append("g")
      .selectAll(".circle")
      .data(data)
      .enter()
      .append("text")
        .attr("class", d => "label_" + d.continent + " label")
    		.attr("x", d => x(d.muslim_population))
    		.attr("y", d => y(d.GINI_index) - 2)
    		.text(d => d.country)
    		.style("mix-blend-mode", "multiply")
    		.attr("opacity", 0.4)

  //x-axis label.
  svg.append("text")
        .attr("class", "x axis-label")
        .attr("text-anchor", "end")
        .attr("x", width - 6)
        .attr("y", height - 6)
        .text("Popolazione musulmana");

  //y-axis label.
  svg.append("text")
        .attr("class", "y axis-label")
        .attr("text-anchor", "end")
        .attr("x", - margin - 6)
        .attr("y", margin + 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Coefficiente di Gini");

  //apply fisheye
  svg.on("mousemove", function() {

      let mouse = d3.mouse(this)

      xScale.distortion(force).focus(mouse[0])
      yScale.distortion(force).focus(mouse[1])

      squares
      .attr("x", d => xScale(d.muslim_population) - size(d.ff_mln)/2)
      .attr("y", d => yScale(d.GINI_index) - size(d.ff_mln)/2)
      .style("fill-opacity", 0.7)
      .attr("transform", d => `rotate(-45 ${xScale(d.muslim_population)} ${yScale(d.GINI_index)})`)

      circles
      .attr("cx", d => xScale(d.muslim_population))
      .attr("cy", d => yScale(d.GINI_index))

      labels
      .attr("x", d => xScale(d.muslim_population))
      .attr("y", d => yScale(d.GINI_index) - 2)
      .attr("opacity", 1)

      xAxis = d3.axisBottom(xScale)
                /*.ticks(5)*/
                .tickValues([10000, 100000, 1000000, 10000000, 100000000, 200000000])
                .tickFormat(d3.format(".2s"))
                .tickSize(- height + margin)

      yAxis = d3.axisLeft(yScale)
                .ticks(10)
                .tickSize(-width + margin)

      svg.select(".x.axis").call(xAxis)
      svg.select(".y.axis").call(yAxis)
  })

  //reset
  svg.on("mouseout", function() {
      reset()
      })

  function reset() {
      squares
      .attr("x", d => x(d.muslim_population) - size(d.ff_mln)/2)
      .attr("y", d => y(d.GINI_index) - size(d.ff_mln)/2)
      .style("fill-opacity", 0.4)
      .attr("transform", d => `rotate(-45 ${x(d.muslim_population)} ${y(d.GINI_index)})`)

      circles
      .attr("cx", d => x(d.muslim_population))
      .attr("cy", d => y(d.GINI_index))

      labels
      .attr("x", d => x(d.muslim_population))
      .attr("y", d => y(d.GINI_index) - 2)
  	  .attr("opacity", 0.4)

      xAxis = d3.axisBottom(x)
                /*.ticks(5)*/
                .tickValues([10000, 100000, 1000000, 10000000, 100000000, 200000000])
                .tickFormat(d3.format(".2s"))
                .tickSize(- height + margin)

      yAxis = d3.axisLeft(y)
                .ticks(10)
                .tickSize(-width + margin)

      svg.select(".x.axis").call(xAxis)
      svg.select(".y.axis").call(yAxis)
  	}

})
}

viz6();