function sink(payload0) {

    var div = document.createElement('div');
    div.id = 'divEl';
    document.documentElement.appendChild(div);

    var divEl = document.getElementById('divEl');
    divEl.innerHTML = payload0;
}

export { sink };
