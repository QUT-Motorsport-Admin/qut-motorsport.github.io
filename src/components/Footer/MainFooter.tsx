import * as React from 'react';
import "./MainFooter.less";

export default class MainFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="footer clearfix">
                <div className="container">
                    <div className="four columns">
                        {/* <!-- All of our affiliates --> */}
                        <ul>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                        </ul>
                    </div>
                    <div className="four columns footer-div">
                        <ul>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                        </ul>
                    </div>
                    <div className="four columns footer-div">
                        {/* <!-- All of our stuff { Software, Logins, GitHub, Slack etc } --> */}
                        <ul>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                            <li><a href="">Hello World</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

