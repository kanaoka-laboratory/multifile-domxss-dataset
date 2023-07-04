function sink(payload0) {

    setTimeout(function () {
        trigger(payload0);
    }, 10);

    // Sync trigger.
    eval(payload0);

    // Async trigger.
    function trigger(payload0) {
        eval(payload0);
    };
}

export { sink };
