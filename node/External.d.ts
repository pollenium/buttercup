export interface External<T> {
    new (uint8Array: Uint8Array): T;
}
