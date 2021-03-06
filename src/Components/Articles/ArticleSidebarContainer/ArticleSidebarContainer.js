import React from 'react';
import SidebarArticle from './SidebarArticle/SidebarArticle';
import './ArticleSidebarContainer.css';


const ArticleSidebarContainer = (props) => {
    let data;
    let articleLength;
    if(props.articles) {
        data = props.articles.splice(2,3);
        articleLength = data.length;
        data = data.map((el,index) => {
             return <SidebarArticle 
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
        });
    } else {
        // console.log("Not Ready");
    }
    return(
        <div className="col-lg-5 col-md-8 col-sm-10 sidebar-col">
            <ul className="list-group">
                {data}
            </ul>
        </div>
    );
}

export default ArticleSidebarContainer;