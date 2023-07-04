import { payload } from './source.js';

setTimeout(function () {
    trigger(payload); // Using the async trigger.

    // Clean up the localStorage to avoid causing side-effect on subsequent tests.
    localStorage.clear();
}, 10);

// Sync trigger.
document.write(payload);

// Async trigger.
function trigger(payload) {
    document.write(payload);
}