import { FixLeftWrapper } from '../wrappers/fixWrappers';
import Bn from 'bn.js';
import { Uintish } from '../../interfaces';
export declare class Uint extends FixLeftWrapper implements Uintish {
    private bn?;
    private number?;
    constructor(length: number, uint8Array: Uint8Array);
    getBn(): Bn;
    getNumber(): number;
    unstrictEquals(uint: Uint): boolean;
}
