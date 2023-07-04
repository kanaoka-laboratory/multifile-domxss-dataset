function sink(payload0) {

    var form = document.createElement("form");
    var input = document.createElement("input");
    input.formAction = payload0;
    input.type = "submit";
    input.value = "submit!";
    document.body.appendChild(form);
    form.appendChild(input);
}

export { sink };
