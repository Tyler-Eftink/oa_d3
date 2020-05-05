import React,{Component} from 'react';
import axios from 'axios';
import './Dashboard.css';
import Chart1 from '../../components/chart1/Chart1';
import Chart2 from '../../components/chart2/Chart2';
import Chart3 from '../../components/chart3/Chart3';
import Chart4 from '../../components/chart4/Chart4';
//I know, I know, terrible naming convention for the charts...

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            chart1: [],
            chart2: [],
            chart3: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/chart2').then((res) => {
            this.setState({chart2: res.data})
        }).catch(err => console.log(err))
        axios.get('http://localhost:3001/api/chart3').then((res) => {
            this.setState({chart3: res.data})
        }).catch(err => console.log(err))
    }
    //based on how slow the chart rendering is the first chart, I'm not going to send any data via props

    render() {
        const chart1 = this.state.chart1;
        const chart2 = this.state.chart2;
        const chart3 = this.state.chart3;
        return (
            <div>
                <div className="cardFlex">
                    <div className="cardTitle">
                        Company size vs revenue
                        <div className="chartCard">
                            <Chart1 />
                        </div>
                    </div>
                    <div className="cardTitle">
                        Last week's applations by day 
                        <div className="chartCard">
                            <Chart2 data={chart2}/>
                        </div>
                    </div>
                    <div className="cardTitle">
                        Application responses
                        <div className="chartCard">
                            <Chart3 data={chart3}/>
                        </div>
                    </div>
                    <div className="cardTitle">
                        Activity per day
                        <div className="chartCard">
                            <Chart4 /> 
                            {/* I didn't want write all the rows in the table for this heat map, I'm just keeping the data in state on that component */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;