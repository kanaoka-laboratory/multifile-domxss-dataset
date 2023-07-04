function sink(payload0) {

    setTimeout(function () {
        trigger(payload0); // Using the async trigger.

        // Clean up the localStorage to avoid causing side-effect on subsequent tests.
        localStorage.clear();
    }, 10);

    // Sync trigger.
    document.write(payload0);

    // Async trigger.
    function trigger(payload0) {
        document.write(payload0);
    }
}

export { sink };
