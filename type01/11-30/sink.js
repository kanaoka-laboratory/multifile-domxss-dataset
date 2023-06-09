import { payload } from './source.js';

var xmlns = "http://www.w3.org/2000/svg";
var svgElement = document.createElementNS(xmlns, "svg");
svgElement.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:xlink",
    "http://www.w3.org/1999/xlink");
var scriptElement = document.createElementNS(xmlns, "script");
scriptElement.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    location.hash.substr(1));
svgElement.appendChild(scriptElement);
document.body.appendChild(svgElement);