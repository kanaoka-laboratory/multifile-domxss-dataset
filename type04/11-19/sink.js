import { source } from './source.js';

const payload = source()

var form = document.createElement("form");
var input = document.createElement("input");
input.formAction = payload;
input.type = "submit";
input.value = "submit!";
document.body.appendChild(form);
form.appendChild(input);