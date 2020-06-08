import React from 'react';
import CSSTicker from '../CSSTicker/cssTicker';
import ReactTicker from '../ReactTicker/ReactTicker';
import {Link} from 'react-router-dom'
import './Header.css';


const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
                <Link to="/" className="navbar-brand">CryptoDesk <i className="fab fa-bitcoin fa-2x"></i></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className="about-header-link">About <i className="fas fa-sort-down"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news" className="news-header-link">News <i className="fas fa-sort-down"></i></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/history" className="price-history-link">Coin History</Link>
                    </li>
                </ul>
                <CSSTicker 
                    bitcoinDelta={props.bitcoinDelta}
                    ethereumDelta={props.ethereumDelta}
                    rippleDelta={props.rippleDelta}
                    litecoinDelta={props.litecoinDelta}
                    tetherDelta={props.tetherDelta}
                    eosDelta={props.eosDelta}
                    bitcoinSVDelta={props.bitcoinSVDelta}
                    bitcoinCashDelta={props.bitcoinCashDelta}/>
        </nav>
    );
}

export default Header;