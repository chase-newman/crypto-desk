import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return(
        <div> 
            <div className="row about-row">
                <div className="col-6 about-col">
                    <h1>How I Made This App</h1>
                    <h3>Technologies</h3>
                </div>
            </div>
            <div className="row about-row">
                <div className="col-6 tech-col">
                    <h4>React</h4>
                    <img className="img-thumbnail" src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="react-thumbnail"/>
                </div>
            </div>
            <div className="row about-row">
                <div className="col-6 tech-col">
                    <h4>React Router</h4>
                    <img className="img-thumbnail" src="https://miro.medium.com/proxy/1*DU5n6M4z1mRlxEl_Co6EGg.jpeg" alt="react-thumbnail"/>
                </div>
            </div>
            <div className="row about-row">
                <div className="col-6 tech-col">
                    <h4>Firebase</h4>
                    <img className="img-thumbnail" src="https://firebase.google.com/images/social.png" alt="firebase-thumbnail" />
                </div>
            </div>
            <div className="row about-row">
                <div className="col-6 tech-col">
                    <h4>Axios</h4>
                    <img className="img-thumbnail" src="https://miro.medium.com/max/3164/1*80J2Wa21DYXxMbbtBziJHg.png" alt="axios-thumbnail" />
                </div>
            </div>
            <div className="row about-row">
                <div className="col-6 tech-col">
                    <h4>CryptoCompare</h4>
                    <img className="img-thumbnail" src="https://www.cryptocompare.com/media/35651334/0.png" alt="crytpo-thumbnail" />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;