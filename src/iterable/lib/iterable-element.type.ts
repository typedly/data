/**
 * @description The iterate element type.
 * @export
 * @template T The type of the iterable.
 */
export type IterableElement<T> = T extends Iterable<infer U> ? U : T;