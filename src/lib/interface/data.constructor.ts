// Interface.
import { DataShape } from './data.shape';
// Type.
import { InferAsync, InferValue } from '../type';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template {DataShape<T, R>} I The data instance type.
 * @template [T=InferValue<I>] The data type.
 * @template {boolean} [R=InferAsync<I>] The async flag, inferred from `I` if possible.
 * @template {readonly any[]} [G=any[]] Additional arguments.
 */
export interface DataConstructor<
  I extends DataShape<T, R>,
  T = InferValue<I>,
  R extends boolean = InferAsync<I>,
  G extends readonly any[] = any[]
> {
  new (
    value: T,
    ...args: G
  ): I;
}
