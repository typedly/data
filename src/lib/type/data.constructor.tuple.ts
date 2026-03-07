// Interface.
import { DataShape, DataConstructor } from "..";
// Type.
import { InferAsync } from "./infer-async.type";
import { InferValue } from "./infer-value.type";
/**
 * @description The type to provide data constructor with arguments.
 * @export
 * @template {DataShape<T, R>} I The type of the data instance.
 * @template [T=InferValue<I>] The type of value instance, inferred from I if possible.
 * @template {boolean} [R=InferAsync<I>] The type of the readonly flag, inferred from I if possible.
 * @template {readonly any[]} [G=any[]] The type of the arguments tuple.
 */
export type DataConstructorTuple<
  I extends DataShape<T, R>,
  T = InferValue<I>,
  R extends boolean = InferAsync<I>,
  G extends readonly any[] = any[]
> = [DataConstructor<I, T, R, G>, ...G];
