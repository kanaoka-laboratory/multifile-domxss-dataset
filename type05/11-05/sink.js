function sink(payload0) {

    var baseElement = document.createElement("base");
    baseElement.href = payload0;
    document.head.appendChild(baseElement);

    var scriptTag = document.createElement("script");
    scriptTag.src = "exploit.js";
    document.body.appendChild(scriptTag);
}

export { sink };
