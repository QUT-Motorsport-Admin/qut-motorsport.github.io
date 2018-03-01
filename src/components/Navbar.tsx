import * as React from 'react';
import "./Navbar.less";

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="nav">
                <div className="container">
                    <div className="left">
                        {/* <img className="navLogo" src="images/logo-qutmotorsport-old-hash.png"> */}
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 498.1" className="navLogo">
                            <g className="hash Layer_1">
                                <polygon points="342,4 288.8,168.5 122.3,168.5 175.5,4"/>
                                <polygon points="235.7,332.9 182.5,497.4 16,497.4 69.2,332.9"/>
                            </g>
                            <g className="hash Layer_2">
                                <polygon points="455.3,168.5 402.2,332.9 235.7,332.9 288.8,168.5"/>
                            </g>
                            <g className="hash Layer_3">
                                <polygon points="675,4 621.8,168.5 455.3,168.5 508.5,4"/>
                                <polygon points="568.7,332.9 515.5,497.4 349,497.4 402.2,332.9"/>
                            </g>
                            <g className="hash Layer_4">
                                <polygon points="788.3,168.5 735.2,332.9 568.7,332.9 621.8,168.5"/>
                            
                            </g>
                            <g className="hash Layer_5">
                                <polygon points="1008,4 954.8,168.5 788.3,168.5 841.5,4"/>
                                <polygon points="901.7,332.9 848.5,497.4 682,497.4 735.2,332.9"/>
                            </g>
                        </svg>
                        <span className="navTitle">QUT Motorsport</span>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Teams</a>
                                <ul>
                                    <li><a href="">Mechanical</a></li>
                                    <li><a href="">Electrical</a></li>
                                    <li><a href="">Software</a></li>
                                </ul>
                            </li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}