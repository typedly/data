// Interface.
import { DataConstructor, DataShape } from "../interface";
/**
 * @description The input type for data constructors, with arguments support.
 * @export
 * @template Value The value type.
 * @template {DataShape<Value>} Instance The data instance type.
 */
export type DataConstructorInput<Value, Instance extends DataShape<Value>> =
  | [DataConstructor<Value, Instance>, ...any[]]
  | DataConstructor<Value, Instance>
;
