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
            dateLabelsFiveDay: null,
            bitcoinFiveDay: null,
            ethereumFiveDay: null,
            rippleFiveDay: null,
            litecoinFiveDay: null,
            tetherFiveDay: null,
            eosFiveDay: null,
            bitcoinSVFiveDay: null,
            bitcoinCashFiveDay: null
            
        }
        console.log(props)
        // if(this.props.bitcoinHistorical) {
        //     this.props.bitcoinHistorical.length = 3
        // }
    }
    
    onComponentDidMount() {
        // if(this.props.bitcoinHistorical) {
        //     this.props.bitcoinHistorical.length = 3
        // }
        this.setState({
            dateLabelsFiveDay: this.props.dateLabels,
            bitcoinFiveDay: this.props.bitcoinHistorical,
            ethereumFiveDay: this.props.ethereumHistorical,
            rippleFiveDay: this.props.rippleHistorical,
            litecoinFiveDay: this.props.litecoinHistorical,
            tetherFiveDay: this.props.tetherHistorical,
            eosFiveDay: this.props.eosHistorical,
            bitcoinSVFiveDay: this.props.bitcoinSVHistorical,
            bitcoinCashFiveDay: this.props.bitcoinCashHistorical
        });
    }
            

    arrowDownClickHandler = () => {
        this.setState({showSecondRow: true})
    }
    
    arrowUpClickHandler = () => {
        this.setState({showSecondRow: false})
    }
    
    render() {
        
    if(this.props.dateLabels) {
            let dateLabelsFiveDay = this.props.dateLabels.slice(0)
            let bitcoinFiveDay = this.props.bitcoinHistorical.slice(0);
            let ethereumFiveDay = this.props.ethereumHistorical.slice(0);
            let rippleFiveDay = this.props.rippleHistorical.slice(0);
            let litecoinFiveDay = this.props.litecoinHistorical.slice(0);
            let tetherFiveDay = this.props.tetherHistorical.slice(0);
            let eosFiveDay = this.props.eosHistorical.slice(0);
            let bitcoinSVFiveDay = this.props.bitcoinSVHistorical.slice(0);
            let bitcoinCashFiveDay = this.props.bitcoinCashHistorical.slice(0);
        if(this.props.dateLabels.length > 5) {
            dateLabelsFiveDay.shift();
            bitcoinFiveDay.shift();
            console.log(bitcoinFiveDay)
        }
    }
    
    
    return(
        <div>
        <div className="row ticker-row">
            <div className="col-lg-3 col-md-6  col-sm-8 bitcoin-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Bitcoin</strong> <span className="ticker-symbol">BTC</span></h3>
                <p style={{color: "white"}}>${this.props.bitcoin.price}  <span style={this.props.bitcoin.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.bitcoinDelta > 0 ? <span>+</span> : <span></span>}{this.props.bitcoin.delta}
                        </strong>
                    </span>
                </p>
                <BitcoinChart 
                    dateLabels={this.props.dateStore.dateFiveDay}
                    bitcoinData={this.props.bitcoin.fiveDay} 
                    bitcoinDelta={this.props.bitcoin.delta}/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ethereum-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Ethereum</strong> <span className="ticker-symbol">ETH</span></h3>
                <p style={{color: "white"}}>${this.props.ethereum.price}  <span style={this.props.ethereum.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.ethereum.delta > 0 ? <span>+</span> : <span></span>}{this.props.ethereum.delta}
                        </strong>
                    </span>
                </p>
                <EthereumChart 
                    dateLabels={this.props.dateStore.dateFiveDay}
                    ethereumData={this.props.ethereum.fiveDay}
                    ethereumDelta={this.props.ethereum.delta} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Ripple</strong> <span className="ticker-symbol">XRP</span></h3>
                <p style={{color: "white"}}>${this.props.ripple.price}  <span style={this.props.ripple.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.ripple.delta > 0 ? <span>+</span> : <span></span>}{this.props.ripple.delta}
                        </strong>
                    </span>
                </p>
                <RippleChart 
                    dateLabels={this.props.dateStore.dateFiveDay}
                    rippleData={this.props.ripple.fiveDay}
                    rippleDelta={this.props.ripple.delta}/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                <h3 className="ticker-coin"><strong>Litecoin</strong> <span className="ticker-symbol">LTC</span></h3>
                <p style={{color: "white"}}>${this.props.litecoin.price}  <span style={this.props.litecoin.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                        <strong>
                            {this.props.litecoin.delta > 0 ? <span>+</span> : <span></span>}{this.props.litecoin.delta}
                        </strong>
                    </span>
                </p>
                <LitecoinChart 
                    dateLabels={this.props.dateStore.dateFiveDay}
                    litecoinData={this.props.litecoin.fiveDay}
                    litecoinDelta={this.props.litecoin.delta} />
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
                    <p style={{color: "white"}}>${this.props.tether.price}  <span style={this.props.tether.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.tether.delta > 0 ? <span>+</span> : <span></span>}{this.props.tether.delta}
                            </strong>
                        </span>
                    </p>
                    <TetherChart                     
                        dateLabels={this.props.dateStore.dateFiveDay}
                        tetherData={this.props.tether.fiveDay}
                        tetherDelta={this.props.tether.delta} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ethereum-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>EOS</strong> <span className="ticker-symbol">EOS</span></h3>
                    <p style={{color: "white"}}>${this.props.eos.price}  <span style={this.props.eos.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.eos.delta > 0 ? <span>+</span> : <span></span>}{this.props.eos.delta}
                            </strong>
                        </span>
                    </p>
                    <EOSChart
                        dateLabels={this.props.dateStore.dateFiveDay}
                        eosData={this.props.eos.fiveDay}
                        eosDelta={this.props.eos.delta}/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>Bitcoin SV</strong> <span className="ticker-symbol">BSV</span></h3>
                    <p style={{color: "white"}}>${this.props.bitcoinSV.price}  <span style={this.props.bitcoinSV.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.bitcoinSV.delta > 0 ? <span>+</span> : <span></span>}{this.props.bitcoinSV.delta}
                            </strong>
                        </span>
                    </p>
                    <BitcoinSVChart 
                        dateLabels={this.props.dateStore.dateFiveDay}
                        bitcoinSVData={this.props.bitcoinSV.fiveDay}
                        bitcoinSVDelta={this.props.bitcoinSV.delta}  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 ripple-ticker-col ticker-two">
                    <h3 className="ticker-coin"><strong>Bitcoin Cash</strong> <span className="ticker-symbol">BSH</span></h3>
                    <p style={{color: "white"}}>${this.props.bitcoinCash.price}  <span style={this.props.bitcoinCash.delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                            <strong>
                                {this.props.bitcoinCash.delta > 0 ? <span>+</span> : <span></span>}{this.props.bitcoinCash.delta}
                            </strong>
                        </span>
                    </p>
                    <BitcoinCashChart
                        dateLabels={this.props.dateStore.dateFiveDay}
                        bitcoinCashData={this.props.bitcoinCash.fiveDay}
                        bitcoinCashDelta={this.props.bitcoinCash.delta}/>
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