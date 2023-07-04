function source(){
    if (document.referrer == "") {
        // If the referrer is not set, we set the referrer by reloading the page.
        location.href = location.href;
    } else {
        var payload = document.referrer;
        return payload;
    }
}   

export { source };
