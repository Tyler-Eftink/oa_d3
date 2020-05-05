import React, {Component} from 'react';
import * as d3 from 'd3';

class Chart3 extends Component{

    constructor() {
        super()
        this.state={
            data: {responded: 10, notResponded: 30}
        }
    }


    componentDidMount() {
        let data = this.state.data
        this.drawDonut(data)
    }

    drawDonut(data) {
        const w = 425;
        const h = 425;
        const margin = 40;

        let radius = Math.min(w, h) / 2 - margin;

        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .append("g")
            .attr("transform", "translate("+ w / 2 + "," + h / 2 + ")");

        const color = d3.scaleOrdinal()
            .domain(data)
            .range(["#E3E3E3", "#007AB7"])

        const pie = d3.pie()
            .value((d) => d.value)
            const dataReady = pie(d3.entries(data))

        svg.selectAll('rect')
            .data(dataReady)
            .enter()
            .append("path")
            .attr('d', d3.arc()
                .innerRadius(100)
                .outerRadius(radius)
                )
            .attr('fill', function(d){ return(color(d.data.key)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
    }


    render() {
        return (
            <div>
                <div ref="canvas"></div>
            </div>
        )
    }
}

export default Chart3;