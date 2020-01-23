import { FixButtercup } from '../buttercups/fixButtercups';
export declare class Address extends FixButtercup {
    constructor(uint8Array: Uint8Array);
    getIsNull(): boolean;
    static genNull(): Address;
    static fromArray(array: Array<number>): Address;
    static fromHexish(hexish: string): Address;
}
