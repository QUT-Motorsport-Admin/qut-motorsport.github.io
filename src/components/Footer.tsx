import * as React from 'react';

import SubFooter from "./Footer/SubFooter";
import MainFooter from "./Footer/MainFooter";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <SubFooter />
                <MainFooter />
            </div>
        )
    }
}