import {
  // Type.
  AsyncReturn,
  // Interface.
  DataShape
} from "../../lib";
/**
 * @description Transformable interface for data types that can be transformed.
 * @export
 * @interface Transformable 
 * @template T The type of the value to be transformed.
 * @template {boolean} [R=false]  The async flag, indicating whether the transformation methods are asynchronous.
 */
export interface Transformable<T, R extends boolean = false> {
  /**
   * @description Clones the `Data` instance.
   * @returns {AsyncReturn<R, this>} The cloned `Data` instance.
   */
  clone(): AsyncReturn<R, this>;

  /**
   * @description Transforms the `Data` instance using the provided function.
   * @template U 
   * @param {(value: T) => U} fn The function to transform the `Data` instance.
   * @returns {AsyncReturn<R, DataShape<U, R>>} The transformed `Data` instance.
   */
  map<U>(fn: (value: T) => U): AsyncReturn<R, DataShape<U, R>>;
}
