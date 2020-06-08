import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return(
        <div> 
            <div className="row about-row">
                <div className="col-6 about-col">
                    <h1>Technologies</h1>
                </div>
            </div>
            <div className="row about-row">
                <div
                    style={{borderBottom: "2px solid white"}}
                    className="col-lg-4 col-md-6 col-sm-8 tech-col">
                    <h4>React</h4>
                    <img className="img-thumbnail" src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="react-thumbnail"/>
                    <p>App created with Create React App</p>
                </div>
            </div>
            <div className="row about-row">
                <div 
                    style={{borderBottom: "2px solid white"}}
                    className="col-lg-4 col-md-6 col-sm-8 tech-col">
                    <h4>React Router</h4>
                    <img className="img-thumbnail" src="https://miro.medium.com/proxy/1*DU5n6M4z1mRlxEl_Co6EGg.jpeg" alt="react-thumbnail"/>
                    <p>React Routing used to handle App Navigation</p>
                </div>
            </div>
            <div className="row about-row">
                <div 
                    style={{borderBottom: "2px solid white"}}
                    className="col-lg-4 col-md-6 col-sm-8 tech-col">
                    <h4>Firebase</h4>
                    <img className="img-thumbnail" src="https://firebase.google.com/images/social.png" alt="firebase-thumbnail" />
                    <p>Firebase technology used to store persistent data</p>
                </div>
            </div>
            <div className="row about-row">
                <div 
                    style={{borderBottom: "2px solid white"}}
                    className="col-lg-6 col-md-8 col-sm-8 tech-col">
                    <h4>Axios</h4>
                    <img className="img-thumbnail" src="https://miro.medium.com/max/3164/1*80J2Wa21DYXxMbbtBziJHg.png" alt="axios-thumbnail" />
                    <p>Axios used for HTTP request to get data from APIs</p>
                </div>
            </div>
            <div className="row about-row">
                <div 
                    style={{borderBottom: "2px solid white"}}
                    className="col-lg-6 col-md-8 col-sm-8 tech-col">
                    <h4>CryptoCompare</h4>
                    <img className="img-thumbnail" src="https://www.cryptocompare.com/media/35651334/0.png" alt="crytpo-thumbnail" />
                    <p>CryptoCompare provides the cryptocurrency pricing data</p>
                </div>
            </div>
            <div className="row about-row">
                <div 
                    className="col-lg-6 col-md-8 col-sm-8 tech-col">
                    <h4>CryptoControl</h4>
                    <img className="img-thumbnail" src="https://theccpress.com/wp-content/uploads/2018/10/cryptocontrol-1024x538.png" alt="crytpo-thumbnail" />
                    <p>CryptoContorl is a cryptocurrency news aggregator that provides the news articles featured on this site</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;