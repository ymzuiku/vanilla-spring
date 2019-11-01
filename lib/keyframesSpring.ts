import { Springer } from './Springer';

export function keyframesSpring(
  name: string,
  tension: number = 0.5,
  wobble: number = 0.5,
  makeReverse: boolean = true,
  keyframe: (value: number) => string,
) {
  let go = '';

  go += `${0}%{${keyframe(0)}} `;
  const goSpr = Springer(tension, wobble);
  for (let i = 2; i < 100; i += 1) {
    const v = goSpr(i / 100);

    go += `${i}%{${keyframe(v)}} `;
  }
  go += `${100}%{${keyframe(1)}} `;

  let back = '';
  if (makeReverse) {
    back += `${0}%{${keyframe(1)}} `;
    const backSpr = Springer(tension, wobble);
    for (let i = 2; i < 100; i += 2) {
      const v = backSpr(i / 100);

      back += `${i}%{${keyframe(1 - v)}} `;
    }
    back += `${100}%{${keyframe(0)}} `;
  }

  return `@keyframes ${name} {${go}} @keyframes ${name}-reverse {${back}}`;
}
