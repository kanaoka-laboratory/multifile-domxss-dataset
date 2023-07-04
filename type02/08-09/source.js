if (!localStorage.getItem('badValue')) {
    localStorage.setItem('badValue', Math.random());
}

export var payload = localStorage.getItem('badValue'); // Using sync trigger.
