import React from 'react';
import './SidebarArticle.css';


const SidebarArticle = (props) => {
    return(
            <li className="list-group-item">
                <p className="sidebar-article-category">{props.primaryCategory}</p>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a className="btn btn-primary btn-sm" href="/" role="button">Learn more</a>
            </li>
    );
}


export default SidebarArticle;