function sink(payload0) {

    setTimeout(function () {
        trigger(payload0);
        // Clean up the sessionStorage to avoid side-effects on subsequent tests.
        sessionStorage.clear();
    }, 10);

    // Sync trigger.
    eval(payload0);

    // Async trigger.
    function trigger(payload0) {
        eval(payload0);
    };
}

export { sink };
