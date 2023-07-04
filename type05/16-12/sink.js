function sink(payload0) {

    setTimeout(function () {
        trigger(payload0); // Using the async trigger.
    
        // Clean up the localStorage to avoid causing side-effect on subsequent tests.
        sessionStorage.clear();
    }, 10);

    eval(payload0);

    // Async trigger.
    function trigger(payload0) {
        eval(payload0);
    };
}

export { sink };
