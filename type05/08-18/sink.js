function sink(payload0) {

    setTimeout(function () {
        trigger(payload0); // Using the async trigger.

        // Clean up the localStorage to avoid causing side-effect on subsequent tests.
        localStorage.clear();
    }, 10);

    var div = document.createElement('div');
    document.documentElement.appendChild(div);

    // Sync trigger.
    div.innerHTML = payload0;

    // Async trigger.
    function trigger(payload0) {
        div.innerHTML = payload0;
    };
}

export { sink };
