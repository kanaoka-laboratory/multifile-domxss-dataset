import { payload } from './source.js';

setTimeout(function () {
    trigger(payload); // Using the async trigger.

    // Clean up the localStorage to avoid causing side-effect on subsequent tests.
    sessionStorage.clear();
}, 10);

eval(payload);

// Async trigger.
function trigger(payload) {
    eval(payload);
};
