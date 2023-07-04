import { payload } from './source.js';

setTimeout(function () {
    trigger(payload); // Using the async trigger.

    // Clean up the sessionStorage to avoid side-effects on subsequent tests.
    sessionStorage.clear();
}, 10)

// Sync trigger.
document.write(payload);

// Async trigger.
function trigger(payload) {
    document.write(payload);
}