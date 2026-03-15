/**
 * @description The value shape.
 * @export
 * @interface ValueShape
 * @template T The type of value.
 */
export interface ValueShape<T> {
  // Optional.
  // get timestamp(): number;
  get value(): T;
  set(value: T): this;
}