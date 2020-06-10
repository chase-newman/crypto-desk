import React from 'react';
import CSSTickerItem from './cssTickerItem/cssTickerItem';
import './cssTicker.css';

const CSSTicker = ({ bitcoin, ethereum, ripple, litecoin, tether, eos, bitcoinSV, bitcoinCash }) => {
        let coinTickerArray = [bitcoin, ethereum, ripple, litecoin, tether, eos, bitcoinSV, bitcoinCash,
                               bitcoin, ethereum, ripple, litecoin, tether, eos, bitcoinSV, bitcoinCash]
        coinTickerArray = coinTickerArray.map((el, index) => {
            let tickerSymbol;
            if(el === bitcoin) {
                tickerSymbol = "BTC"
            } else if (el === ethereum) {
                tickerSymbol = "ETH"
            } else if (el === ripple) {
                tickerSymbol = "XRP"
            } else if (el === litecoin) {
                tickerSymbol = "LTC"
            } else if (el === tether) {
                tickerSymbol = "USDT"
            } else if (el === eos) {
                tickerSymbol = "EOS"
            } else if (el === bitcoinSV) {
                tickerSymbol = "BSV"
            } else {
                tickerSymbol = "BCH"
            }
            return <CSSTickerItem price={el.price} delta={el.delta} tickerSymbol={tickerSymbol} key={index}/>
        });
    
        return (
                      <div className="tcontainer">
                        <div className="ticker-wrap">
                            <div className="ticker-move">
                                {coinTickerArray}
                            </div>
                        </div>
                      </div>
                    );            
                }
                
export default CSSTicker;