import add from './add';
import './style.css';

const number = add(4, 5);

console.log('number', number);
document.body.innerHTML = `<div class="container">${number}</div>`;
