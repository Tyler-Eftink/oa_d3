import React, {Component} from 'react';
import * as d3 from 'd3';

class Chart2 extends Component{

    constructor(){
        super()
        this.state={
            data: [{name: "Monday", value: 15}, {name: "Tuesday", value: 5}, {name: "Wednesday", value: 10}, {name: "Thursday", value: 20}, {name: "Friday", value: 2}, {name: "Saturday", value: 1}, {name: "Sunday", value: 1}]
        }
    }

    componentDidMount() {
        let data = this.state.data
        this.drawBarChart(data)
    }

    drawBarChart(data)  {
        const margin = ({top: 30, right: 0, bottom: 30, left: 30})
        const h = 400;
        const w = 600;
        const padding = 30;
        const offWhite = "#007AB7";

        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, w - margin.right])
            .padding(0.1)

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([h - margin.bottom, margin.top])

        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", w)
            .attr("height", h)

        svg.append("g")
        
        svg.selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.value))
            .attr("height", d => y(0) - y(d.value))
            .attr("width", x.bandwidth())
            .attr("fill", offWhite)
            .attr("stroke", "black")
            .style("stroke-width", "1px")

        const xAxis = g => g
            .attr("transform", `translate(0,${h - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0))

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(null, data.format))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(data.y))

        svg.append("g")
            .call(xAxis);
      
        svg.append("g")
            .call(yAxis);
    }

    render(){
        return (
            <div ref="canvas"></div>
        )
    }
}

export default Chart2;