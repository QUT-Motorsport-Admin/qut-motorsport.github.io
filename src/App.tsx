import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import the page set up object
import mdHelp from "./helpers/mdHelp";

//import page configuration
import siteConfig from "./config/site.config";

// Styles
import "./App.less";
import "./Skeleton.less";
import "./variables.less";

// Page Elements
import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default class App extends React.Component<{}, { html: String|undefined }> {

    constructor(props) {
        super(props);
    }
    
    assembleContent(configComps: any){
        return (
            class assembledContent extends React.Component {
                render() {
                    return (
                        configComps.map(config => {
                            if (config.type == "markdownDoc"){
                                console.log(config.config);
                                return<Content path={config.config}/>
                            }
                            else if (config.type == "jumbo"){
                                return<Jumbo/>
                            }
                        })
                    )
                }
            }
        )
    }

    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Navbar />
                        {siteConfig.map(config => {
                            return(<Route path={config.path} component={this.assembleContent(config.pageComponents)}/>)
                        })}
                    </div>
                </Router>
                <Footer />
            </div>
        )
    }
}