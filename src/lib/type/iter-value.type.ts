/**
 * @description The iterated value type.
 * @export
 * @template T The type of iterated value constrained by the `Iterable` type.
 */
export type IterValue<T> = T extends Iterable<infer U> ? U : T;
