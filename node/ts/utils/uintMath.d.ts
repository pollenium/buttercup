import { Uint } from '../internals/Uint';
import { ExternalUintish } from '../interfaces';
export declare function add<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
export declare function sub<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
export declare function mul<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
export declare function divRd<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
export declare function divDn<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
export declare function divUp<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
export declare function mod<T extends ExternalUintish>(UintClass: T, a: T, b: Uint): T;
