import React from 'react';
import './SidebarArticle.css';


const SidebarArticle = (props) => {
    let style = {
        borderBottom: "2px solid rgba(255,255,255,0.5)"
    }
    if(props.num < props.arraylength - 1) {
        style = {
            borderBottom: "2px solid rgba(255, 255, 255, 0.5)"
        }
    } else {
        style = {
            borderBottom: "2px soid black"
        }
    }
    return(
            <li className="list-group-item" style={style}>
                <p className="sidebar-article-category">{props.primaryCategory}</p>
                <img src={props.image} alt="sidebar-imag" className="img-thumbnail" /> 
                <h4>{props.title}</h4>
                <p>
                    <span className="main-article-details">
                        <strong>{props.domain}</strong>
                    </span>
                    <span className="main-article-details">
                        <strong>{props.date}</strong>
                    </span>
                </p>
                <p className="sidebar-description">{props.description}</p>
                <a 
                    className="btn btn-primary btn-sm" 
                    href={props.url} target="_blank" 
                    rel="noopener noreferrer" 
                    role="button">Learn more</a>
            </li>
    );
}


export default SidebarArticle;