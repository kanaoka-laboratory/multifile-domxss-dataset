function sink(payload0) {

    var objectElement = document.createElement("object");
    objectElement.data = payload0;
    document.body.appendChild(objectElement);
}

export { sink };
