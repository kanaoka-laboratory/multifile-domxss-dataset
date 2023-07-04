if (!localStorage.getItem('badValue')) {
    localStorage.setItem('badValue', Math.random());
}

var payload = localStorage.getItem('badValue'); // Using sync trigger.

export { payload };
