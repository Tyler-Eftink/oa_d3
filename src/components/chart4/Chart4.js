import React, {Component} from 'react';
import * as d3 from 'd3';

class Chart4 extends Component{

    constructor() {
        super()
        this.state = {
            data: [
                {week: "week 1", day: "Monday", value: 50}, 
                {week: "week 1", day: "Tuesday", value: 95}, 
                {week: "week 1", day: "Wednesday", value: 15},
                {week: "week 1", day: "Thursday", value: 45},
                {week: "week 1", day: "Friday", value: 65},
                {week: "week 1", day: "Saturday", value: 5},
                {week: "week 1", day: "Sunday", value: 55},
                {week: "B", day: "Monday", value: 0},
                {week: "B", day: "Tuesday", value: 45},
                {week: "B", day: "Wednesday", value: 45},
                {week: "B", day: "Thursday", value: 95},
                {week: "B", day: "Friday", value: 15},
                {week: "B", day: "Saturday", value: 55},
                {week: "B", day: "Sunday", value: 15},
                {week: "C", day: "Monday", value: 45},
                {week: "C", day: "Tuesday", value: 45},
                {week: "C", day: "Wednesday", value: 15},
                {week: "C", day: "Thursday", value: 75},
                {week: "C", day: "Friday", value: 15},
                {week: "C", day: "Saturday", value: 15},
                {week: "C", day: "Sunday", value: 15},
                {week: "D", day: "Monday", value: 85},
                {week: "D", day: "Tuesday", value: 15},
                {week: "D", day: "Wednesday", value: 15},
                {week: "D", day: "Thursday", value: 95},
                {week: "D", day: "Friday", value: 105},
                {week: "D", day: "Saturday", value: 15},
                {week: "D", day: "Sunday", value: 35},
                {week: "E", day: "Monday", value: 15},
                {week: "E", day: "Tuesday", value: 65},
                {week: "E", day: "Wednesday", value: 15},
                {week: "E", day: "Thursday", value: 15},
                {week: "E", day: "Friday", value: 15},
                {week: "E", day: "Saturday", value: 15},
                {week: "E", day: "Sunday", value: 65},
            ]
        }
    }

    componentDidMount() {
        let data = this.state.data
        this.drawHeatMap(data)
    }

    drawHeatMap(data) {
        const margin = {top: 0, right: 0, bottom: 0, left: 0};
        const w = 600 - margin.left - margin.right;
        const h = 400 - margin.top - margin.bottom;

        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", w )
            .attr("height", h)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let myGroups = d3.map(data, function(d){return d.week;}).keys();
        let myVars = d3.map(data, function(d){return d.day;}).keys();

        let x = d3.scaleBand()
            .range([0, w])
            .domain(myGroups)
            .padding(0.01);
        svg.append("g")
            .attr("transform", "translate(0," + h + ")")
            .call(d3.axisBottom(x))

        let y = d3.scaleBand()
            .range([h, 0])
            .domain(myVars)
            .padding(0.01);

        svg.append("g")
            .call(d3.axisLeft(y));

        let myColor = d3.scaleLinear()
            .range(["#E3E3E3", "#007AB7"])
            .domain([1,100])

        svg.selectAll()
            .data(data, function(d) {return d.week+':'+d.day;})
            .enter()
            .append("rect")
            .attr("x", function(d) { return x(d.week) })
            .attr("y", function(d) { return y(d.day) })
            .attr("width", x.bandwidth() )
            .attr("height", y.bandwidth() )
            .style("fill", function(d) { return myColor(d.value)} )

    }



    render() {
        return (
            <div>
                <div ref="canvas"></div>
            </div>
        )
    }
}

export default Chart4;