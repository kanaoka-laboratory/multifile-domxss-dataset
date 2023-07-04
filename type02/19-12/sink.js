import { payload } from './source.js';

setTimeout(function () {
    trigger(payload);
}, 10);

// Sync trigger.
eval(payload);

// Async trigger.
function trigger(payload) {
    eval(payload);
};