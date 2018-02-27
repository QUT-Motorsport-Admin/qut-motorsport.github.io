import * as React from 'react';
import * as showdown from 'showdown';

//import the page set up object
import homepageConfig from '../config/pages'

export default class App extends React.Component <{}> {

componentDidMount(){
  
}

render(){
  //attempting to populate the innerhtml of the page element from a md file.
  //currently not rendering the md's html even though populate return the correct data.
  return(
    <div>
      <div>test</div>
      <div dangerouslySetInnerHTML={{ __html: this.populate() }}></div>
    </div>
  );
}

//gets the contents on a md file, turns it into HTML and returns it.
//
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
          //this console log prints the correct html, I can copypaste the output of this print into the above dangerouslySetInnerHTML and it works fine.
          //Not sure why the object isn't being passed correctly. 
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