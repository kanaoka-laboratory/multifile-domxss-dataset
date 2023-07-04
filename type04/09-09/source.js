export function source(){
    if (!localStorage.badValue) {
        localStorage.badValue = Math.random();
    }
    var payload = localStorage.badValue;
    
    return payload;
}   
