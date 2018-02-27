import * as React from 'react';

export default class SubFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="sub-footer">
                <a href="#">Facebook - New Members</a>
                <a href="#">Facebook - Discussion</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        )
    }
}

