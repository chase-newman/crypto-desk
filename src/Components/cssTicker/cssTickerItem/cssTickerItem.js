import React from 'react';
import './cssTickerItem.css';


const CSSTickerItem = ({price, delta, tickerSymbol}) => (
        <div className="ticker-item">
            <span className="css-ticker-symbol">
                <strong>{tickerSymbol}: </strong> 
            </span> ${price} 
            <span style={delta > 0 ? {color: "#00ff00"} : {color: "red"}}>
                <strong> {delta > 0 ? "+" : null} {delta}</strong>
            </span>
        </div>
);


export default CSSTickerItem;