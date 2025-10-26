import { ValueShape, ValueConstructor } from "../interface";
/**
 * @description The input type for a ValueConstructor, which can be either the constructor itself or a tuple containing the constructor and additional arguments.
 * @export
 * @template Value The value type.
 * @template {ValueShape<Value>} Instance The instance type.
 */
export type ValueConstructorInput<Value, Instance extends ValueShape<Value>> =
  | [ValueConstructor<Value, Instance>, ...any[]]
  | ValueConstructor<Value, Instance>
;
