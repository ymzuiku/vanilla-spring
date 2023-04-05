export interface IVanillaSpringOptions {
    name: string;
    /** default: 0.5 */
    tension?: number;
    /** default: 0.5 */
    wobble?: number;
    makeReverse?: boolean;
    keyframe: (value: number) => string;
}
declare function vanillaSpring(options: IVanillaSpringOptions): void;
declare namespace vanillaSpring {
    var Springer: typeof import("./Springer").Springer;
}
export default vanillaSpring;
