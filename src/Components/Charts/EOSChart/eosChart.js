import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './eosChart.css';

class EOSChart extends Component {
  render() {
        let dateLabels = [];
        if(this.props.dateLabels) {
            this.props.dateLabels.forEach(el => {
               let arr = el.split("");
               for(let i = 1; i<=6; i++) {
                   arr.pop();
               }
               let num = arr.indexOf(" ");
               arr = arr.splice(num + 3, arr.length);
               arr = arr.join("");
               dateLabels.push(arr)
            });
        }
        return (
            <div className="chart">
                <Line
                    data={{  
                      labels: dateLabels,
                      datasets: [
                        {
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: this.props.eosDelta > 0 ? "#00ff00" : "red",
                          borderColor: this.props.eosDelta > 0 ? "#00ff00" : "red",
                          borderWidth: 1,
                          data: this.props.eosData
                        }
                    ]
                }
                        
                    }
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
}


export default EOSChart;