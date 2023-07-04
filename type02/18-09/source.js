if (!sessionStorage.badValue) {
    sessionStorage.badValue = Math.random();
}

export var payload = sessionStorage.badValue;

