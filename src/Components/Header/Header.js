import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';


const Header = () => {
    return(
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
                <Link to="/history" className="price-history-link">30-Day Coin History</Link>
            </li>
          </ul>
        </nav>
    );
}

export default Header;