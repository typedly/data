/**
 * @description The value shape.
 * @export
 * @interface ValueShape
 * @template Type The type of value.
 */
export interface ValueShape<Type> {
  // Optional.
  // get timestamp(): number;
  get value(): Type;
  set(value: Type): this;
}