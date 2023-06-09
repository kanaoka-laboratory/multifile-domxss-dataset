import { payload } from './source.js';

var divElement = document.createElement('div');
var resourceUri = payload;
fetch(resourceUri).then(
    function (response) {
        return response.text();
    }).then(function (body) {
        divElement.innerHTML = body;
    });
document.body.appendChild(divElement);