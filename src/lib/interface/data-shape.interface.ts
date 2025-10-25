/**
 * @description The shape of a `Data` type.
 * @export
 * @interface DataShape
 * @template Value The value type.
 */
export interface DataShape<Value> {
  get value(): Value;
  clear(): this;
  destroy(): this;
  lock(): this;
  set(value: Value): this;
}