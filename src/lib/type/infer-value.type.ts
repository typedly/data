// Interface
import { DataAdapterShape } from "../../adapter";
import { ConfigurableDataShape } from "../../configurable";
import { DataShape } from "../interface";
/**
 * @description Infers the value type from a data shape interface. It checks if the input type `I` extends `DataAdapterShape`, `ConfigurableDataShape`, or `DataShape` and extracts the value type accordingly. If none of the conditions match, it returns the fallback type `F`.
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
        : I extends { value?: infer V }
          ? V
          : F;