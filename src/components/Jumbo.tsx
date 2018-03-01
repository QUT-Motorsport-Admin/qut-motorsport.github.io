import * as React from 'react';
import "./Jumbo.less";

export default class Jumbo extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="jumbo half">
                <div className="container">
                    <div className="six columns">
                        <h1 className="title">QUT Motorsport</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta lacus nisl, et imperdiet ante vehicula vitae. Sed eu ipsum nibh. Nunc aliquam fermentum consequat. </p>
                    </div>
                    <div className="six columns">
                            
                    </div>
                </div>
            </div>
        )
    }
}