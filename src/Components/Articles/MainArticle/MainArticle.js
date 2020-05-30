import React from 'react';
import './MainArticle.css';

const MainArticle = (props) => {
    
    
    let imgUrl = "https://images.wsj.net/im-16358?width=620&size=1.5";
    let title;
    let date;
    let domain;
    let description;
    let primaryCategory;
    let url;
    let hotness;
    let primaryCategoryTwo;
    let imgUrlTwo;
    let titleTwo;
    let domainTwo;
    let dateTwo;
    let descriptionTwo;
    let urlTwo;
    let hotnessTwo;
    
    
    if(props.mainArticle) {
        imgUrl = props.mainArticle[0].originalImageUrl;
        title = props.mainArticle[0].title;
        date = props.mainArticle[0].publishedAt;
        domain = props.mainArticle[0].sourceDomain;
        description = props.mainArticle[0].description;
        primaryCategory = props.mainArticle[0].primaryCategory;
        url = props.mainArticle[0].url;
        hotness = props.mainArticle[0].hotness.toFixed(2);
        primaryCategoryTwo = props.mainArticle[1].primaryCategory;
        imgUrlTwo = props.mainArticle[1].originalImageUrl;
        titleTwo = props.mainArticle[1].title;
        domainTwo = props.mainArticle[1].sourceDomain;
        dateTwo = props.mainArticle[1].publishedAt;
        descriptionTwo = props.mainArticle[1].description;
        urlTwo = props.mainArticle[1].url;
        hotnessTwo = props.mainArticle[1].hotness.toFixed(2);
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
                        <h3 className="lead">{title} </h3>
                        <p>
                            <span className="main-article-details">
                                <strong>{domain}</strong>
                            </span>
                            <span className="main-article-details">
                                <strong>{date}</strong>
                            </span>
                        </p>
                        <p>
                            <i class="fas fa-fire fire-one"></i> 
                            <span id="hotness-one">+{hotness}</span>
                        </p>
                        <p className="main-article-description">{description}</p>
                        <a 
                            className="btn btn-primary btn-sm" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={url} 
                            role="button">Learn more</a>
                </div>
                <div className="jumbotron">
                        <div className="lead-primary-category">{primaryCategoryTwo}</div>
                        <img
                            src={imgUrlTwo}
                            alt="main-article-img" 
                            className="img-fluid"/>
                        <h3 className="lead">{titleTwo} </h3>
                        <p>
                            <span className="main-article-details">
                                <strong>{domainTwo}</strong>
                            </span>
                            <span className="main-article-details">
                                <strong>{dateTwo}</strong>
                            </span>
                        </p>
                        <p>
                            <i class="fas fa-fire fire-two"></i> 
                            <span id="hotness-two">+{hotnessTwo}</span>
                        </p>
                        <p className="main-article-description">{descriptionTwo}</p>
                        <a 
                            className="btn btn-primary btn-sm" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={urlTwo}
                            role="button">Learn more</a>
                </div>
            </div>
    );
}

export default MainArticle;