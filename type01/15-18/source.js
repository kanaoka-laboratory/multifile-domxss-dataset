var postMessageHandler = function (msg) {
    var content = JSON.parse(msg.data);
};

window.addEventListener('message', postMessageHandler, false);

export { content };
