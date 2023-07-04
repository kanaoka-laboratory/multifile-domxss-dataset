export function source(){
    var postMessageHandler = function (msg) {
        var content = msg.data;
        return content
    }
    
    window.addEventListener('message', postMessageHandler, false);
}