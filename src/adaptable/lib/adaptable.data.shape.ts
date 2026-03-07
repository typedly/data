// Interface.
import { DataAdapterShape } from "../../adapter";
import { ConfigurableDataShape } from "../../configurable";
import { DataSettings } from "../../lib/interface";
// Type.
import { InferAsyncOf, InferSettings, InferValue } from "../../lib/type";
/**
 * @description The shape of a data type with optional adapter.
 * @export
 * @interface AdaptableDataShape
 * @template {DataAdapterShape<C, T, R> | undefined} [A=undefined] The adapter type.
 * @template {DataSettings<R> | undefined} [C=] The settings type, inferred from A if possible.
 * @template [T=InferValue<A>] The value type, inferred from A if possible.
 * @template {boolean} [R=C extends DataSettings<infer U> ? U extends boolean ? U : false : A extends DataAdapterShape<C, T, infer U> ? U extends boolean ? U : false : false] The async flag, inferred from C or A if possible.
 * @extends {ConfigurableDataShape<C, T, R>}
 */
export interface AdaptableDataShape<
  A extends DataAdapterShape<C, T, R> | undefined = undefined,
  C extends DataSettings<R> | undefined = InferSettings<A>,
  T = InferValue<A>,
  R extends boolean = InferAsyncOf<[C, A]>
> extends ConfigurableDataShape<C, T, R> {
  readonly adapter?: A;
}