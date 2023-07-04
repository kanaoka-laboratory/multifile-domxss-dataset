import { payload } from './source.js';

var objectElement = document.createElement("object");
objectElement.data = payload;
document.body.appendChild(objectElement);