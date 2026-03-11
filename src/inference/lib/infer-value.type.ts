// Interface
import { DataShape } from "../../lib/interface";
/**
 * @description Infers the value type from a data shape interface.
 * It checks if the input type `I` extends `DataShape` and extracts the value type accordingly.
 * If none of the conditions match, it returns the fallback type `F`.
 * @export
 * @template I The data shape type.
 * @template [F=any] The fallback type if inference fails.
 */
export type InferValue<I, F = any> =
  I extends DataShape<infer T>
    ? T
    : I extends { value?: infer V }
      ? V
      : F;