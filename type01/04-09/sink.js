import { payload } from './source.js';

// Sync trigger.
document.write(payload);

setTimeout(function () {
    trigger(payload);
}, 10);

// Async trigger.
function trigger(payload) {
    document.write(payload);
}