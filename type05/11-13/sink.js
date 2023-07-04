function sink(payload0) {
    
    var divElement = document.createElement('div');
    var resourceUri = payload0;
    fetch(resourceUri).then(
        function (response) {
            return response.text();
        }).then(function (body) {
            divElement.innerHTML = body;
        });
    document.body.appendChild(divElement);
}

export { sink };
