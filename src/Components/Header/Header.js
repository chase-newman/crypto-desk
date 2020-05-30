import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';


const Header = () => {
    return(
        <nav className="navbar navbar-dark bg-dark sticky-top">
          <span className="navbar-brand mb-0 h1">CryptoDesk  <i className="fab fa-bitcoin fa-2x"></i></span>
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="about-header-link">About <i className="fas fa-sort-down"></i></Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="news-header-link">News <i className="fas fa-sort-down"></i></Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="price-history-link">30-Day History</Link>
            </li>
          </ul>
        </nav>
    );
}

export default Header;