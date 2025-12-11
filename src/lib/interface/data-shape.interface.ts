// Type.
import { AsyncReturn, IterValue } from "../type";
/**
 * @description The shape of a `Data` type.
 * @export
 * @interface DataShape
 * @template T The value type.
 * @template {boolean} [Async=false] The `Promise` return type for methods.
 */
export interface DataShape<T, Async extends boolean = false> {
  value: T;
  clear(): AsyncReturn<Async, this>;
  destroy(): AsyncReturn<Async, this>;
  lock(): this;
  set(value: T): AsyncReturn<Async, this>;
  [Symbol.toStringTag]?: string;
  [Symbol.iterator]?(): IterableIterator<IterValue<T>>;
  [Symbol.asyncIterator]?(): AsyncIterableIterator<IterValue<T>>;
}