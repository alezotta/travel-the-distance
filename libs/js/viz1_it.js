function viz1() {

let width = window.innerWidth
let height = 2000
let margin = 16
let innerMargin = 4
let canvas = width
let raggio = 2
let multi = 2

if(window.innerWidth < 768) {
	raggio = 1.5
	canvas = width - margin*2 - innerMargin
}

if(window.innerWidth >= 768) {
	width = 600
	canvas = width - margin + innerMargin
}

let svg = d3.select("#viz-1")
.append("svg")
.attr("width", width)
.attr("height", height)
//.style("background", "#191919")

let randomX = d3.randomUniform(innerMargin, canvas)
let randomY = d3.randomUniform(innerMargin, height - innerMargin)

let pallini = 2915*multi

/*
  totale 2915
  totale gender 289
  male 242
  female 47
  unknown gender 2626
  */

  /* 
   '#fdc64f' giallo
   '#2e2d2c' nero
   '#fcf9ef' bianco
   '#575756' grigio
   */

for (let i = 0; i < pallini; i++) {

	
	svg.append("ellipse")
	.attr("cx", randomX)
	.attr("cy", randomY)
	.attr("rx", raggio)
	.attr("ry", raggio)
	.style("fill", function() {
		if (i>0 & i<47*multi) { 
			return "#fdc64f"
		} else if (i>=47*multi & i<242*multi) { 
			return "#fcf9ef"
		} else { 
			return "#575756"
		}
	})
}
/*
	svg.append("text")
	.attr("x", canvas/2 - innerMargin)
	.attr("y", 500)
	.text("Più di 30’000 combattenti hanno aderito volontariamente alla causa o sono stati obbligati dallo Stato Islamico a partire")
	.attr("text-anchor", "middle")
	.attr("class", "textPallini")

	svg.append("text")
	.attr("x", canvas/2 - innerMargin)
	.attr("y", 1000)
	.text("Più di 83’351’800 km sono stati percorsi per raggiungere l’area del conflitto")
	.attr("text-anchor", "middle")
	.attr("class", "textPallini")

	svg.append("text")
	.attr("x", canvas/2 - innerMargin)
	.attr("y", 1500)
	.text("Si ha conoscenza dettagliata di solo 2’887 foreign fighter")
	.attr("text-anchor", "middle")
	.attr("class", "textPallini")
*/
}

viz1();

