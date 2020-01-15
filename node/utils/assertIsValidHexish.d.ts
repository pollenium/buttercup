export declare class InvalidHexishCharError extends Error {
    constructor(hexishChar: any);
}
export declare class InvalidHexishParityError extends Error {
    constructor(hexish: any);
}
export declare function assertIsValidHexish(hexish: string): void;
