import { payload } from './source.js';

var form = document.createElement('form');
form.setAttribute('action', payload);
form.innerHTML = '<input type=\'submit\'></input>';
document.documentElement.appendChild(form);