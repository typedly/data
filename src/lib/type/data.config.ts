// Interface
import { DataSettings } from "../interface/data.settings";
// Type
import { InferAsync } from "../../inference";
/**
 * @description The type for the data configuration, which can be either a full configuration object of `C` or just an async flag.
 * @export
 * @template {DataSettings<R> | undefined} C The type of the settings for configuration.
 * @template {boolean} [R=InferAsync<C>] The type of the async flag.
 */
export type DataConfig<
  C extends DataSettings<R> | undefined,
  R extends boolean = InferAsync<C>
> = C extends DataSettings<R> ? Required<C> : { async: R };
