function sink(payload0) {

    var div = document.createElement('div');
    div.setAttribute('onclick', payload0);
    document.documentElement.appendChild(div);
}

export { sink };
