import { payload } from './source.js';

var xhttp = new XMLHttpRequest();
xhttp.open("GET", payload, false);
xhttp.send();
var div = document.createElement("div");
div.innerHTML = xhttp.responseText;
document.body.appendChild(div);
