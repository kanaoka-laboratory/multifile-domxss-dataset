import { payload } from './source.js';

setTimeout(function () {
    trigger(payload);
}, 10);

// Sync trigger.
document.write(payload);

// Async trigger.
function trigger(payload) {
    document.write(payload);
}