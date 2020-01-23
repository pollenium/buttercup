import { FixButtercup } from '../buttercups/fixButtercups';
export declare class Address extends FixButtercup {
    private isNull;
    constructor(uint8Array: Uint8Array);
    getIsNull(): boolean;
    static genNull(): Address;
}
