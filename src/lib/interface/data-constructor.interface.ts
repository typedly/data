// Interface.
import { DataConstructor as BaseDataConstructor } from '@typedly/constructor';
import { DataShape } from './data-shape.interface';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template T 
 * @template {DataShape<T>} I The instance.
 * @template {readonly any[]} [G=any[]] 
 * @extends {BaseDataConstructor<T, DataShape<T>, I, [...G]>}
 */
export interface DataConstructor<
  T,
  I extends DataShape<T>,
  G extends readonly any[] = any[]
> extends BaseDataConstructor<T, DataShape<T>, I, [...G]> {}
