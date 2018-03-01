import * as React from 'react';
import "./Jumbo.less";

export default class Jumbo extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="jumbo twothirds">
                <div className="container">
                        <h1>QUT Motorsport</h1>
                </div>
            </div>
        )
    }
}