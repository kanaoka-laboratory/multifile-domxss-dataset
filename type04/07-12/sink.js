import { source } from './source.js';

const payload = source()

setTimeout(function () {
    trigger(payload); // Using the async trigger.

    // Clean up the localStorage to avoid causing side-effect on subsequent tests.
    localStorage.clear();
}, 10);

// Sync trigger.
eval(payload);

// Async trigger.
function trigger(payload) {
    eval(payload);
};