// Interface.
import type { DataShape } from './data.shape';
// Type.
import type { InferAsync, InferValue } from '../../inference';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template {DataShape<T, R>} I The data instance type.
 * @template [T=InferValue<I>] The data type inferred from `I`.
 * @template {boolean} [R=InferAsync<I>] The async flag, inferred from `I` if possible.
 * @template {readonly any[]} [G=[]] Additional arguments.
 */
export interface DataConstructor<
  I extends DataShape<T, R>,
  T = InferValue<I>,
  R extends boolean = InferAsync<I>,
  G extends readonly any[] = []
> {
  new (
    /** The optional initial value for the data instance. */
    value: T,
    /** Additional arguments for the constructor. */
    ...args: G
  ): I;
}
