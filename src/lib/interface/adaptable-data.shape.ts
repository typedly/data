// Type.
import { DataAdapterShape } from "./data-adapter.shape";
import { DataShape } from "./data.shape";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableDataShape
 * @template {DataAdapterShape<T, C, any>} A The adapter type.
 * @template [T=A extends DataAdapterShape<infer U, any, any> ? U : any] The value type.
 * @template [C=A extends DataAdapterShape<any, infer V, any> ? V : any] The configuration type.
 * @template {boolean} [R=A extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false] The async flag.
 * @extends {DataShape<T, C, R>}
 */
export interface AdaptableDataShape<
  A extends DataAdapterShape<T, C, any> | undefined = undefined,
  T = A extends DataAdapterShape<infer U, any, any> ? U : any,
  C = A extends DataAdapterShape<any, infer V, any> ? V : any,
  R extends boolean = A extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false
> extends DataShape<T, C, R> {
  adapter?: A;
}
