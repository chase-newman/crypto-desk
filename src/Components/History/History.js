import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './History.css';


class History extends Component {
    constructor(props) {
    super(props)
      this.state = {
      labels: null,
      datasets: [
        {
          label: 'price',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: null
        }
      ]
    }
}
    componentDidMount() {
        axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
        .then(response => {
            this.setState({
              labels: Object.keys(response.data.bpi),
              datasets: [
                {
                  label: 'price',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: Object.values(response.data.bpi)
                }
              ]
            })
        })
    }
    
    
    render() {
    return (
      <div className="row">
        <div className="col-sm-12">
            <Bar
              data={this.state}
              options={{
                maintainAspectRatio: true,
                title:{
                  display:true,
                  text:'30 Day Bitcoin Price',
                  fontSize:20,
                  fontColor: "white"
                },
                legend:{
                  display:false,
                  position:'right'
                }
              }}
            />
        </div>
      </div>
    );
    }
}

export default History;