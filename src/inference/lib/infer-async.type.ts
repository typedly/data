// Interface.
import type { DataSettings} from '../../configuration';
import type { DataShape } from "../../lib/interface";
/**
 * @description Infers the async flag from the settings `DataSettings` or shape `DataShape`.
 * @export
 * @template T The type of the configuration object.
 * @template F The default async flag if it cannot be inferred from T.
 */
export type InferAsync<
  T = undefined,
  F = false
> =
  T extends DataSettings<infer R extends boolean>
    ? R
    : T extends DataShape<any, infer R extends boolean>
      ? R
      : F;
