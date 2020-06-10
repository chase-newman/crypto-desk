import React from 'react';
import {Line} from 'react-chartjs-2';
import './rippleChart.css';


const RippleChart = (props) => {
        let dateLabels = [];
        if(props.dateLabels) {
            props.dateLabels.forEach(el => {
               let arr = el.split("");
               for(let i = 0; i <= 5; i++) {
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
                          backgroundColor: props.rippleDelta > 0 ? "#00ff00" : "red",
                          borderColor: props.rippleDelta > 0 ? "#00ff00" : "red",
                          borderWidth: 1,
                          data: props.rippleData
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
    }


export default RippleChart;
