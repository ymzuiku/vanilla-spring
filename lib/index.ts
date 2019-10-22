import { keyframesSpring as k } from './keyframesSpring';
import { Springer } from './Springer';

function keyframesSpring(name: string, tension: number = 0.5, wobble: number = 0.5, fn: (value: number) => string) {
  const id = `__keyframes_${name}`;

  if (document.getElementById(id)) {
    return;
  }

  const cssNode = document.createElement('style');
  const css = k(name, tension, wobble, fn);

  cssNode.id = id;
  cssNode.textContent = css;
  cssNode.type = 'text/css';

  document.head.appendChild(cssNode);
}

export { Springer };

export default keyframesSpring;
