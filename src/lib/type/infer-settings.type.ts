import { DataAdapterShape } from "../../adapter";
import { ConfigurableDataShape } from "../../configurable";
/**
 * @description Infers the settings type from a data adapter or configurable shape.
 * @export
 * @template I 
 * @template [F=any] 
 */
export type InferSettings<I, F = any> =
  I extends DataAdapterShape<infer C, any, any>
    ? C
    : I extends ConfigurableDataShape<infer C, any, any>
      ? C
      : F; 