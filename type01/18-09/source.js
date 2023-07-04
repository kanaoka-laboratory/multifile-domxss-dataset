if (!sessionStorage.badValue) {
    sessionStorage.badValue = Math.random();
}

var payload = sessionStorage.badValue;

export { payload };
