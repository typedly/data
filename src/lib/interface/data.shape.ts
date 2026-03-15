// Type.
import { AsyncReturn } from "../type";
/**
 * @description The shape of a data type.
 * @export
 * @interface DataShape
 * @template T The value type.
 * @template {boolean} [R=false] The async flag.
 */
export interface DataShape<T, R extends boolean = false> {
  /**
   * @description Indicates whether the methods return a `Promise`.
   * @readonly
   * @type {R}
   */
  readonly async: R;

  /**
   * @description The value of the `Data` instance.
   * @readonly
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
   * @returns {this} The `Data` instance at the time of locking.
   */
  lock(): this;

  /**
   * @description Sets the value of the `Data` instance.
   * @param {T} value 
   * @returns {AsyncReturn<R, this>} 
   */
  setValue(value: T): AsyncReturn<R, this>;
}
