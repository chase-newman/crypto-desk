import React, {Component} from 'react';
import Chart from '../Charts/Chart/Chart';
import BitcoinChart from '../Charts/BitcoinChart/bitcoinChart';
import EthereumChart from '../Charts/EthereumChart/ethereumChart';
import RippleChart from '../Charts/RippleChart/rippleChart';
import LitecoinChart from '../Charts/LitcoinChart/litecoinChart';
import TetherChart from '../Charts/TetherChart/tetherChart';
import EOSChart from '../Charts/EOSChart/eosChart';
import BitcoinSVChart from '../Charts/BitcoinSVChart/bitcoinSVChart';
import BitcoinCashChart from '../Charts/BitcoinCashChart/bitcoinCashChart';
import './Ticker.css';


class TickerTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSecondRow: false,
            
        }
        
        // if(this.props.bitcoinHistorical) {
        //     this.props.bitcoinHistorical.length = 3
        // }
    }
    
    onComponentDidMount() {
        // if(this.props.bitcoinHistorical) {
        //     this.props.bitcoinHistorical.length = 3
        // }
    }
            

    arrowDownClickHandler = () => {
        this.setState({showSecondRow: true})
    }
    
    arrowUpClickHandler = () => {
        this.setState({showSecondRow: false})
    }
    
    render() {
        
    if(this.props.dateLabels) {
        if(this.props.dateLabels.length > 5) {
            this.props.dateLabels.shift();
            this.props.bitcoinHistorical.shift();
            this.props.ethereumHistorical.shift();
            this.props.rippleHistorical.shift();
            this.props.litecoinHistorical.shift();
            this.props.tetherHistorical.shift();
            this.props.eosHistorical.shift();
            this.props.bitcoinSVHistorical.shift();
            this.props.bitcoinCashHistorical.shift();
        }
    }
    
    
    return(
        <div>
        <div className="row ticker-row">
            <div className="col-lg-3 col-md-6  col-sm-8 bitcoin-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Bitcoin</strong> <span className="ticker-symbol">BTC</span></h3>
                <p style={{color: "white"}}>${this.props.bitcoin}  <span style={this.props.bitcoinDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.bitcoinDelta > 0 ? <span>+</span> : <span></span>}{this.props.bitcoinDelta}
                        </strong>
                    </span>
                </p>
                <BitcoinChart 
                    dateLabels={this.props.dateLabels}
                    bitcoinData={this.props.bitcoinHistorical} 
                    bitcoinDelta={this.props.bitcoinDelta}/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ethereum-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Ethereum</strong> <span className="ticker-symbol">ETH</span></h3>
                <p style={{color: "white"}}>${this.props.ethereum}  <span style={this.props.ethereumDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.ethereumDelta > 0 ? <span>+</span> : <span></span>}{this.props.ethereumDelta}
                        </strong>
                    </span>
                </p>
                <EthereumChart 
                    dateLabels={this.props.dateLabels}
                    ethereumData={this.props.ethereumHistorical}
                    ethereumDelta={this.props.ethereumDelta} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Ripple</strong> <span className="ticker-symbol">XRP</span></h3>
                <p style={{color: "white"}}>${this.props.ripple}  <span style={this.props.rippleDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.rippleDelta > 0 ? <span>+</span> : <span></span>}{this.props.rippleDelta}
                        </strong>
                    </span>
                </p>
                <RippleChart 
                    dateLabels={this.props.dateLabels}
                    rippleData={this.props.rippleHistorical}
                    rippleDelta={this.props.rippleDelta}/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Litecoin</strong> <span className="ticker-symbol">LTC</span></h3>
                <p style={{color: "white"}}>${this.props.litecoin}  <span style={this.props.litecoinDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.litecoinDelta > 0 ? <span>+</span> : <span></span>}{this.props.litecoinDelta}
                        </strong>
                    </span>
                </p>
                <LitecoinChart 
                    dateLabels={this.props.dateLabels}
                    litecoinData={this.props.litecoinHistorical}
                    litecoinDelta={this.props.litecoinDelta} />
                {this.state.showSecondRow ? null : 
                <i 
                    className="fas fa-arrow-circle-down fa-2x"
                    onClick={this.arrowDownClickHandler}></i>                    
                }

            </div>
        </div>
            {this.state.showSecondRow ? 
                <div className="row ticker-row">
                <div className="col-lg-3 col-md-6 col-sm-8 bitcoin-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>Tether</strong> <span className="ticker-symbol">USDT</span></h3>
                    <p style={{color: "white"}}>${this.props.tether}  <span style={this.props.tetherDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.tetherDelta > 0 ? <span>+</span> : <span></span>}{this.props.tetherDelta}
                            </strong>
                        </span>
                    </p>
                    <TetherChart                     
                        dateLabels={this.props.dateLabels}
                        tetherData={this.props.tetherHistorical}
                        tetherDelta={this.props.tetherDelta} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ethereum-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>EOS</strong> <span className="ticker-symbol">EOS</span></h3>
                    <p style={{color: "white"}}>${this.props.eos}  <span style={this.props.eosDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.eosDelta > 0 ? <span>+</span> : <span></span>}{this.props.eosDelta}
                            </strong>
                        </span>
                    </p>
                    <EOSChart
                        dateLabels={this.props.dateLabels}
                        eosData={this.props.eosHistorical}
                        eosDelta={this.props.eosDelta}/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>Bitcoin SV</strong> <span className="ticker-symbol">BSV</span></h3>
                    <p style={{color: "white"}}>${this.props.bitcoinSV}  <span style={this.props.bitcoinSVDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.bitcoinSVDelta > 0 ? <span>+</span> : <span></span>}{this.props.bitcoinSVDelta}
                            </strong>
                        </span>
                    </p>
                    <BitcoinSVChart 
                        dateLabels={this.props.dateLabels}
                        bitcoinSVData={this.props.bitcoinSVHistorical}
                        bitcoinSVDelta={this.props.bitcoinSVDelta}  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>Bitcoin Cash</strong> <span className="ticker-symbol">BSH</span></h3>
                    <p style={{color: "white"}}>${this.props.bitcoinCash}  <span style={this.props.bitcoinCashDelta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.bitcoinCashDelta > 0 ? <span>+</span> : <span></span>}{this.props.bitcoinCashDelta}
                            </strong>
                        </span>
                    </p>
                    <BitcoinCashChart
                        dateLabels={this.props.dateLabels}
                        bitcoinCashData={this.props.bitcoinCashHistorical}
                        bitcoinCashDelta={this.props.bitcoinCashDelta}/>
                    <i 
                        className="fas fa-arrow-circle-up fa-2x"
                        onClick={this.arrowUpClickHandler}></i>
                </div>
            </div> : null }
        </div>
    );        
        
        
        
        
    }

}

export default TickerTwo;