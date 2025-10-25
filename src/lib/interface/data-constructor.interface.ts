import { DataConstructor as BaseDataConstructor } from '@typedly/constructor';
import { DataShape } from './data-shape.interface';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template Value 
 * @template {DataShape<Value>} Instance The instance.
 * @template {readonly any[]} [Args=any[]] 
 * @extends {BaseDataConstructor<Value, DataShape<Value>, Instance, [...Args]>}
 */
export interface DataConstructor<
  Value,
  Instance extends DataShape<Value>,
  Args extends readonly any[] = any[]
> extends BaseDataConstructor<Value, DataShape<Value>, Instance, [...Args]> {}
