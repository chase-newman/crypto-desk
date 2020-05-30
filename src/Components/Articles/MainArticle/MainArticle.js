import React from 'react';
import './MainArticle.css';

const MainArticle = (props) => {
    let imgUrl = "https://images.wsj.net/im-16358?width=620&size=1.5";
    let title;
    let date;
    let domain;
    let primaryCategory;
    if(props.mainArticle) {
        imgUrl = props.mainArticle[0].originalImageUrl;
        title = props.mainArticle[0].title;
        date = props.mainArticle[0].publishedAt;
        domain = props.mainArticle[0].sourceDomain;
        primaryCategory = props.mainArticle[0].primaryCategory;
    } else {
        console.log("Not Yet Loaded");
    }
    
    return(
            <div className="col-lg-7 col-md-8-col-sm-10">
                <div className="jumbotron">
                        <div className="lead-primary-category">{primaryCategory}</div>
                        <img
                            src={imgUrl}
                            alt="main-article-img" 
                            className="img-fluid"/>
                        <p className="lead">{title}</p>
                        <p>
                            <span className="main-article-details">
                                <strong>{domain}</strong>
                            </span>
                            <span className="main-article-details">
                                <strong>{date}</strong>
                            </span>
                        </p>
                        <a className="btn btn-primary btn-sm" href="/" role="button">Learn more</a>
                </div>
            </div>
    );
}

export default MainArticle;