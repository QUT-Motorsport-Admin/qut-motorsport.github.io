import * as React from 'react';
import * as showdown from 'showdown';

export default class App extends React.Component <{}> {

componentDidMount(){
  
}

render(){
  return(
    <div>
      <div>test</div>
      <div dangerouslySetInnerHTML={{ __html: this.populate() }}></div>
    </div>
  );
}

  populate(): any{
    console.log("populate() ran");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../config/home.md", true);
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState === 4){
        if (xhttp.status === 200 || xhttp.status === 0){
          console.log("got a resp");
          console.log(xhttp.responseText);
          var converter = new showdown.Converter(); 
          var MDasHTML = converter.makeHtml(this.responseText).toString();
          console.log("This is the HTML output:"+ MDasHTML);
          if(MDasHTML && xhttp.responseText){
             return(MDasHTML); 
          }  
        }
      }
    };
    xhttp.send(null);
  }
  // fetch('./config/home.md')
  //   .then(response => response.text())
  //   .then(text => console.log(text));

}