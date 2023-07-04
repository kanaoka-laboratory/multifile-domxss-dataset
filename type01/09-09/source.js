if (!localStorage.badValue) {
    localStorage.badValue = Math.random();
}
var payload = localStorage.badValue;

export { payload };
