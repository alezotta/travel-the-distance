let width = window.innerWidth
let height = 7000
let margin = 16
let innerMargin = 4
let raggio = 2
let canvas = width

if(window.innerWidth < 768) {
	//canvas = window.innerWidth;
	raggio = 1.5
}

let svg = d3.selectAll("body")
.append("svg")
.attr("width", width)
.attr("height", height)
.style("background", "#191919")

let randomX = d3.randomUniform(innerMargin, canvas - innerMargin)
let randomY = d3.randomUniform(innerMargin, height - innerMargin)

let pallini = 29148

/*
  totale 29148
  totale gender 2887
  male 2417
  female 470
  unknown gender 26261 
  */

  /* 
   '#fdc64f' giallo
   '#2e2d2c' nero
   '#fcf9ef' bianco
   '#575756' grigio
   */

for (let i = 0; i < pallini; i++) {

	d3.selectAll("svg")
	.append("ellipse")
	.attr("cx", randomX)
	.attr("cy", randomY)
	.attr("rx", raggio)
	.attr("ry", raggio)
	.style("fill", function() {
		if (i>0 & i<470) { 
			return "#fdc64f"
		} else if (i>=470 & i<2417) { 
			return "#fcf9ef"
		} else { 
			return "#575756"
		}
	})
}

d3.selectAll("svg")
	.append("text")
	.attr("x", width/2)
	.attr("y", 500)
	.text("Più di 30'000 combattenti")
	.attr("text-anchor", "middle")
	.attr("class", "textPallini")

