export function source(){
    if (window.name == "") {
        window.name = "badvalue='a'";
    }
    
    var payload = window.name;
    
    return payload;
}   
