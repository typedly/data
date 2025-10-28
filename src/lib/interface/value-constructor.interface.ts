// Interface.
import { DataConstructor as BaseDataConstructor } from '@typedly/constructor';
import { ValueShape } from "./value-shape.interface";
/**
 * @description The constructor for value in data for advanced customization.
 * @export
 * @interface ValueConstructor
 * @template Value The value type.
 * @template {ValueShape<Value>} Instance The instance.
 * @template {readonly any[]} [Args=any[]] 
 * @extends {BaseDataConstructor<Value, ValueShape<Value>, Instance, [...Args]>}
 */
export interface ValueConstructor<
  Value,
  Instance extends ValueShape<Value>,
  Args extends readonly any[] = any[]
> extends BaseDataConstructor<Value, ValueShape<Value>, Instance, [...Args]> {}
