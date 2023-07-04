function sink(payload0) {

    var div = document.createElement('div');
    div.addEventListener('click', new Function(payload0), false);
    document.documentElement.appendChild(div);
}

export { sink };
