import { keyframesSpring } from "./keyframesSpring";
import { Springer } from "./Springer";

export interface IVanillaSpringOptions {
  name: string;
  /** default: 0.5 */
  tension?: number;
  /** default: 0.5 */
  wobble?: number;
  makeReverse?: boolean;
  keyframe: (value: number) => string;
}

const isSSR = typeof window === "undefined";

function vanillaSpring(options: IVanillaSpringOptions) {
  if (isSSR) {
    return;
  }
  const { name, tension = 0.5, wobble = 0.5, makeReverse, keyframe } = options;
  const id = `__keyframes_${name}`;

  if (document.getElementById(id)) {
    return;
  }

  const cssNode = document.createElement("style");
  const css = keyframesSpring(name, tension, wobble, makeReverse, keyframe);

  cssNode.id = id;
  cssNode.textContent = css;

  document.head.appendChild(cssNode);
}

vanillaSpring.Springer = Springer;

export default vanillaSpring;
