import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import ChartBanner from './Components/ChartBanner/ChartBanner';
import Articles from './Components/Articles/Articles';
import History from './Components/History/History';
import FullArticleList from './Components/FullArticleList/FullArticleList';
import AboutPage from './Components/AboutPage/AboutPage';
import Aux from './Components/hoc/Aux';



class App extends Component {
  state = {
    bitcoinCash: {
      price: null,
      historical: null,
      fiveDay: null,
      delta: null
    },
    bitcoinSV: {
      price: null,
      historical: null,
      fiveDay: null,
      delta: null
    },
    bitcoin: {
      price: null,
      historical: null,
      fiveDay: null,
      delta: null
    },
    eos: {
        price: null,
        historical: null,
        fiveDay: null,
        delta: null
    },
    ethereum: {
        price: null,
        historical: null,
        fiveDay: null,
        delta: null
    },
    litecoin: {
        price: null,
        historical: null,
        fiveDay: null,
        delta: null
    },
    tether: {
      price: null,
      historical: null,
      fiveDay: null,
      delta: null
    },
    ripple: {
        price: null,
        historical: null,
        fiveDay: null,
        delta: null
    },
    articles: null,
    date: null,
    dateStore: {
      dateFull: null,
      dateFiveDay: null
    },
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
                          bitcoinCash: {
                            price: response.data.BCH.USD 
                          },
                          bitcoinSV: {
                            price: response.data.BSV.USD 
                          },
                          bitcoin: {
                            price: response.data.BTC.USD
                          },
                          eos: {
                            price: response.data.EOS.USD
                          },
                          ethereum: {
                            price: response.data.ETH.USD
                          },
                          litecoin: {
                            price: response.data.LTC.USD
                          },
                          tether: {
                            price: response.data.USDT.USD
                          },
                          ripple: {
                            price: response.data.XRP.USD
                          }
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
                                  data = data.slice(data.length - 30,data.length + 1);
                                
                                  
                                  let dateLabels = [];
                                  let dateFiveDay = [];
                                  let bitcoinCashHistorical = [];
                                  let bitcoinCashFiveDay = [];
                                  let bitcoinSVHistorical = [];
                                  let bitcoinSVFiveDay = [];
                                  let bitcoinHistorical = [];
                                  let bitcoinFiveDay = [];
                                  let eosHistorical = [];
                                  let eosFiveDay = [];
                                  let ethereumHistorical = [];
                                  let ethereumFiveDay = [];
                                  let litecoinHistorical = [];
                                  let litecoinFiveDay = [];
                                  let tetherHistorical = [];
                                  let tetherFiveDay = [];
                                  let rippleHistorical = [];
                                  let rippleFiveDay = [];
                                  
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
                                  
                                  bitcoinFiveDay = bitcoinHistorical.slice(0);
                                  bitcoinSVFiveDay = bitcoinSVHistorical.slice(0);
                                  bitcoinCashFiveDay = bitcoinCashHistorical.slice(0);
                                  ethereumFiveDay = ethereumHistorical.slice(0);
                                  rippleFiveDay = rippleHistorical.slice(0);
                                  litecoinFiveDay = litecoinHistorical.slice(0);
                                  tetherFiveDay = tetherHistorical.slice(0);
                                  eosFiveDay = eosHistorical.slice(0);
                                  dateFiveDay = dateLabels.slice(0);
                                  
                                    if(dateLabels.length > 5) {
                                      for(let i=dateLabels.length; i > 5; i--) {
                                          bitcoinFiveDay.shift();
                                          bitcoinSVFiveDay.shift();
                                          bitcoinCashFiveDay.shift();
                                          ethereumFiveDay.shift();
                                          rippleFiveDay.shift();
                                          litecoinFiveDay.shift();
                                          tetherFiveDay.shift();
                                          eosFiveDay.shift();
                                          dateFiveDay.shift();
                                      }
                                    }  
                                  
                                  
                                  
                                  this.setState({
                                      bitcoinCash: {
                                        ...this.state.bitcoinCash,
                                        historical: bitcoinCashHistorical,
                                        fiveDay: bitcoinCashFiveDay,
                                        delta: parseFloat((bitcoinCashHistorical[bitcoinCashHistorical.length - 1] - bitcoinCashHistorical[bitcoinCashHistorical.length - 2]).toFixed(2))
                                      },
                                      bitcoinSV: {
                                        ...this.state.bitcoinSV,
                                        historical: bitcoinSVHistorical,
                                        fiveDay: bitcoinSVFiveDay,
                                        delta: parseFloat((bitcoinSVHistorical[bitcoinSVHistorical.length - 1] - bitcoinSVHistorical[bitcoinSVHistorical.length - 2]).toFixed(2))
                                      },
                                      bitcoin: {
                                        ...this.state.bitcoin,
                                        historical: bitcoinHistorical,
                                        fiveDay: bitcoinFiveDay,
                                        delta: parseFloat((bitcoinHistorical[bitcoinHistorical.length - 1] - bitcoinHistorical[bitcoinHistorical.length - 2]).toFixed(2))
                                      },
                                      eos: {
                                        ...this.state.eos,
                                        historical: eosHistorical,
                                        fiveDay: eosFiveDay,
                                        delta: parseFloat((eosHistorical[eosHistorical.length - 1] - eosHistorical[eosHistorical.length - 2]).toFixed(3))
                                      },
                                      ethereum: {
                                        ...this.state.ethereum,
                                        historical: ethereumHistorical,
                                        fiveDay: ethereumFiveDay,
                                        delta: parseFloat((ethereumHistorical[ethereumHistorical.length - 1] - ethereumHistorical[ethereumHistorical.length - 2]).toFixed(2))
                                      },
                                      litecoin: {
                                        ...this.state.litecoin,
                                        historical: litecoinHistorical,
                                        fiveDay: litecoinFiveDay,
                                        delta: parseFloat((litecoinHistorical[litecoinHistorical.length - 1] - litecoinHistorical[litecoinHistorical.length - 2]).toFixed(2))
                                      },
                                      tether: {
                                        ...this.state.tether,
                                        historical: tetherHistorical,
                                        fiveDay: tetherFiveDay,
                                        delta: parseFloat((tetherHistorical[tetherHistorical.length - 1] - tetherHistorical[tetherHistorical.length - 2]).toFixed(4))
                                      },
                                      ripple: {
                                        ...this.state.ripple,
                                        historical: rippleHistorical,
                                        fiveDay: rippleFiveDay,
                                        delta: parseFloat((rippleHistorical[rippleHistorical.length - 1] - rippleHistorical[rippleHistorical.length - 2]).toFixed(4))
                                      },
                                      dateStore: {
                                          dateFull: dateLabels,
                                          dateFiveDay: dateFiveDay  
                                      }
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
                          bitcoinCash: {
                            price: response.data.BCH.USD 
                          },
                          bitcoinSV: {
                            price: response.data.BSV.USD 
                          },
                          bitcoin: {
                            price: response.data.BTC.USD
                          },
                          eos: {
                            price: response.data.EOS.USD
                          },
                          ethereum: {
                            price: response.data.ETH.USD
                          },
                          litecoin: {
                            price: response.data.LTC.USD
                          },
                          tether: {
                            price: response.data.USDT.USD
                          },
                          ripple: {
                            price: response.data.XRP.USD
                          }
                  }, () => {
                    axios({
                      method: "post",
                      url: "https://crypto-desk-7f5da.firebaseio.com/coinData.json",
                      data: {
                        bitcoinCash: {
                            price: this.state.bitcoinCash.price,
                            date: this.state.date
                        },
                        bitcoinSVPrice: {
                            price: this.state.bitcoinSV.price,
                            date: this.state.date
                        },
                        bitcoin: {
                            price: this.state.bitcoin.price,
                            data: this.state.date
                        },
                        eos: {
                            price: this.state.eos.price,
                            date: this.state.date
                        },
                        ethereum: {
                            price: this.state.ethereum.price,
                            date: this.state.date 
                        },
                        litecoin: {
                            price: this.state.litecoin.price,
                            date: this.state.date
                        },
                        tether: {
                            price: this.state.tether.price,
                            date: this.state.date
                        },
                        ripple: {
                            ripple: this.state.ripple.price,
                            date: this.state.date
                        }
                      },
                      contentType: "application/JSON"
                    }).then(response => {
                      axios.get("https://crypto-desk-7f5da.firebaseio.com/coinData.json")
                        .then(response => {
                           data = Object.entries(response.data);
                           data = data.slice(data.length - 30,data.length + 1);
                                  
                                  let dateLabels = [];
                                  let dateFiveDay = [];
                                  let bitcoinCashHistorical = [];
                                  let bitcoinCashFiveDay = [];
                                  let bitcoinSVHistorical = [];
                                  let bitcoinSVFiveDay = [];
                                  let bitcoinHistorical = [];
                                  let bitcoinFiveDay = [];
                                  let eosHistorical = [];
                                  let eosFiveDay = [];
                                  let ethereumHistorical = [];
                                  let ethereumFiveDay = [];
                                  let litecoinHistorical = [];
                                  let litecoinFiveDay = [];
                                  let tetherHistorical = [];
                                  let tetherFiveDay = [];
                                  let rippleHistorical = [];
                                  let rippleFiveDay = [];
                                  
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
                                  
                                  bitcoinFiveDay = bitcoinHistorical.slice(0);
                                  bitcoinSVFiveDay = bitcoinSVHistorical.slice(0);
                                  bitcoinCashFiveDay = bitcoinCashHistorical.slice(0);
                                  ethereumFiveDay = ethereumHistorical.slice(0);
                                  rippleFiveDay = rippleHistorical.slice(0);
                                  litecoinFiveDay = litecoinHistorical.slice(0);
                                  tetherFiveDay = tetherHistorical.slice(0);
                                  eosFiveDay = eosHistorical.slice(0);
                                  dateFiveDay = dateLabels.slice(0);
                                  
                                    if(dateLabels.length > 5) {
                                      for(let i=dateLabels.length; i > 5; i--) {
                                          bitcoinFiveDay.shift();
                                          bitcoinSVFiveDay.shift();
                                          bitcoinCashFiveDay.shift();
                                          ethereumFiveDay.shift();
                                          rippleFiveDay.shift();
                                          litecoinFiveDay.shift();
                                          tetherFiveDay.shift();
                                          eosFiveDay.shift();
                                          dateFiveDay.shift();
                                      }
                                    }  
                                  
                                  
                                  
                                  this.setState({
                                      bitcoinCash: {
                                        ...this.state.bitcoinCash,
                                        historical: bitcoinCashHistorical,
                                        fiveDay: bitcoinCashFiveDay,
                                        delta: parseFloat((bitcoinCashHistorical[bitcoinCashHistorical.length - 1] - bitcoinCashHistorical[bitcoinCashHistorical.length - 2]).toFixed(2))
                                      },
                                      bitcoinSV: {
                                        ...this.state.bitcoinSV,
                                        historical: bitcoinSVHistorical,
                                        fiveDay: bitcoinSVFiveDay,
                                        delta: parseFloat((bitcoinSVHistorical[bitcoinSVHistorical.length - 1] - bitcoinSVHistorical[bitcoinSVHistorical.length - 2]).toFixed(2))
                                      },
                                      bitcoin: {
                                        ...this.state.bitcoin,
                                        historical: bitcoinHistorical,
                                        fiveDay: bitcoinFiveDay,
                                        delta: parseFloat((bitcoinHistorical[bitcoinHistorical.length - 1] - bitcoinHistorical[bitcoinHistorical.length - 2]).toFixed(2))
                                      },
                                      eos: {
                                        ...this.state.eos,
                                        historical: eosHistorical,
                                        fiveDay: eosFiveDay,
                                        delta: parseFloat((eosHistorical[eosHistorical.length - 1] - eosHistorical[eosHistorical.length - 2]).toFixed(2))
                                      },
                                      ethereum: {
                                        ...this.state.ethereum,
                                        historical: ethereumHistorical,
                                        fiveDay: ethereumFiveDay,
                                        delta: parseFloat((ethereumHistorical[ethereumHistorical.length - 1] - ethereumHistorical[ethereumHistorical.length - 2]).toFixed(2))
                                      },
                                      litecoin: {
                                        ...this.state.litecoin,
                                        historical: litecoinHistorical,
                                        fiveDay: litecoinFiveDay,
                                        delta: parseFloat((litecoinHistorical[litecoinHistorical.length - 1] - litecoinHistorical[litecoinHistorical.length - 2]).toFixed(2))
                                      },
                                      tether: {
                                        ...this.state.tether,
                                        historical: tetherHistorical,
                                        fiveDay: tetherFiveDay,
                                        delta: parseFloat((tetherHistorical[tetherHistorical.length - 1] - tetherHistorical[tetherHistorical.length - 2]).toFixed(4))
                                      },
                                      ripple: {
                                        ...this.state.ripple,
                                        historical: rippleHistorical,
                                        fiveDay: rippleFiveDay,
                                        delta: parseFloat((rippleHistorical[rippleHistorical.length - 1] - rippleHistorical[rippleHistorical.length - 2]).toFixed(4))
                                      },
                                      dateStore: {
                                          dateFull: dateLabels,
                                          dateFiveDay: dateFiveDay  
                                    }
                                }); 
                              });
                            });                    
                          });
                        });
                      };
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
      <Aux>
        <Header
            bitcoin={this.state.bitcoin}
            ethereum={this.state.ethereum}
            ripple={this.state.ripple}
            litecoin={this.state.litecoin}
            tether={this.state.tether}
            eos={this.state.eos}
            bitcoinSV={this.state.bitcoinSV}
            bitcoinCash={this.state.bitcoinCash}/>
        <div className="container-fluid">
          <Route
            path="/" 
            exact 
            render={(props) => 
              <ChartBanner
                bitcoinCash={this.state.bitcoinCash}
                bitcoinSV={this.state.bitcoinSV}
                bitcoin={this.state.bitcoin}
                ethereum={this.state.ethereum}
                eos={this.state.eos}
                litecoin={this.state.litecoin}
                tether={this.state.tether}
                ripple={this.state.ripple}
                dateStore={this.state.dateStore}/>} />
          <Route path="/" exact render={(props) => <Articles date={this.state.date} articles={this.state.articles}/>} />
          <Route path="/history" render={(props) => 
              <History 
                  bitcoin={this.state.bitcoin.historical}
                  ethereum={this.state.ethereum.historical}
                  ripple={this.state.ripple.historical}
                  litecoin={this.state.litecoin.historical}
                  tether={this.state.tether.historical}
                  eos={this.state.eos.historical}
                  bitcoinSV={this.state.bitcoinSV.historical}
                  bitcoinCash={this.state.bitcoinCash.historical}
                  dateLabels={this.state.dateStore.dateFull}/>
          } />
          <Route path="/news" render={(props) => <FullArticleList articles={this.state.articles}/>} />
          <Route path="/about" render={(props) => <AboutPage />} />
        
        </div>
      </Aux>
    );    
  }
}

export default App;
