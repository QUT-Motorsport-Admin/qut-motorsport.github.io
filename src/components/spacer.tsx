import * as React from "react";

import "./spacer.less";

export default class Spacer extends React.Component <{height: number}> {

  render(){
    return(
      <div className="spacer" style={{height: this.props.height + 'vh'}}></div>
    )
  }

}