import React, {Component} from 'react';
import Ticker from 'react-ticker';
// import './ReactTicker.css';

class ReactTicker extends Component {
    state = {
        
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return(
                <Ticker>
                    {() => (
                        <div>
                            <h1 className="react-ticker-element">This is the Headline of element!</h1>
                        </div>
                    )}
                </Ticker>    
        );
    }
}

export default ReactTicker;