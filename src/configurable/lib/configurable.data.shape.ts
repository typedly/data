// Type.
import { DataConfig, InferAsync } from "../../lib/type";
// Interface.
import { DataSettings, DataShape } from "../../lib/interface";
/**
 * @description The shape of a data type with configuration.
 * @export
 * @interface ConfigurableDataShape
 * @template {DataSettings<R> | undefined} C The settings to configure the data shape.
 * @template T The value type.
 * @template {boolean} [R=InferAsync<C>] The async flag inferred from the settings.
 * @extends {DataShape<T, R>} 
 */
export interface ConfigurableDataShape<
  C extends DataSettings<R> | undefined,
  T,
  R extends boolean = InferAsync<C>
> extends DataShape<T, R> {
  /**
   * @description The configuration of the `Data` instance.
   * @readonly
   * @type {?DataConfig<C, R>}
   */
  readonly configuration?: DataConfig<C, R>;
}
