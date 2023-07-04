function sink(payload0) {

    var a = document.createElement('a');
    a.setAttribute('href', payload0);
    document.documentElement.appendChild(a);
}

export { sink };
