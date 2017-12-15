function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest('http://www.net.cn/static/customercare/yourip.asp', function(ip){
    var s = ip.match('<h2>(.*)<\/h2>')[1];
    document.getElementById('ip').innerText = 'IP: '+s;
});