if (!sessionStorage.getItem('badValue')) {
    sessionStorage.setItem('badValue', Math.random());
}

export var payload = sessionStorage.getItem('badValue'); // Using sync trigger.
