function sink(payload0){
    var f = new Function(payload0);
    f();
}
export {sink};