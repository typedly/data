/// Interface
import { DataAdapterShape } from "./data-adapter.shape";
import { DataSettings, InferAsync, InferValue } from "../../lib";
// Type.
import { InferSettings } from "../../lib/type";
/**
 * @description The constructor interface for data adapters.
 * @export
 * @interface DataAdapterConstructor
 * @template {DataAdapterShape<C, T, R>} I The data adapter instance type.
 * @template {{ async?: boolean }} [C=I extends DataAdapterShape<any, infer V, any> ? V : any] The configuration type, inferred from I if possible.
 * @template [T=I extends DataAdapterShape<infer U, any, any> ? U : any] The underlying value type, inferred from I if possible.
 * @template {boolean} [R=I extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false] The async flag, inferred from I if possible.
 * @template {readonly any[]} [G=any[]] Additional arguments.
 */
export interface DataAdapterConstructor<
  I extends DataAdapterShape<C, T, R> | undefined,
  C extends DataSettings<R> = InferSettings<I>,
  T = InferValue<I>,
  R extends boolean = InferAsync<I>,
  G extends readonly any[] = any[]
> {
  new (
    settings: C,
    value: T,
    ...args: G
  ): I;
}
