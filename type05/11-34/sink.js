function sink(payload0) {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", payload0, false);
    xhttp.send();
    var div = document.createElement("div");
    div.innerHTML = xhttp.responseText;
    document.body.appendChild(div);
}

export { sink };
