import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './litecoinChart.css';

class LitecoinChart extends Component {
    state = {  
          labels: ['5/25', '5/26', '5/27',
           '5/28', '5/29'],
          datasets: [
            {
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#ff3333",
              borderColor: "#ff3333",
              borderWidth: 1,
              data: [42.95, 42.43, 43.86, 44.76, 44.25]
            }
          ]
    }
    
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales:{
                        xAxes: [{
                            display: true, //this will remove all the x-axis grid lines,
                            ticks: {
                                fontColor: "white"
                            }
                        }],
                        yAxes: [{
                            display: false
                        }]
                    }
                    }}
                />
            </div>
        );
    }
}

export default LitecoinChart;