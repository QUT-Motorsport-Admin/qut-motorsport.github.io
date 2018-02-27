// This is a file to read a RAW MD file form the server
import * as showdown from 'showdown';

export default class mdHelp {

    // The main fetch class, needs to be refactored down at some point
    // so that its functional
    static convert(url, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = function(){
            if (xhttp.readyState === 4 && (xhttp.status === 200 || xhttp.status === 0)) {
                    var converter = new showdown.Converter(); 
                    var MDasHTML = converter.makeHtml(this.responseText).toString();
                    if(MDasHTML && xhttp.responseText){
                        callback(MDasHTML); 
                    }  
            }
        };
        xhttp.send(null);
    }

    // Tiny wrapper to help with react being react
    static htmlToReact(html) {
        return {
            __html: html
        }
    }
}

