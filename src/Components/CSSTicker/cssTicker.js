import React, {Component} from 'react';
import axios from 'axios';
import Ticker from 'react-ticker';
import './cssTicker.css';

class CSSTicker extends Component {
        state = {
            bitcoin: null,
            ethereum: null,
            ripple: null,
            litecoin: null,
            tether: null,
            eos: null,
            bitcoinSV: null,
            bitcoinCash: null
        }
        
        componentDidMount() {
            
            axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,USDT,EOS,BSV,BCH&tsyms=USD,EUR&api_key=4c4f03a2edec941b0106c48d324569714c2b288190e02f402b73d5df8a62cd6a")
                .then(response => {
                      this.setState({
                          bitcoin: response.data.BTC.USD,
                          ethereum: response.data.ETH.USD,
                          ripple: response.data.XRP.USD,
                          litecoin: response.data.LTC.USD,
                          tether: response.data.USDT.USD,
                          eos: response.data.EOS.USD,
                          bitcoinSV: response.data.BSV.USD,
                          bitcoinCash: response.data.BCH.USD,
                      });
                });
        }


        render() {
                return (
                      <div className="tcontainer">
                        <div className="ticker-wrap">
                            <div className="ticker-move">
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>BTC: </strong> 
                                    </span> ${this.state.bitcoin} 
                                    <span style={this.props.bitcoinDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                        <strong> {this.props.bitcoinDelta > 0 ? "+" : null} {this.props.bitcoinDelta}</strong>
                                    </span>
                                </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>ETH: </strong>
                                    </span> ${this.state.ethereum} 
                                        <span style={this.props.ethereumDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.ethereumDelta > 0 ? "+" : null} {this.props.ethereumDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>XRP: </strong> 
                                    </span> ${this.state.ripple} 
                                        <span style={this.props.rippleDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.rippleDelta > 0 ? "+" : null} {this.props.rippleDelta}</strong>
                                        </span>
                                </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>LTC: </strong>
                                    </span> ${this.state.litecoin} 
                                        <span style={this.props.litecoinDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.litecoinDelta > 0 ? "+" : null} {this.props.litecoinDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>USDT: </strong>
                                    </span> ${this.state.tether} 
                                        <span style={this.props.tetherDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.tetherDelta > 0 ? "+" : null} {this.props.tetherDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>EOS: </strong>
                                    </span> ${this.state.eos} 
                                        <span style={this.props.eosDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.eosDelta > 0 ? "+" : null} {this.props.eosDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>BSV: </strong>
                                    </span> ${this.state.bitcoinSV} 
                                        <span style={this.props.bitcoinSVDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.bitcoinSVDelta > 0 ? "+" : null} {this.props.bitcoinSVDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>BCH: </strong>
                                    </span> ${this.state.bitcoinCash} 
                                        <span style={this.props.bitcoinCashDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.bitcoinCashDelta > 0 ? "+" : null} {this.props.bitcoinCashDelta}</strong>
                                        </span>
                                </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>BTC: </strong> 
                                    </span> ${this.state.bitcoin} 
                                    <span style={this.props.bitcoinDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                        <strong> {this.props.bitcoinDelta > 0 ? "+" : null} {this.props.bitcoinDelta}</strong>
                                    </span>
                                </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>ETH: </strong>
                                    </span> ${this.state.ethereum} 
                                        <span style={this.props.ethereumDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.ethereumDelta > 0 ? "+" : null} {this.props.ethereumDelta}</strong>
                                        </span>
                                </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>XRP: </strong> 
                                    </span> ${this.state.ripple} 
                                        <span style={this.props.rippleDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.rippleDelta > 0 ? "+" : null} {this.props.rippleDelta}</strong>
                                        </span>
                                </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>LTC: </strong>
                                    </span> ${this.state.litecoin} 
                                        <span style={this.props.litecoinDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.litecoinDelta > 0 ? "+" : null} {this.props.litecoinDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>USDT: </strong>
                                    </span> ${this.state.tether} 
                                        <span style={this.props.tetherDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.tetherDelta > 0 ? "+" : null} {this.props.tetherDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>EOS: </strong>
                                    </span> ${this.state.eos} 
                                        <span style={this.props.eosDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.eosDelta > 0 ? "+" : null} {this.props.eosDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>BSV: </strong>
                                    </span> ${this.state.bitcoinSV} 
                                        <span style={this.props.bitcoinSVDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.bitcoinSVDelta > 0 ? "+" : null} {this.props.bitcoinSVDelta}</strong>
                                        </span>
                                    </div>
                                <div className="ticker-item">
                                    <span className="css-ticker-symbol">
                                        <strong>BCH: </strong>
                                    </span> ${this.state.bitcoinCash} 
                                        <span style={this.props.bitcoinCashDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                                            <strong> {this.props.bitcoinCashDelta > 0 ? "+" : null} {this.props.bitcoinCashDelta}</strong>
                                        </span>
                                </div>
                            </div>
                        </div>
                      </div>
                    
                );            
        }
}

export default CSSTicker;