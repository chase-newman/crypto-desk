import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './History.css';


class History extends Component {
      constructor(props) {
        super(props)
            this.state = {
            bitcoinLabels: null,
            bitcoinData: null,
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
          labels: this.props.dateLabels,
          datasets: [
            {
              label: 'price',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: this.props.bitcoin
            }
          ]
        }
      }
    
    componentDidMount() {
        axios.get("https://crypto-desk-7f5da.firebaseio.com/coinData.json")
        .then(response => {
            let data = Object.entries(response.data);
            let dateLabels = [];
            let bitcoinHistorical = [];
            
            data.forEach(el => {
              let arr = el[1].bitcoinCash.date;
              arr = arr.split("")
              for(let i = 1; i<=6; i++) {
                    arr.pop();
                }
                let num = arr.indexOf(" ");
                arr = arr.splice(num + 3, arr.length);
                arr = arr.join("");
              dateLabels.push(arr);
              console.log(arr)
              bitcoinHistorical.push(el[1].bitcoin.price);
            });
            
            this.setState({
              // bitcoinData: Object.values(response.data.bpi),
              bitcoinLabels: dateLabels,
              bitcoinData: bitcoinHistorical,
              labels: dateLabels,
              datasets: [
                {
                  label: 'price',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: bitcoinHistorical
                }
              ]
            })
        });
    }
      
    listItemClicked = (event) => {
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
        let name = event.target.innerHTML.toLowerCase();
        let data = this.props.name;
        if(name === "bitcoin") {
          this.setState({
              labels: this.state.bitcoinLabels,
              // labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.state.bitcoinData
                // data: this.props.bitcoin
              }
            ]
          });
        }
        if(name === "ethereum") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.ethereum
              }
            ]
          });
        }
        if(name === "ripple") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.ripple
              }
            ]
          });
        }
        if(name === "litecoin") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.litecoin
              }
            ]
          });
        }
        if(name === "tether") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.tether
              }
            ]
          });
        }
        if(name === "eos") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.eos
              }
            ]
          });
        }
        if(name === "bitcoinsv") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.bitcoinSV
              }
            ]
          });
        }
        if(name === "bitcoincash") {
          this.setState({
              labels: dateLabels,
              datasets: [
              {
                label: 'price',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.bitcoinCash
              }
            ]
          });
        }
        
        
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
              [name]: 'rgba(75,192,192,1)'
            },
            Bitcoin: false,
            Ethereum: false,
            Ripple: false,
            Litecoin: false,
            Tether: false,
            EOS: false,
            BitcoinSV: false,
            "Bitcoin SV": false,
            BitcoinCash: false,
            "Bitcoin Cash": false,
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
                  text:'Historical Coin Price Data',
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
              name="bitcoinsv"
              className="list-group-item history-item list-coin">BitcoinSV</button>
            <button
              style={{backgroundColor: this.state.listItemColors.bitcoinCash}}
              onClick={this.listItemClicked}
              name="bitcoincash"
              className="list-group-item history-item list-coin">BitcoinCash</button>
          </ul>
        </div>
      </div>
    );
    }
}

export default History;