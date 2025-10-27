// Interface.
import { DataShape, DataConstructor } from "../interface";
/**
 * @description The type to provide data constructor with arguments.
 * @export
 * @template Value The value type.
 * @template {DataShape<Value>} Instance The shape of the instance.
 * @template {any[]} [Args=any[]] Additional Arguments passed to the instance.
 */
export type DataConstructorTuple<
  Value,
  Instance extends DataShape<Value>,
  Args extends any[] = any[]
> = [DataConstructor<Value, Instance, Args>, ...Args];
