// Type.
import { AsyncReturn, IterValue } from "../type";
/**
 * @description The shape of a data type.
 * @export
 * @interface DataShape
 * @template T The value type.
 * @template C The configuration type.
 * @template {boolean} [R=C extends { async?: boolean } ? C['async'] extends boolean ? C['async'] : false : false] The `Promise` return type for methods.
 */
export interface DataShape<
  T,
  C,
  R extends boolean = C extends { async?: boolean } ? C['async'] extends boolean ? C['async'] : false : false
> {
  /**
   * @description Indicates whether the methods return a `Promise`.
   * @type {R}
   */
  readonly async: R;

  /**
   * @description The configuration of the `Data` instance.
   * @type {?C}
   */
  readonly configuration?: C;

  /**
   * @description The value of the `Data` instance.
   * @type {T}
   */
  readonly value: T;

  /**
   * @description Clears the value of the `Data` instance.
   * @returns {AsyncReturn<R, this>} 
   */
  clear(): AsyncReturn<R, this>;

  /**
   * @description Destroys the `Data` instance, making it unusable.
   * @returns {AsyncReturn<R, this>} 
   */
  destroy(): AsyncReturn<R, this>;

  /**
   * @description Gets the value of the `Data` instance.
   * @returns {AsyncReturn<R, T>} 
   */
  getValue(): AsyncReturn<R, T>;

  /**
   * @description Locks the `Data` instance, preventing any further modifications to its value.
   * @returns {this} 
   */
  lock(): this;

  /**
   * @description Sets the value of the `Data` instance.
   * @param {T} value 
   * @returns {AsyncReturn<R, this>} 
   */
  setValue(value: T): AsyncReturn<R, this>;

  /**
   * @description The string tag of the `Data` instance.
   * @type {?string}
   */
  [Symbol.toStringTag]?: string;

  /**
   * @description The iterator method for the `Data` instance, allowing it to be iterable.
   * @returns {IterableIterator<IterValue<T>>} 
   */
  [Symbol.iterator]?(): IterableIterator<IterValue<T>>;

  /**
   * @description The asynchronous iterator method for the `Data` instance, allowing it to be asynchronously iterable.
   * @returns {AsyncIterableIterator<IterValue<T>>} 
   */
  [Symbol.asyncIterator]?(): AsyncIterableIterator<IterValue<T>>;
}