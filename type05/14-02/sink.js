function sink(payload0) {

    var area = document.createElement("area");
    area.href = payload0;
    area.textContent = "Here's an area element";
    document.body.appendChild(area);
}

export { sink };
