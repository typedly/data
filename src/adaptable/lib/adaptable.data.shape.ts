// Interface.
import type { DataAdapterShape } from "../../adapter";
import type { DataSettings, DataShape } from "../../lib/interface";
// Type.
import type { InferAsyncOf, InferSettings, InferValue } from "../../lib/type";
import type { Adaptable } from "../../traits";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableDataShape
 * @template {DataAdapterShape<C, T, R> | undefined} [A=undefined] The adapter type.
 * @template {DataSettings<R> | undefined} [C=InferSettings<A>] The settings type, inferred from A if possible.
 * @template [T=InferValue<A>] The value type, inferred from A if possible.
 * @template {boolean} [R=InferAsyncOf<[C, A]>] The async flag, inferred from C or A if possible.
 * @extends {Adaptable<A, C, T, R>}
 */
export interface AdaptableDataShape<
  A extends DataAdapterShape<C, T, R> | undefined = undefined,
  C extends DataSettings<R> | undefined = InferSettings<A>,
  T = InferValue<A>,
  R extends boolean = InferAsyncOf<[C, A]>
> extends DataShape<T, R>, Adaptable<A, C, T, R> {}