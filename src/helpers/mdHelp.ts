// This is a file to read a RAW MD file form the server
import * as showdown from 'showdown';

export default class mdHelp {

    // Will Fetch any URL given
    static fetch(url, callback) {
        //console.log("[ReadMD] URL: " + url);
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = function(){
            if (xhttp.readyState === 4 && (xhttp.status === 200 || xhttp.status === 0)) {
                //console.log("[ReadMD] Sucessful Get!");
                //console.log("[ReadMD] Text: " + this.responseText);
                mdHelp.convert(this.responseText, callback);
            }
        };
        xhttp.send(null);
    }

    // Will convert any raw MD to HTML
    static convert(raw, callback) {
        var converter = new showdown.Converter(); 
        var MDasHTML = converter.makeHtml(raw).toString();
        if(MDasHTML && raw != null){
            callback(MDasHTML); 
        }  
    }

    // Tiny wrapper to help with react being react
    static htmlToReact(html) {
        return {
            __html: html
        }
    }
}

