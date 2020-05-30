import React from 'react';
import MainArticle from './MainArticle/MainArticle';
import ArticleSidebarContainer from './ArticleSidebarContainer/ArticleSidebarContainer';
import './Articles.css';


const Articles = (props) => {
    return(
        <div className="row main-article-row">
            <MainArticle mainArticle={props.articles} />
            <ArticleSidebarContainer articles={props.articles}/>
        </div>
    );
}

export default Articles;
