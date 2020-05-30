import React from 'react';
import BitcoinChart from '../Charts/bitcoinChart';
import EthereumChart from '../Charts/ethereumChart';
import RippleChart from '../Charts/rippleChart';
import LitecoinChart from '../Charts/litecoinChart';
import './Ticker.css';


const Ticker = ({bitcoin, ethereum, ripple}) => {
    return(
        <div className="row ticker-row">
            <div className="col-lg-3 col-md-4 col-sm-8 bitcoin-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Bitcoin</strong> <span className="ticker-symbol">BTC</span></h3>
                <p style={{color: "white"}}>${bitcoin}  <span style={{color: "#00ff00"}}><strong>+183.19</strong></span></p>
                <BitcoinChart />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-8 ethereum-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Ethereum</strong> <span className="ticker-symbol">ETH</span></h3>
                <p style={{color: "white"}}>${ethereum}  <span style={{color: "#ff3333"}}><strong>-1.25</strong></span></p>
                <EthereumChart />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-8 ripple-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Ripple</strong> <span className="ticker-symbol">XRP</span></h3>
                <p style={{color: "white"}}>${ripple}  <span style={{color: "#ff3333"}}><strong>-0.0036</strong></span></p>
                <RippleChart />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-8 ripple-ticker-col ticker">
                <h3 className="ticker-coin"><strong>Litecoin</strong> <span className="ticker-symbol">LTC</span></h3>
                <p style={{color: "white"}}>${ripple}  <span style={{color: "#ff3333"}}><strong>-0.51</strong></span></p>
                <LitecoinChart />
            </div>
        </div>
    );
}

export default Ticker;