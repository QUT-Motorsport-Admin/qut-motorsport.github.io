import * as React from 'react';

import "./Content.less";

export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
                {this.props.children}
            </div>
        )
    }
}