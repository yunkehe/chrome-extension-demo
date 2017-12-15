function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function(){
        callback(false);
    }
    xhr.send();
}

setInterval(function(){
    httpRequest('http://www.google.com/', function(status){
        console.log('status', status, chrome)
        chrome.browserAction.setIcon({path: 'images/'+(status?'online.png':'offline.png')});
    });
},5000);