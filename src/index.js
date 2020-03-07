import add from './add';
import AppIcon from './app.png';
import './style.scss';

function component() {
  const element = document.createElement('div');

  element.innerHTML = add(4, 5);
  element.classList.add('container');

  const myIcon = new Image();
  myIcon.src = AppIcon;
  myIcon.width = '100';

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
