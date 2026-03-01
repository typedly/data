// Type.
import { AsyncReturn, IterValue } from "../type";
/**
 * @description The shape of a `Data` type.
 * @export
 * @interface DataShape
 * @template T The value type.
 * @template C The configuration type.
 * @template {boolean} [A=false] The `Promise` return type for methods.
 */
export interface DataShape<
  T,
  C,
  A extends boolean = C extends { async?: boolean } ? C['async'] extends boolean ? C['async'] : false : false
> {
  /**
   * @description Indicates whether the methods return a `Promise`.
   * @type {A}
   */
  async: A;

  /**
   * @description The configuration of the `Data` instance.
   * @type {?C}
   */
  configuration?: C;

  /**
   * @description The value of the `Data` instance.
   * @type {T}
   */
  value: T;

  /**
   * @description Clears the value of the `Data` instance.
   * @returns {AsyncReturn<A, this>} 
   */
  clear(): AsyncReturn<A, this>;

  /**
   * @description Destroys the `Data` instance, making it unusable.
   * @returns {AsyncReturn<A, this>} 
   */
  destroy(): AsyncReturn<A, this>;

  /**
   * @description Gets the value of the `Data` instance.
   * @returns {AsyncReturn<A, T>} 
   */
  getValue(): AsyncReturn<A, T>;

  /**
   * @description Locks the `Data` instance, preventing any further modifications to its value.
   * @returns {this} 
   */
  lock(): this;

  /**
   * @description Sets the value of the `Data` instance.
   * @param {T} value 
   * @returns {AsyncReturn<A, this>} 
   */
  setValue(value: T): AsyncReturn<A, this>;

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