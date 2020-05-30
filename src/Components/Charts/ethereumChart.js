import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './ethereumChart.css';


class EthereumChart extends Component {
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
              data: [205.32, 201.90, 201.86, 219.84, 218.59]
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


export default EthereumChart;
