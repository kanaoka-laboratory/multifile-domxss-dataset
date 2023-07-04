function sink(payload0) {

    var form = document.createElement('form');
    form.setAttribute('action', payload0);
    form.innerHTML = '<input type=\'submit\'></input>';
    document.documentElement.appendChild(form);
}

export { sink };
