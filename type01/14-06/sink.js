import { payload } from './source.js';

var form = document.createElement("form");
var button = document.createElement("button");
button.formAction = payload;
button.type = "submit";
button.textContent = "submit!";
document.body.appendChild(form);
form.appendChild(button);
