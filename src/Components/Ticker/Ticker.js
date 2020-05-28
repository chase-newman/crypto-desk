import React from 'react';
import './Ticker.css';


const Ticker = ({bitcoin, ethereum, ripple}) => {
    return(
        <div className="row ticker-row">
            <div className="col-lg-3 col-md-3 col-sm-8 bitcoin-ticker-col ticker">
                <h3>Bitcoin</h3>
                <p>${bitcoin}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-8 ethereum-ticker-col ticker">
                <h3>Ethereum</h3>
                <p>${ethereum}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-8 ripple-ticker-col ticker">
                <h3>Ripple</h3>
                <p>${ripple}</p>
            </div>
        </div>
    );
}

export default Ticker;