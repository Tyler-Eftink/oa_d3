import React, { Component } from 'react';
import * as d3 from 'd3';
import axios from 'axios';



class Chart1 extends Component{

    constructor(props) {
        super(props)
        this.drawScatterPlot = this.drawScatterPlot.bind(this);
    }

    async componentDidMount () {
        await axios.get('http://localhost:3001/api/chart1').then((res) => {
            this.setState({data: res.data})
            }).catch(err => console.log(err))
        this.drawScatterPlot(this.state.data)
    }
    drawScatterPlot(data) {
    const w = 600;
    const h = 400;
    const padding = 30;
    const green = "#007AB7";
    //changing to blue...

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.company_size)])
        .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.company_revenue)])
        .range([h - padding, padding]);

    const svg = d3.select("svg")
        // .append("svg")
        .attr("width", w)
        .attr("height", h);

    svg.selectAll("circle")
       .data(data)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d.company_size))
       .attr("cy",(d) => yScale(d.company_revenue))
       .attr("r", (d) => 8)
       .attr("fill", green)
       .attr("stroke", "black")
       .style("stroke-width", "1px")

    const xAxis = d3.axisBottom(xScale);
    
    const yAxis = d3.axisLeft(yScale);
    
    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);
    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)
    }

    render() {
      return (
          <svg></svg>
      );
    }
  }

export default Chart1;
