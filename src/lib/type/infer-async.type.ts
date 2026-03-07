// Interface.
import { ConfigurableDataShape } from "../../configurable";
import { DataAdapterShape } from "../../adapter";
import { DataSettings, DataShape } from "../interface";
/**
 * @description Infers the async flag from the configuration or adapter.
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
    : T extends DataAdapterShape<any, any, infer R extends boolean>
      ? R
      : T extends ConfigurableDataShape<any, any, infer R extends boolean>
        ? R
        : T extends DataShape<any, infer R extends boolean>
          ? R
          : F;
