function sink(payload0) {

    var objectElement = document.createElement("object");
    var paramTypeElement = document.createElement("param");
    var paramUrlElement = document.createElement("param");
    var paramAllowScriptAccessElement = document.createElement("param");
    paramTypeElement.name = "type";
    paramTypeElement.value = "application/x-shockwave-flash";
    paramAllowScriptAccessElement.name = "allowScriptAccess";
    paramAllowScriptAccessElement.value = "always";
    paramUrlElement.name = "url";
    paramUrlElement.value = payload0;
    objectElement.appendChild(paramAllowScriptAccessElement);
    objectElement.appendChild(paramTypeElement);
    objectElement.appendChild(paramUrlElement);
    document.body.appendChild(objectElement);
}

export { sink };
