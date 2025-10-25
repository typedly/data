/**
 * @description The shape of a `Data` type.
 * @export
 * @interface DataShape
 * @template Type 
 */
export interface DataShape<Type> {
  get value(): Type;
  clear(): this;
  destroy(): this;
  lock(): this;
  set(value: Type): this;
}