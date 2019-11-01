# vanilla-spring

Use keyframes run spring animation.

Tiny, gzip: 0.4kb, run every(Vanilla, React, Vue...) project.

Thank Project: Springer

## Install

```sh
$ npm install --save keyframes-spring
```

or

```js
<script src="https://unpkg.com/keyframes-spring@0.1.2/umd/index.js"></script>
```

## Only a function

```js
import vanillaSpring from 'vanilla-spring';

vanillaSpring({
  name:'move',
  makeReverse: true,
  keyframe: v=> `
    transform: translateX(${100 * v}px);
    opacity: ${v};
  `,
})


const view = document.getElementById('view');
view.style.animation = 'move 1s';

// move back and keep end
setTimeout(funciont(){
  view.style.animation = 'move-reverse 1s';
  view.style.animationFillMode ='forwards';
}, 2000);
```
