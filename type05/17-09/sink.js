function sink(payload0) {

    setTimeout(function () {
        trigger(payload0);
        // Clean up the sessionStorage to avoid side-effects on subsequent tests.
        sessionStorage.clear();
    }, 10);

    // Sync trigger.
    document.write(payload0);

    // Async trigger.
    function trigger(payload0) {
        document.write(payload0);
    }
}

export { sink };
