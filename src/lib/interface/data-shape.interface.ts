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
  /**
   * Sets the value of the data.
   * @param value The value to set.
   * @returns The current instance.
   * @example
   * data.set(value);
   */
  set(value: Value): this;