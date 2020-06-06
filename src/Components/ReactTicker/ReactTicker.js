import React from 'react';
import Ticker from 'react-ticker';
import './ReactTicker.css';

const ReactTicker = (props) => {
        let bitcoinData = null;
        if(props.bitcoin) {
            bitcoinData = props.bitcoin
        }
        let ethereumData = null;
        if(props.ethereum) {
            ethereumData = props.ethereum
        }
        let rippleData = null;
        if(props.ethereum) {
            rippleData = props.ripple
        }
        let litecoinData = null;
        if(props.ethereum) {
            litecoinData = props.litecoin
        }
        let tetherData = null;
        if(props.ethereum) {
            tetherData = props.tether
        }
        let eosData = null;
        if(props.ethereum) {
            eosData = props.eos
        }
        let bitcoinSVData = null;
        if(props.ethereum) {
            bitcoinSVData = props.bitcoinSV
        }
        let bitcoinCashData = null;
        if(props.ethereum) {
            bitcoinCashData = props.bitcoinCash
        }
        return(
            <Ticker>
                {() => (
                    <div className="ticker-scroll">
                        <h5 className="coin-display">BTC: {bitcoinData ? bitcoinData : "Loading..."}</h5>
                        <h5 className="coin-display">ETH: {ethereumData ? ethereumData : "Loading..."}</h5>
                        <h5 className="coin-display">XRP: {rippleData ? rippleData : "Loading..."}</h5>
                        <h5 className="coin-display">LTC: {litecoinData ? litecoinData : "Loading..."}</h5>
                        <h5 className="coin-display">USDT: {tetherData ? tetherData : "Loading..."}</h5>
                        <h5 className="coin-display">BSV: {bitcoinSVData ? bitcoinSVData : "Loading..."}</h5>
                        <h5 className="coin-display">BCH: {bitcoinCashData ? bitcoinCashData : "Loading..."}</h5>
                    </div>
                )}
            </Ticker>    
                );
}

export default ReactTicker;