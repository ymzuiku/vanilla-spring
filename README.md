# keyframesSpring

Tiny, gzip: 0.4kb, run every(Vanilla, React, Vue...) project.

Thank Project: Springer

## Install

```sh
$ npm install --save keyframes-spring
```

## Only a function

```js
import kfs from 'keyframes-spring';

kfs(
  'move',
  0.5,
  0.5,
  v => `
  transform: translateX(${100 * v}px);
  opacity: ${v};
`,
);

const view = document.getElementById('view');
view.style.animation = 'move 1s';

// move back and keep end
setTimeout(funciont(){
  view.style.animation = 'move-reverse 1s';
  view.style.animationFillMode ='forwards';
}, 2000);
```
