// Interface.
import { DataConstructor, DataShape } from "../interface";
// Type.
import { DataConstructorTuple } from "./data-constructor-tuple.type";
/**
 * @description The input type for data constructors, with arguments support.
 * @export
 * @template Value The value type.
 * @template {DataShape<Value>} Instance The data instance type.
 * @template {any[]} [Args=any[]] The arguments to pass to instance.
 */
export type DataConstructorInput<
  Value,
  Instance extends DataShape<Value>,
  Args extends any[] = any[]
> = DataConstructor<Value, Instance, Args> | DataConstructorTuple<Value, Instance, Args>;
