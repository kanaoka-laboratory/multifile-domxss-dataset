function sink(payload0) {

    div.innerHTML = '<div onclick=\'' + payload0.replace(/'/g, '"') + '\'>div</div>';
    document.documentElement.appendChild(div);
}

export { sink };
