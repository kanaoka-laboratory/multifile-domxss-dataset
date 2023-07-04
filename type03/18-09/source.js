function source(){
    if (!sessionStorage.badValue) {
        sessionStorage.badValue = Math.random();
    }
    
    var payload = sessionStorage.badValue;
    
    return payload;
}   

export { source };
