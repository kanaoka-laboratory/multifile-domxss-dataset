function sink(payload0) {

    var embedElement = document.createElement("embed");
    embedElement.src = payload0;
    document.body.appendChild(embedElement);
}

export { sink };
