function sink(payload0) {

    var linkElement = document.createElement("link");
    linkElement.rel = "import";
    linkElement.href = payload0;
    document.body.appendChild(linkElement);
}

export { sink };
