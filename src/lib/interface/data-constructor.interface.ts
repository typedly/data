import { Constructor } from '@typedly/constructor';
import { DataShape } from './data-shape.interface';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template Value 
 * @template {DataCore<Value>} DataType 
 * @template {readonly any[]} Args 
 */
export interface DataConstructor<
  Value,
  DataType extends DataShape<Value>,
  Args extends readonly any[] = any[]
> extends Constructor<DataType, [Value, ...Args]> {}
