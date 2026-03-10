/// Interface
import type { DataAdapterShape } from "./data-adapter.shape";
import type { DataSettings, InferAsync, InferValue } from "../../lib";
// Type.
import type { InferSettings } from "../../lib/type";
/**
 * @description The constructor interface for data adapters.
 * @export
 * @interface DataAdapterConstructor
 * @template {DataAdapterShape<C, T, R> | undefined} I The adapter instance type, which can be undefined for more flexible inference.
 * @template {DataSettings<R>} [C=InferSettings<I>] The configuration type, inferred from I if possible.
 * @template [T=InferValue<I>] The underlying value type, inferred from I if possible.
 * @template {boolean} [R=InferAsync<I>] The async flag, inferred from I if possible.
 * @template {readonly any[]} [G=[]] Additional arguments.
 */
export interface DataAdapterConstructor<
  I extends DataAdapterShape<C, T, R> | undefined,
  C extends DataSettings<R> = InferSettings<I>,
  T = InferValue<I>,
  R extends boolean = InferAsync<I>,
  G extends readonly any[] = []
> {
  new (
    settings: C,
    value?: T,
    ...args: G
  ): I;
}
