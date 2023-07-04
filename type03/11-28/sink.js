import { source } from './source.js';

const payload = source()

var div = document.createElement('div');
div.id = 'divEl';
document.documentElement.appendChild(div);

var range = document.createRange();
// make the parent of the first div in the document becomes the context node
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.createContextualFragment(payload);
document.body.appendChild(documentFragment);
