function sink(payload0) {
    
    setTimeout(function () {
        trigger(payload0);
    }, 10);

    // Sync trigger.
    document.write(payload0);

    // Async trigger.
    function trigger(payload0) {
        document.write(payload0);
    }
}

export { sink };
