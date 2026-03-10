// Interface.
import { DataAdapterShape } from "../../adapter";
import { DataSettings } from "../../lib/interface/data.settings";
// Type.
import { InferAsyncOf, InferSettings, InferValue } from "../../lib/type";
/**
 * @description The interface for adaptable data types, which can optionally use a data adapter to manage their value and behavior.
 * @export
 * @interface Adaptable
 * @template {DataAdapterShape<C, T, R> | undefined} [A=undefined] The adapter type, which can be undefined.
 * @template {DataSettings<R> | undefined} [C=InferSettings<A>] The settings type, inferred from `A` if possible.
 * @template [T=InferValue<A>] The value type, inferred from `A` if possible.
 * @template {boolean} [R=InferAsyncOf<[C, A]>] The async flag, inferred from `C` or `A` if possible.
 */
export interface Adaptable<
  A extends DataAdapterShape<C, T, R> | undefined = undefined,
  C extends DataSettings<R> | undefined = InferSettings<A>,
  T = InferValue<A>,
  R extends boolean = InferAsyncOf<[C, A]>
> {
  /**
   * @description The adapter of the `Data` instance, which can be undefined if no adapter is used.
   * @readonly
   * @type {?A}
   */
  readonly adapter?: A;
}