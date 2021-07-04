import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quotebox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quoteText: "",
            qInd: null,
            // TODO
        };
    }

    // Handleclick and other methods here

    render() {
        const qArray = [] // Store a bunch of quotes in here. Use an API ideally.
        

        return (
            <div className="outer"> 
                <div className="Inner">
                    <h3>This is where quotes would go</h3>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Quotebox />,
    document.getElementById('root')
  );