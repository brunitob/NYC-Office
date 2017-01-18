var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = [
'eBay',
'Microsoft',
'Meetup',
'DigitalOcean',
'Trello',
'Google',
'StackOverflow',
'Spotify',
'Twitter',
'Amazon',
'Fog Creek Software',
'Linkedin',
];

//Data
var d = [
[ {axis:'Location',value:0.8},{axis:'Design',value:0.7},{axis:'Tidy up',value:0.8},{axis:'Technology',value:0.6},{axis:'Workspace',value:0.7},{axis:'Landscape',value:0.6},{axis:'Access',value:1},{axis:'Atention to visit',value:0.8}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.5},{axis:'Tidy up',value:0.9},{axis:'Technology',value:0.9},{axis:'Workspace',value:0.6},{axis:'Landscape',value:0.8},{axis:'Access',value:1},{axis:'Atention to visit',value:0.9}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.8},{axis:'Tidy up',value:0.7},{axis:'Technology',value:0.7},{axis:'Workspace',value:0.9},{axis:'Landscape',value:1},{axis:'Access',value:0.8},{axis:'Atention to visit',value:1}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.7},{axis:'Tidy up',value:0.6},{axis:'Technology',value:0.9},{axis:'Workspace',value:0.8},{axis:'Landscape',value:0.7},{axis:'Access',value:0.6},{axis:'Atention to visit',value:0.9}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.7},{axis:'Tidy up',value:0.9},{axis:'Technology',value:0.7},{axis:'Workspace',value:0.7},{axis:'Landscape',value:0.9},{axis:'Access',value:0.7},{axis:'Atention to visit',value:1}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.8},{axis:'Tidy up',value:0.9},{axis:'Technology',value:0.9},{axis:'Workspace',value:0.7},{axis:'Landscape',value:1},{axis:'Access',value:0.5},{axis:'Atention to visit',value:1}],
[ {axis:'Location',value:0.9},{axis:'Design',value:0.8},{axis:'Tidy up',value:0.4},{axis:'Technology',value:0.8},{axis:'Workspace',value:0.7},{axis:'Landscape',value:1},{axis:'Access',value:0.4},{axis:'Atention to visit',value:0.8}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.9},{axis:'Tidy up',value:0.7},{axis:'Technology',value:0.9},{axis:'Workspace',value:1},{axis:'Landscape',value:0.7},{axis:'Access',value:0.6},{axis:'Atention to visit',value:0.7}],
[ {axis:'Location',value:0.8},{axis:'Design',value:0.8},{axis:'Tidy up',value:0.8},{axis:'Technology',value:0.8},{axis:'Workspace',value:1},{axis:'Landscape',value:0.5},{axis:'Access',value:0.7},{axis:'Atention to visit',value:0.8}],
[ {axis:'Location',value:0.9},{axis:'Design',value:0.7},{axis:'Tidy up',value:0.7},{axis:'Technology',value:0.8},{axis:'Workspace',value:0.8},{axis:'Landscape',value:0.8},{axis:'Access',value:0.9},{axis:'Atention to visit',value:0.8}],
[ {axis:'Location',value:0.9},{axis:'Design',value:0.8},{axis:'Tidy up',value:0.7},{axis:'Technology',value:0.7},{axis:'Workspace',value:0.8},{axis:'Landscape',value:1},{axis:'Access',value:1},{axis:'Atention to visit',value:1}],
[ {axis:'Location',value:1},{axis:'Design',value:0.6},{axis:'Tidy up',value:0.7},{axis:'Technology',value:0.6},{axis:'Workspace',value:0.7},{axis:'Landscape',value:1},{axis:'Access',value:0.4},{axis:'Atention to visit',value:0.6}]
		];




//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w + 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Manhattan Tech offices");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 

	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w + 70)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w + 90)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	




