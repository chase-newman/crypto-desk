import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import Ticker from './Components/Ticker/Ticker';

class App extends Component {
  state = {
    bitcoinPrice: null,
    ethereumPrice: null,
    ripplePrice: null
  
  }
  
  componentDidMount() {
    
    //Here is the data coming from the CoinAPI only allows 100 free calls per day
    // axios.get("https://rest.coinapi.io/v1/assets?apikey=82803CED-DC47-46DE-AB2D-8B4C86582F02")
    //   .then(response => {
    //       let data = response.data
    //       let bitcoinCoinAPI = data.filter(element => {
    //         return element.asset_id === "BTC"
    //       });
    //       let ethereumCoinAPI = data.filter(element => {
    //         return element.asset_id === "ETH"
    //       });
    //       let rippleCoinAPI = data.filter(element => {
    //         return element.asset_id === "XRP"
    //       });
    //       console.log(rippleCoinAPI);
    //       this.setState({
    //           bitcoinPrice: bitcoinCoinAPI[0].price_usd.toFixed(2),
    //           ethereumPrice: ethereumCoinAPI[0].price_usd.toFixed(2),
    //           ripplePrice: rippleCoinAPI[0].price_usd.toFixed(2)
    //       })
    //   });
      
    //API call from cryptocompare, used for the default bitcoin and etheruem price
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&api_key=4c4f03a2edec941b0106c48d324569714c2b288190e02f402b73d5df8a62cd6a")
      .then(response => {
        this.setState({
          bitcoinPrice: response.data.BTC.USD,
          ethereumPrice: response.data.ETH.USD
        })
      });  
    
  }
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <Ticker 
          bitcoin={this.state.bitcoinPrice}
          ethereum={this.state.ethereumPrice}
          ripple={this.state.ripplePrice}/>
      </div>
    );    
  }
}

export default App;
