function sink(payload0) {

    var anchor = document.createElement("a");
    anchor.href = payload0;
    anchor.text = "Here's an anchor link";
    document.body.appendChild(anchor);
}

export { sink };
