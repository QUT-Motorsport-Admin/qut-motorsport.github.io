import * as React from 'react';

//import the page set up object
import mdHelp from "../helpers/mdHelp";

import "./Content.less";

export default class Content extends React.Component<{ path: string }, { html: String|undefined }>  {

    constructor(props) {
        super(props);
        this.state = {
            html: undefined
        };
    }

    // When the component loads, fetch the string URL, and set the this.state.html with the return
    componentDidMount(){ 
        mdHelp.fetch("config" + this.props.path, this.setHtml)
        //mdHelp.fetch("config/home.header.md", this.setHtml)
    }
    // SetHTML wrapper, annoymised function (Arrow function), its the reason it works
    setHtml = (_html) => {
        this.setState({html: _html});
        //console.log(_html);
    };

    render(){
        // Decide what to display, incase the fetch is slow
        const content = this.state.html ? this.state.html : <div>REACT APP! Loading MD...</div>
        return(
            <div dangerouslySetInnerHTML={mdHelp.htmlToReact(content)} />
        )
    }
}