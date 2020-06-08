import React from 'react';
import SidebarArticle from '../Articles/ArticleSidebarContainer/SidebarArticle/SidebarArticle';
import './FullArticleList.css';


const FullArticleList = (props) => {
    let articles;
    let articleLength;
    if(props.articles) {
        articleLength = props.articles.length
        console.log(articleLength)
        articles = props.articles.map((el, index) => {
          return(
                <SidebarArticle 
                        arraylength={articleLength}
                        title={el.title} 
                        key={index} 
                        num={index}
                        date={el.publishedAt}
                        domain={el.sourceDomain}
                        primaryCategory={el.primaryCategory} 
                        image={el.originalImageUrl}
                        description={el.description}
                        url={el.url}/>
            ); 
        });          
    }
  
   
    
    return(
        <div>
            <div className="row justify-content-center"> 
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <h1 className="full-articles-headline">Articles</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    {articles}
                </div>
            </div>
        </div>
    );
}


export default FullArticleList;