import React from 'react';
import SidebarArticle from './SidebarArticle/SidebarArticle';
import './ArticleSidebarContainer.css';


const ArticleSidebarContainer = (props) => {
    let data;
    if(props.articles) {
        data = props.articles.splice(2,3);
        console.log(data);
        data = data.map((el,index) => {
             return <SidebarArticle 
                        title={el.title} 
                        key={index} 
                        num={index}
                        primaryCategory={el.primaryCategory} 
                        image={el.originalImageUrl}
                        description={el.description}/>
        });
    } else {
        console.log("Not Ready");
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