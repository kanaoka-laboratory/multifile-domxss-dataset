export function source(){
    if (!sessionStorage.getItem('badValue')) {
        sessionStorage.setItem('badValue', Math.random());
    }
    
    var payload = sessionStorage.getItem('badValue'); // Using sync trigger.
    
    return payload;
}   
