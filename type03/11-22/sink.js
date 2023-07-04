import { source } from './source.js';

const payload = source()

var objectElement = document.createElement("object");
objectElement.data = payload;
document.body.appendChild(objectElement);