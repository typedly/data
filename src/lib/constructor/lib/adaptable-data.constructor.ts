// Interface.
import { AdaptableDataShape, DataAdapterShape } from '../../interface';
import { DataAdapterConstructor } from './data-adapter.constructor';
/**
 * @description The constructor interface for data types with adapter.
 * @export
 * @interface AdaptableDataConstructor
 * @template {DataAdapterShape<T, C, R>} A The data adapter instance type.
 * @template {AdaptableDataShape<A, T, C, R>} I The data instance type.
 * @template {{ async?: boolean }} [C=A extends DataAdapterShape<any, infer V, any> ? V : any] The configuration type, inferred from A if possible.
 * @template [T=A extends DataAdapterShape<infer U, any, any> ? U : any] The underlying value type, inferred from A if possible.
 * @template {boolean} [R=A extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false] The async flag, inferred from A if possible.
 * @template {readonly any[]} [G=any[]] The additional arguments type.
 */
export interface AdaptableDataConstructor<
  A extends DataAdapterShape<T, C, R>,
  I extends AdaptableDataShape<A, T, C, R>,
  C extends { async?: boolean } = A extends DataAdapterShape<any, infer V, any> ? V : any,
  T = A extends DataAdapterShape<infer U, any, any> ? U : any,
  R extends boolean = A extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false,
  G extends readonly any[] = any[]
> {
  new (
    settings: C,
    value: T,
    adapter: DataAdapterConstructor<A, C, T, R, G>,
    ...args: G
  ): I;
}
