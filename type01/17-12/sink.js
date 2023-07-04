import { payload } from './source.js';

setTimeout(function () {
    trigger(payload);
    // Clean up the sessionStorage to avoid side-effects on subsequent tests.
    sessionStorage.clear();
}, 10);

// Sync trigger.
eval(payload);

// Async trigger.
function trigger(payload) {
    eval(payload);
};