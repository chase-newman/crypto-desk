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
        });
        
      window.addEventListener('resize', () => {
        this.setState({
            isMobile: window.innerWidth < 1200
        });
    }, false);
        
      }
    
    render() {
    return (
      <div className="row bar-row">
        <div className="col-lg-10 col-md-10 col-sm-12">
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
        <div className="col-sm-6 col-md-2 col-lg-2">
          <ul className="list-group history-group">
            <li className="list-group-item history-item">
              <p className="list-coin">Bitcoin</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">Ethereum</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">Ripple</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">Litecoin</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">Tether</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">EOS</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">Bitcoin SV</p>
            </li>
            <li className="list-group-item history-item">
              <p className="list-coin">Bitcoin Cash</p>
            </li>
          </ul>
        </div>
      </div>
    );
    }
}

export default History;