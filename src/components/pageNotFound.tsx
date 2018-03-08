import * as React from "react";

import Spacer from "./spacer";

export default class PageNotFound extends React.Component <{}> {

  render(){
    return(
      <div>
        404, Page not found
        <Spacer height={60}/>
      </div>
    )
  }

}