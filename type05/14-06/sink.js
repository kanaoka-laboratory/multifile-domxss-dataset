function sink(payload0) {

    var form = document.createElement("form");
    var button = document.createElement("button");
    button.formAction = payload0;
    button.type = "submit";
    button.textContent = "submit!";
    document.body.appendChild(form);
    form.appendChild(button);
}

export { sink };
