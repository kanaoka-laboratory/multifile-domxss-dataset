import { payload } from './source.js';

setTimeout(function () {
    trigger(payload); // Using the async trigger.

    // Clean up the localStorage to avoid causing side-effect on subsequent tests.
    localStorage.clear();
}, 10);

var div = document.createElement('div');
document.documentElement.appendChild(div);

// Sync trigger.
div.innerHTML = payload;

// Async trigger.
function trigger(payload) {
    div.innerHTML = payload;
};