var cue = cue || {};

cue.load = function(url) {
   
    // https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

    var httpRequest;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4) {
            // everything is good, the response is received
            if (httpRequest.status === 200) {
                // perfect!
                var data = httpRequest.responseText;

                console.log(data);

            } else {
                // there was a problem with the request,
                // for example the response may contain a 404 (Not Found)
                // or 500 (Internal Server Error) response code
                alert("Danger Mr. Robinson! Error!!!");
            }
        } else {
            // still not ready
            console.log("Danger Mr. Robinson! Not ready!!!");
        }

    };
    httpRequest.open('GET', url, true);
    httpRequest.send(null);

}
