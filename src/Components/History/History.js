import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './History.css';


class History extends Component {
    constructor(props) {
    super(props)
      this.state = {
      Bitcoin: true,
      listItemColors: {
        bitcoin: "rgba(75,192,192,1)",
        ethereum: "#ff6600",
        ripple: "#ff6600",
        litecoin: "#ff6600",
        tether: "#ff6600",
        eos: "#ff6600",
        bitcoinSV: "#ff6600",
        bitcoinCash: "#ff6600"
      },
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
        
        
      }
      
    listItemClicked = (event) => {
        // let coin = event.target.innerHTML;
        // if(coin === "Bitcoin SV" || "Bitcoin Cash") {
        //   coin = coin.split("");
        //   let num = coin.indexOf(" ");
        //   console.log(coin, num);
        //   coin.splice(num, 1);
        //   console.log(coin);
        // } else {
        //   console.log("No spaces in coin name");
        // }
        
        console.log(event.target.innerHTML)

        this.setState({
            listItemColors: {
              bitcoin: "#ff6600",
              ethereum: "#ff6600",
              ripple: "#ff6600",
              litecoin: "#ff6600",
              tether: "#ff6600",
              eos: "#ff6600",
              bitcoinSV: "#ff6600",
              bitcoinCash: "#ff6600",
              [event.target.name]: 'rgba(75,192,192,1)'
            },
            Bitcoin: false,
            Ethereum: false,
            Ripple: false,
            Litecoin: false,
            Tether: false,
            EOS: false,
            BitcoinSV: false,
            BitcoinCash: false,
            [event.target.innerHTML]: true
        });
    };
    
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
            <button
              style={{backgroundColor: this.state.listItemColors.bitcoin}}
              onClick={this.listItemClicked}
              name="bitcoin"
              className="list-group-item history-item list-coin">Bitcoin</button>
            <button
              style={{backgroundColor: this.state.listItemColors.ethereum}}
              onClick={this.listItemClicked}
              name="ethereum"
              className="list-group-item history-item list-coin">Ethereum</button>
            <button
              style={{backgroundColor: this.state.listItemColors.ripple}}
              onClick={this.listItemClicked}
              name="ripple"
              className="list-group-item history-item list-coin">Ripple</button>
            <button
              style={{backgroundColor: this.state.listItemColors.litecoin}}
              onClick={this.listItemClicked}
              name="litecoin"
              className="list-group-item history-item list-coin">Litecoin</button>
            <button
              style={{backgroundColor: this.state.listItemColors.tether}}
              onClick={this.listItemClicked}
              name="tether"
              className="list-group-item history-item list-coin">Tether</button>
            <button
              style={{backgroundColor: this.state.listItemColors.eos}}
              onClick={this.listItemClicked}
              name="eos"
              className="list-group-item history-item list-coin">EOS</button>
            <button
              style={{backgroundColor: this.state.listItemColors.bitcoinSV}}
              onClick={this.listItemClicked}
              name="bitcoinSV"
              className="list-group-item history-item list-coin">Bitcoin SV</button>
            <button
              style={{backgroundColor: this.state.listItemColors.bitcoinCash}}
              onClick={this.listItemClicked}
              name="bitcoinCash"
              className="list-group-item history-item list-coin">Bitcoin Cash</button>
          </ul>
        </div>
      </div>
    );
    }
}

export default History;