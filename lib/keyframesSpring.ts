import { Springer } from './Springer';

export function keyframesSpring(
  name: string,
  tension: number = 0.5,
  wobble: number = 0.5,
  fn: (value: number) => string,
) {
  let go = '';

  go += `${0}%{${fn(0)}} `;
  const goSpr = Springer(tension, wobble);
  for (let i = 2; i < 100; i += 1) {
    const v = goSpr(i / 100);

    go += `${i}%{${fn(v)}} `;
  }
  go += `${100}%{${fn(1)}} `;

  let back = '';
  back += `${0}%{${fn(1)}} `;
  const backSpr = Springer(tension, wobble);
  for (let i = 2; i < 100; i += 2) {
    const v = backSpr(i / 100);

    back += `${i}%{${fn(1 - v)}} `;
  }
  back += `${100}%{${fn(0)}} `;

  return `@keyframes ${name} {${go}} @keyframes ${name}-reverse {${back}}`;
  // return `@keyframes ${name} {${go}}`;
}
