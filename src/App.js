import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import Ticker from './Components/Ticker/Ticker';
import Articles from './Components/Articles/Articles';
import History from './Components/History/History';
import FullArticleList from './Components/FullArticleList/FullArticleList';
import AboutPage from './Components/AboutPage/AboutPage';

class App extends Component {
  state = {
    bitcoinCashPrice: null,
    bitcoinSVPrice: null,
    bitcoinPrice: null,
    eosPrice: null,
    ethereumPrice: null,
    litecoinPrice: null,
    tetherPrice: null,
    ripplePrice: null,
    articles: null,
    date: null
  }
  
  componentDidMount() {
    let date = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let day = date.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = days[date.getDay()];
    date = `${dayOfWeek} - ${month} ${day}, ${year}`;
    this.setState({date});
    
    // Here is the data coming from the CoinAPI only allows 100 free calls per day. This is default API for the current ripple Price. 
    // axios.get("https://rest.coinapi.io/v1/assets?apikey=82803CED-DC47-46DE-AB2D-8B4C86582F02")
    //   .then(response => {
    //       let data = response.data
          // let bitcoinCoinAPI = data.filter(element => {
          //   return element.asset_id === "BTC"
          // });
          // let ethereumCoinAPI = data.filter(element => {
          //   return element.asset_id === "ETH"
          // });
          // let rippleCoinAPI = data.filter(element => {
          //   return element.asset_id === "XRP"
          // });
          // this.setState({
              // bitcoinPrice: bitcoinCoinAPI[0].price_usd.toFixed(2),
              // ethereumPrice: ethereumCoinAPI[0].price_usd.toFixed(2),
      //         ripplePrice: rippleCoinAPI[0].price_usd.toFixed(4)
      //     }, () => {
      //       axios({
      //         method: "post",
      //         url: "https://crypto-desk-7f5da.firebaseio.com/ripple.json",
      //         data: {
      //           price: this.state.ripplePrice,
      //           date: this.state.date,
      //         },
      //         contentType: "application/JSON"
      //       }).then(response => console.log(response));
      //     });
      // });
      
    // API call from cryptocompare, used for coin prices -  bitcoin, etheruem, bitcoin cash, bitcoin sv
    // EOS, litecoin, tether, ripple
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,USDT,EOS,BSV,BCH&tsyms=USD,EUR&api_key=4c4f03a2edec941b0106c48d324569714c2b288190e02f402b73d5df8a62cd6a")
      .then(response => {
        
    //Set State to hold the current coin prices
        this.setState({
          bitcoinCashPrice: response.data.BCH.USD,
          bitcoinSVPrice: response.data.BSV.USD,
          bitcoinPrice: response.data.BTC.USD,
          eosPrice: response.data.EOS.USD,
          ethereumPrice: response.data.ETH.USD,
          litecoinPrice: response.data.LTC.USD,
          tetherPrice: response.data.USDT.USD,
          ripplePrice: response.data.XRP.USD
        }, () => {
            
    //Here we get the the date from the most recent post in the firebase database to check and see if the data is current
          axios.get("https://crypto-desk-7f5da.firebaseio.com/coinData.json")
            .then(response => {
              let data = Object.values(response.data);
              data = data[0].bitcoinCash.date;
    //If the data is current we want to return from the function and not post anything to Firebase
              if(data === this.state.date) {
                console.log("Dates are the same!");
              } else {
                
    //But if the dates do not match we want to post today's coin prices into a firebase database 
    //to store as historical data for future use.
            axios({
              method: "post",
              url: "https://crypto-desk-7f5da.firebaseio.com/coinData.json",
              data: {
                bitcoinCash: {
                    price: this.state.bitcoinCashPrice,
                    date: this.state.date
                },
                bitcoinSVPrice: {
                    price: this.state.bitcoinSVPrice,
                    date: this.state.date
                },
                eos: {
                    price: this.state.eosPrice,
                    date: this.state.date
                },
                ethereum: {
                    price: this.state.ethereumPrice,
                    date: this.state.date 
                },
                litecoin: {
                    price: this.state.litecoinPrice,
                    date: this.state.date
                },
                tether: {
                    price: this.state.tetherPrice,
                    date: this.state.date
                },
                ripple: {
                    ripple: this.state.ripplePrice,
                    date: this.state.date
                }
              },
              contentType: "application/JSON"
            }).then(response => console.log(response)); 
              }
            });
        });
      });  
      
    //API news call from cryptocontrol
       axios.get("https://cryptocontrol.io/api/v1/public/news/coin/bitcoin?key=a5f6f509a92918f1022b41f02c5f0dba")
      .then(response => {
        this.setState({
          articles: response.data
        })
      });
  }
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Route
            path="/" 
            exact 
            render={(props) => 
              <Ticker
                bitcoinCash={this.state.bitcoinCashPrice}
                bitcoinSV={this.state.bitcoinSVPrice}
                bitcoin={this.state.bitcoinPrice}
                eos={this.state.eosPrice}
                ethereum={this.state.ethereumPrice}
                litecoin={this.state.litecoinPrice}
                tether={this.state.tetherPrice}
                ripple={this.state.ripplePrice}/>} />
          <Route path="/" exact render={(props) => <Articles date={this.state.date} articles={this.state.articles}/>} />
          <Route path="/history" render={(props) => <History labels={this.state.historyLabels} prices={this.state.historyPrices}/>} />
          <Route path="/news" render={(props) => <FullArticleList articles={this.state.articles}/>} />
          <Route path="/about" render={(props) => <AboutPage />} />
        </div>
      </div>
    );    
  }
}

export default App;
