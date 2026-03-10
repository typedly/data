// Type.
import { AsyncReturn } from "../../lib";
/**
 * @description Serializable interface for data types that can be serialized and deserialized.
 * @export
 * @interface Serializable
 * @template T The type of the value to be serialized and deserialized.
 * @template {boolean} [R=false] The async flag, indicating whether the serialization and deserialization methods are asynchronous.
 */
export interface Serializable<T, R extends boolean = false> {
  /**
   * @description Serializes the data instance to a string.
   * @returns {AsyncReturn<R, string>} 
   */
  serialize(): AsyncReturn<R, string>;

  /**
   * @description Deserializes a string to a data instance.
   * @param {string} data The string to be deserialized.
   * @returns {AsyncReturn<R, T>} 
   */
  deserialize(data: string): AsyncReturn<R, T>;
}