import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './bitcoinChart.css';


class BitcoinChart extends Component {
    render() {
        // let bitcoinData = [];
        // if(this.props.bitcoinData) {
        //     // this.props.bitcoinData.forEach(el => {
        //     //   console.log(el)
        //     // });
        //     let i;
        //     for(i=0; i<this.props.bitcoinData.length; i++) {
        //         console.log(parseFloat(this.props.bitcoinData[i]));
        //     }
            
        // }
        let dateLabels = [];
        if(this.props.dateLabels) {
            this.props.dateLabels.forEach(el => {
               let arr = el.split("");
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
                          backgroundColor: "#00ff00",
                          borderColor: "#00ff00",
                          borderWidth: 1,
                          data: this.props.bitcoinData
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
};

export default BitcoinChart;
