function sink(payload0) {

    setTimeout(function () {
        trigger(payload0);
        // Clean up the sessionStorage to avoid side-effects on subsequent tests.
        sessionStorage.clear();
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