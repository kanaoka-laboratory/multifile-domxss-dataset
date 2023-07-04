function sink(payload0) {

    var scriptElement = document.createElement("script");
    scriptElement.src = payload0;
    document.body.appendChild(scriptElement);
}

export { sink };
