function sink(payload0) {

    var xmlns = "http://www.w3.org/2000/svg";
    var svgElement = document.createElementNS(xmlns, "svg");
    svgElement.setAttribute("width", 500);
    svgElement.setAttribute("height", 500);
    svgElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    var anchor = document.createElementNS(xmlns, "a");
    anchor.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", payload0);
    var text = document.createElementNS(xmlns, "text");
    text.textContent = "This is an anchor element!";
    text.setAttribute("x", 60);
    text.setAttribute("y", 21);
    text.setAttribute("fill", "black");
    anchor.appendChild(text);
    svgElement.appendChild(anchor);
    document.body.appendChild(svgElement);
}

export { sink };
