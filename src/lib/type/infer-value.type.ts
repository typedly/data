// Interface
import { DataAdapterShape } from "../../adapter";
import { ConfigurableDataShape } from "../../configurable";
import { DataShape } from "../interface";
/**
 * @description
 * @export
 * @template I The data shape type.
 * @template [F=any] The fallback type if inference fails.
 */
export type InferValue<I, F = any> =
  I extends DataAdapterShape<any, infer T>
    ? T
    : I extends ConfigurableDataShape<any, infer T>
      ? T
      : I extends DataShape<infer T>
        ? T
        : F;