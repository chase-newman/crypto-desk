import React from 'react';
import './SidebarArticle.css';


const SidebarArticle = (props) => {
    console.log(props.num)
    let style = {
        borderBottom: "2px solid rgba(255,255,255,0.5)"
    }
    if(props.num < 2) {
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
                <p>{props.description}</p>
                <a className="btn btn-primary btn-sm" href="/" role="button">Learn more</a>
            </li>
    );
}


export default SidebarArticle;