export var postMessageHandler = function (msg) {
    var content = JSON.parse(msg.data);
    return content
};
