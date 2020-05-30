import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './bitcoinChart.css';


class BitcoinChart extends Component {
    state = {  
          labels: ['5/25', '5/26', '5/27',
           '5/28', '5/29'],
          datasets: [
            {
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#00ff00",
              borderColor: "#00ff00",
              borderWidth: 1,
              data: [8776.05, 8871.05, 8923.05, 9207.95, 9391.14]
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
    };
};

export default BitcoinChart;
