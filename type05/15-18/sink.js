function sink(content){

    var div = document.createElement('div');
    div.innerHTML = content.html;
    document.documentElement.appendChild(div);
    
}

export {sink};
    