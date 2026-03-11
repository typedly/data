// Type.
import { IterableElement } from "./iterable-element.type";
/**
 * @description The iterated value type.
 * @export
 * @template T The type of iterated value constrained by the `Iterable` type.
 */
export type IterValue<T> = IterableElement<T>;
