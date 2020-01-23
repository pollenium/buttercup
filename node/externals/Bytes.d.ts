import { DynButtercup } from '../buttercups/DynButtercup';
export declare class Bytes extends DynButtercup {
    static genEmpty(): Bytes;
    static fromArray(array: Array<number>): Bytes;
    static fromHexish(hexish: string): Bytes;
}
