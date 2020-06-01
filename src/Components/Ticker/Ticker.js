import React, {Component} from 'react';
import BitcoinChart from '../Charts/BitcoinChart/bitcoinChart';
import EthereumChart from '../Charts/EthereumChart/ethereumChart';
import RippleChart from '../Charts/RippleChart/rippleChart';
import LitecoinChart from '../Charts/LitcoinChart/litecoinChart';
import './Ticker.css';


class Ticker extends Component {
    state = {
        showSecondRow: false
    }
    
    
    arrowDownClickHandler = () => {
        this.setState({showSecondRow: true})
    }
    
    
    arrowUpClickHandler = () => {
        this.setState({showSecondRow: false})
    }
    
    render() {
    return(
        <div>
        <div className="row ticker-row">
            <div className="col-lg-3 col-md-6  col-sm-8 bitcoin-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Bitcoin</strong> <span className="ticker-symbol">BTC</span></h3>
                <p style={{color: "white"}}>${this.props.bitcoin}  <span style={{color: "#00ff00"}}><strong>+183.19</strong></span></p>
                <BitcoinChart />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ethereum-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Ethereum</strong> <span className="ticker-symbol">ETH</span></h3>
                <p style={{color: "white"}}>${this.props.ethereum}  <span style={{color: "#ff3333"}}><strong>-1.25</strong></span></p>
                <EthereumChart />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Ripple</strong> <span className="ticker-symbol">XRP</span></h3>
                <p style={{color: "white"}}>${this.props.ripple}  <span style={{color: "#ff3333"}}><strong>-0.0036</strong></span></p>
                <RippleChart />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Litecoin</strong> <span className="ticker-symbol">LTC</span></h3>
                <p style={{color: "white"}}>${this.props.litecoin}  <span style={{color: "#ff3333"}}><strong>-0.51</strong></span></p>
                <LitecoinChart />
                {this.state.showSecondRow ? null : 
                <i 
                    className="fas fa-arrow-circle-down fa-2x"
                    onClick={this.arrowDownClickHandler}></i>                    
                }

            </div>
        </div>
            {this.state.showSecondRow ? 
                        <div className="row ticker-row">
                <div className="col-lg-3 col-md-6 col-sm-8 bitcoin-ticker-col ticker">
                    <h3 className="ticker-coin"><strong>Tether</strong> <span className="ticker-symbol">USDT</span></h3>
                    <p style={{color: "white"}}>${this.props.tether}  <span style={{color: "#00ff00"}}><strong>+183.19</strong></span></p>
                    <BitcoinChart />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ethereum-ticker-col ticker">
                    <h3 className="ticker-coin"><strong>EOS</strong> <span className="ticker-symbol">EOS</span></h3>
                    <p style={{color: "white"}}>${this.props.eos}  <span style={{color: "#ff3333"}}><strong>-1.25</strong></span></p>
                    <EthereumChart />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker">
                    <h3 className="ticker-coin"><strong>Bitcoin SV</strong> <span className="ticker-symbol">BSV</span></h3>
                    <p style={{color: "white"}}>${this.props.bitcoinSV}  <span style={{color: "#ff3333"}}><strong>-0.0036</strong></span></p>
                    <RippleChart />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker">
                    <h3 className="ticker-coin"><strong>Bitcoin Cash</strong> <span className="ticker-symbol">BSH</span></h3>
                    <p style={{color: "white"}}>${this.props.bitcoinCash}  <span style={{color: "#ff3333"}}><strong>-0.51</strong></span></p>
                    <LitecoinChart />
                    <i 
                        className="fas fa-arrow-circle-up fa-2x"
                        onClick={this.arrowUpClickHandler}></i>
                </div>
            </div> : null }
        </div>
    );        
        
        
        
        
    }

}

export default Ticker;