import { source } from './source.js';

const payload = source()

var divElement = document.createElement('div');
var resourceUri = payload;
fetch(resourceUri).then(
    function (response) {
        return response.text();
    }).then(function (body) {
        divElement.innerHTML = body;
    });
document.body.appendChild(divElement);