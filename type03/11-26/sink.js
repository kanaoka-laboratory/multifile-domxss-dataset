import { source } from './source.js';

const payload = source()

var objectElement = document.createElement("object");
var paramTypeElement = document.createElement("param");
var paramMovieElement = document.createElement("param");
var paramAllowScriptAccessElement = document.createElement("param");
paramTypeElement.name = "type";
paramTypeElement.value = "application/x-shockwave-flash";
paramAllowScriptAccessElement.name = "allowScriptAccess";
paramAllowScriptAccessElement.value = "always";
paramMovieElement.name = "movie";
paramMovieElement.value = payload;
objectElement.appendChild(paramAllowScriptAccessElement);
objectElement.appendChild(paramTypeElement);
objectElement.appendChild(paramMovieElement);
document.body.appendChild(objectElement);