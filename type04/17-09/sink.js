import { source } from './source.js';

const payload = source()

setTimeout(function () {
    trigger(payload);
    // Clean up the sessionStorage to avoid side-effects on subsequent tests.
    sessionStorage.clear();
}, 10);

// Sync trigger.
document.write(payload);

// Async trigger.
function trigger(payload) {
    document.write(payload);
}