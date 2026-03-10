// Interface.
import { DataSettings } from "../../lib/interface/data.settings";
// Type.
import { DataConfig, InferAsync } from "../../lib";
/**
 * @description The interface for configurable data types.
 * @export
 * @interface Configurable
 * @template {DataSettings<R> | undefined} C The type of the configuration object.
 * @template {boolean} [R=InferAsync<C>] The type of the return values for methods, inferred from `C` if possible.
 */
export interface Configurable<
  C extends DataSettings<R> | undefined,
  R extends boolean = InferAsync<C>
> {
  /**
   * @description The configuration of the `Data` instance.
   * @readonly
   * @type {?DataConfig<C, R>}
   */
  readonly configuration?: DataConfig<C, R>;
}
