export function source(){
    
    var postMessageHandler = function (msg) {
        var content = JSON.parse(msg.data);
        return content
    };

    window.addEventListener('message', postMessageHandler, false);

}   


