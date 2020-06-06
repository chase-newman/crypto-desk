import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import TickerTwo from './Components/Ticker/Ticker';
import Articles from './Components/Articles/Articles';
import History from './Components/History/History';
import FullArticleList from './Components/FullArticleList/FullArticleList';
import AboutPage from './Components/AboutPage/AboutPage';



class App extends Component {
  state = {
    bitcoinCashPrice: null,
    bitcoinCashHistorical: null,
    bitcoinCashDelta: null,
    bitcoinSVPrice: null,
    bitcoinSVHistorical: null,
    bitcoinSVDelta: null,
    bitcoinPrice: null,
    bitcoinHistorical: null,
    bitcoinFiveDay: null,
    bitcoinDelta: null,
    eosPrice: null,
    eosHistorical: null,
    eosDelta: null,
    ethereumPrice: null,
    ethereumHistorical: null,
    ethereumDelta: null,
    litecoinPrice: null,
    litecoinHistorical: null,
    litecoinDelta: null,
    tetherPrice: null,
    tetherHistorical: null,
    tetherDelta: null,
    ripplePrice: null,
    rippleHistorical: null,
    rippleDelta: null,
    articles: null,
    date: null,
    historicalData: null,
    dateLabels: null
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
      
    // API call from cryptocompare, used for coin prices -  bitcoin, etheruem, bitcoin cash, bitcoin sv
    // EOS, litecoin, tether, ripple. Initially all up to date coin prices are set to state. 
    // axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,USDT,EOS,BSV,BCH&tsyms=USD,EUR&api_key=4c4f03a2edec941b0106c48d324569714c2b288190e02f402b73d5df8a62cd6a")
    //   .then(response => {
        
    // //Set State to hold the current coin prices
    //     this.setState({
    //       bitcoinCashPrice: response.data.BCH.USD,
    //       bitcoinSVPrice: response.data.BSV.USD,
    //       bitcoinPrice: response.data.BTC.USD,
    //       eosPrice: response.data.EOS.USD,
    //       ethereumPrice: response.data.ETH.USD,
    //       litecoinPrice: response.data.LTC.USD,
    //       tetherPrice: response.data.USDT.USD,
    //       ripplePrice: response.data.XRP.USD
    //     }, () => {
            
    //Here we get the the date from the most recent post in the firebase database to check and see if the data is current
          axios.get("https://crypto-desk-7f5da.firebaseio.com/coinData.json")
            .then(response => {
              //Get most recent date store in firebase
              let firebaseDate = Object.values(response.data);
              firebaseDate = firebaseDate[firebaseDate.length - 1].bitcoinCash.date;
              //Get the unique ID of the most recent date object store in firebase
              let data = Object.entries(response.data);
              let idData = data[data.length - 1];
              let id = idData[0];
    //If the dates are the same we want to update the most recent posted data in the firebase database to reflect
    //the most up to date coin prices
              if(firebaseDate === this.state.date) {
                  axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,USDT,EOS,BSV,BCH&tsyms=USD,EUR&api_key=4c4f03a2edec941b0106c48d324569714c2b288190e02f402b73d5df8a62cd6a")
                    .then(response => {
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
                        axios({
                          method: "put",
                          url: `https://crypto-desk-7f5da.firebaseio.com/coinData/${id}.json`,
                          data: {
                              bitcoinCash: {
                                  price: response.data.BCH.USD,
                                  date: this.state.date
                              },
                              bitcoinSVPrice: {
                                  price: response.data.BSV.USD,
                                  date: this.state.date
                              },
                              bitcoin: {
                                  price: response.data.BTC.USD,
                                  date: this.state.date
                              },
                              eos: {
                                  price: response.data.EOS.USD,
                                  date: this.state.date
                              },
                              ethereum: {
                                  price: response.data.ETH.USD,
                                  date: this.state.date 
                              },
                              litecoin: {
                                  price: response.data.LTC.USD,
                                  date: this.state.date
                              },
                              tether: {
                                  price: response.data.USDT.USD,
                                  date: this.state.date
                              },
                              ripple: {
                                  ripple: response.data.XRP.USD,
                                  date: this.state.date
                              }
                          },
                          contentType: "application/JSON"
                        }).then(response => {
                            //Run another get request to get the most recent data
                            axios.get("https://crypto-desk-7f5da.firebaseio.com/coinData.json")
                              .then(response => {
                                  data = Object.entries(response.data);
                                  
                                  let dateLabels = [];
                                  let bitcoinCashHistorical = [];
                                  let bitcoinSVHistorical = [];
                                  let bitcoinHistorical = [];
                                  let eosHistorical = [];
                                  let ethereumHistorical = [];
                                  let litecoinHistorical = [];
                                  let tetherHistorical = [];
                                  let rippleHistorical = [];
                                  
                                    data.forEach(el => {
                                    dateLabels.push(el[1].bitcoinCash.date);
                                    bitcoinCashHistorical.push(el[1].bitcoinCash.price);
                                    bitcoinSVHistorical.push(el[1].bitcoinSVPrice.price);
                                    bitcoinHistorical.push(el[1].bitcoin.price);
                                    eosHistorical.push(el[1].eos.price);
                                    ethereumHistorical.push(el[1].ethereum.price);
                                    litecoinHistorical.push(el[1].litecoin.price);
                                    tetherHistorical.push(el[1].tether.price);
                                    rippleHistorical.push(el[1].ripple.ripple);
                                  });
                                  
                                  this.setState({
                                      bitcoinCashHistorical,
                                      bitcoinCashDelta: parseFloat((bitcoinCashHistorical[bitcoinCashHistorical.length - 1] - bitcoinCashHistorical[bitcoinCashHistorical.length - 2]).toFixed(2)),
                                      bitcoinSVHistorical,
                                      bitcoinSVDelta: parseFloat((bitcoinSVHistorical[bitcoinSVHistorical.length - 1] - bitcoinSVHistorical[bitcoinSVHistorical.length - 2]).toFixed(2)), 
                                      bitcoinHistorical,
                                      bitcoinDelta: parseFloat((bitcoinHistorical[bitcoinHistorical.length - 1] - bitcoinHistorical[bitcoinHistorical.length - 2]).toFixed(2)), 
                                      eosHistorical,
                                      eosDelta: parseFloat((eosHistorical[eosHistorical.length - 1] - eosHistorical[eosHistorical.length - 2]).toFixed(2)), 
                                      ethereumHistorical,
                                      ethereumDelta: parseFloat((ethereumHistorical[ethereumHistorical.length - 1] - ethereumHistorical[ethereumHistorical.length - 2]).toFixed(2)), 
                                      litecoinHistorical,
                                      litecoinDelta: parseFloat((litecoinHistorical[litecoinHistorical.length - 1] - litecoinHistorical[litecoinHistorical.length - 2]).toFixed(2)),
                                      tetherHistorical,
                                      tetherDelta: parseFloat((tetherHistorical[tetherHistorical.length - 1] - tetherHistorical[tetherHistorical.length - 2]).toFixed(4)),
                                      rippleHistorical,
                                      rippleDelta: parseFloat((rippleHistorical[rippleHistorical.length - 1] - rippleHistorical[eosHistorical.length - 2]).toFixed(4)),
                                      dateLabels
                                });  
                              });
                            });
                          });
                        });
                  } else {
                
    //But if the dates do not match we want to post today's coin prices into a firebase database 
    //to store as historical data for future use.
            axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,USDT,EOS,BSV,BCH&tsyms=USD,EUR&api_key=4c4f03a2edec941b0106c48d324569714c2b288190e02f402b73d5df8a62cd6a")
              .then(response => {
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
                        bitcoin: {
                            price: this.state.bitcoinPrice,
                            data: this.state.date
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
                    }).then(response => {
                      axios.get("https://crypto-desk-7f5da.firebaseio.com/coinData")
                        .then(response => {
                            this.setState({
                              historicalData: response.data
                            });
                        });
                    });                    
                  });
              });
            };
          });
        // });
      // });  
      
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
        <Header 
            bitcoinDelta={this.state.bitcoinDelta}
            ethereumDelta={this.state.ethereumDelta}
            rippleDelta={this.state.rippleDelta}
            litecoinDelta={this.state.litecoinDelta}
            tetherDelta={this.state.tetherDelta}
            eosDelta={this.state.eosDelta}
            bitcoinSVDelta={this.state.bitcoinSVDelta}
            bitcoinCashDelta={this.state.bitcoinCashDelta}/>

        <div className="container-fluid">
          <Route
            path="/" 
            exact 
            render={(props) => 
              <TickerTwo
                bitcoinCash={this.state.bitcoinCashPrice}
                bitcoinCashHistorical={this.state.bitcoinCashHistorical}
                bitcoinCashDelta={this.state.bitcoinCashDelta}
                bitcoinSV={this.state.bitcoinSVPrice}
                bitcoinSVHistorical={this.state.bitcoinSVHistorical}
                bitcoinSVDelta={this.state.bitcoinSVDelta}
                bitcoin={this.state.bitcoinPrice}
                bitcoinHistorical={this.state.bitcoinHistorical}
                bitcoinDelta={this.state.bitcoinDelta}
                eos={this.state.eosPrice}
                eosHistorical={this.state.eosHistorical}
                eosDelta={this.state.eosDelta}
                ethereum ={this.state.ethereumPrice}
                ethereumHistorical={this.state.ethereumHistorical}
                ethereumDelta={this.state.ethereumDelta}
                litecoin={this.state.litecoinPrice}
                litecoinHistorical={this.state.litecoinHistorical}
                litecoinDelta={this.state.litecoinDelta}
                tether={this.state.tetherPrice}
                tetherHistorical={this.state.tetherHistorical}
                tetherDelta={this.state.tetherDelta}
                ripple={this.state.ripplePrice}
                rippleHistorical={this.state.rippleHistorical}
                rippleDelta={this.state.rippleDelta}
                historicalData={this.state.historicalData}
                dateLabels={this.state.dateLabels}/>} />
          <Route path="/" exact render={(props) => <Articles date={this.state.date} articles={this.state.articles}/>} />
          <Route path="/history" render={(props) => 
              <History 
                  ethereum={this.state.ethereumHistorical}
                  ripple={this.state.rippleHistorical}
                  litecoin={this.state.litecoinHistorical}
                  tether={this.state.tetherHistorical}
                  eos={this.state.eosHistorical}
                  bitcoinsv={this.state.bitcoinSVHistorical}
                  bitcoincash={this.state.bitcoinCashHistorical}/>} />
          <Route path="/news" render={(props) => <FullArticleList articles={this.state.articles}/>} />
          <Route path="/about" render={(props) => <AboutPage />} />
        
        </div>
      </div>
    );    
  }
}

export default App;
