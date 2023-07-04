function sink(content){

    var msgObj = eval(content);

    if (msgObj.isActive) {
        document.write("PostMessage arrived!");
    }
    
    }
    
export {sink};
    