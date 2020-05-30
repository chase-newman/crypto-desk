import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './rippleChart.css';


class RippleChart extends Component {
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
              data: [0.1973, 0.1940, 0.1979, 0.2006, 0.1970]
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

export default RippleChart;
