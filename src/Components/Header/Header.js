import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';


const Header = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">CryptoDesk  <i className="fab fa-bitcoin fa-2x"></i></span>
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="price-history-link">30-Day History</Link>
            </li>
          </ul>
        </nav>
    );
}

export default Header;