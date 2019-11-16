import { DynButtercup } from '../internal/DynButtercup';
export declare class DynBytes extends DynButtercup {
    getUtf8(): string;
    getPaddedLeft(length: number): DynBytes;
    prependByte(byte: number): DynBytes;
    appendByte(byte: number): DynBytes;
    append(buttercup: DynBytes): DynBytes;
    prepend(buttercup: DynBytes): DynBytes;
}
