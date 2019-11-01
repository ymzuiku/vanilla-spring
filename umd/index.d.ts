import { Springer } from './Springer';
export interface IVanillaSpringOptions {
    name: string;
    tension?: number;
    wobble?: number;
    makeReverse?: boolean;
    keyframe: (value: number) => string;
}
declare function vanillaSpring(options: IVanillaSpringOptions): void;
declare namespace vanillaSpring {
    var Springer: typeof Springer;
}
export default vanillaSpring;
