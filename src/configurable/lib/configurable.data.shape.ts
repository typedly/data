// Type.
import type { InferAsync } from "../../lib/type";
// Interface.
import type { DataSettings, DataShape } from "../../lib/interface";
import type { Configurable } from "../../traits";
/**
 * @description The shape of a data type with configuration.
 * @export
 * @interface ConfigurableDataShape
 * @template {DataSettings<R> | undefined} C The settings to configure the data shape.
 * @template {T} [T=any] The value type.
 * @template {boolean} [R=InferAsync<C>] The async flag inferred from the settings.
 * @extends {DataShape<T, R>} The base data shape with value type `T` and async flag `R`.
 */
export interface ConfigurableDataShape<
  C extends DataSettings<R> | undefined,
  T = any,
  R extends boolean = InferAsync<C>
> extends DataShape<T, R>, Configurable<C, R> {}
