function sink(payload0) {

    var iframe = document.createElement("iframe");
    iframe.src = payload0;
    document.body.appendChild(iframe);
}

export { sink };
