import * as React from 'react';
import * as showdown from 'showdown';

//import the page set up object
import homePageConfig from '../config/home.config';
import mdHelp from "./helpers/mdHelp";

export default class App extends React.Component<{}, { html: String|undefined }> {

    constructor(props) {
        super(props);
        this.state = {
            html: undefined
        };
    }
    
    // When the component loads, fetch the string URL, and set the this.state.html with the return
    componentDidMount(){mdHelp.convert("../config/home.header.md", this.setHtml)}
    // SetHTML wrapper
    setHtml = (_html) => this.setState({html: _html});

    render(){
        // Decide what to display, incase the fetch is slow
        const content = this.state.html ? this.state.html : <div>REACT APP! Loading MD...</div>
        return(
            // Render what ever
            <div dangerouslySetInnerHTML={mdHelp.htmlToReact(content)} />
        )
    }
}