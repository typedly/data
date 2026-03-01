// Interface.
import { DataAdapter, DataShape } from '../../interface';
import { DataAdapterConstructor } from './data-adapter.constructor';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template {DataShape<T, C, R>} I The data instance type.
 * @template {DataAdapter<T, C, R>} A The data adapter instance type.
 * @template {{ async?: boolean }} C The configuration type.
 * @template T The underlying value type.
 * @template {boolean} [R=C['async'] extends boolean ? C['async'] : false] The async flag.
 * @template {readonly any[]} [G=any[]] Additional arguments.

 */
export interface DataConstructor<
  I extends DataShape<T, C, R>,
  A extends DataAdapter<T, C, R>,
  C extends { async?: boolean },
  T,
  R extends boolean = C['async'] extends boolean ? C['async'] : false,
  G extends readonly any[] = any[]
> {
  new (
    settings: C,
    value: T,
    adapter?: DataAdapterConstructor<A, C, T, R, G>,
    ...args: G
  ): I;
}
