// Interface.
import { DataConstructor, DataShape } from "..";
// Type.
import { DataConstructorTuple } from "./data.constructor.tuple";
import { InferAsync } from "../../inference";
/**
 * @description The input type for data constructors, with arguments support.
 * @export
 * @template {DataShape<T, C, R>} I The type of the data instance.
 * @template {{ async?: boolean }} [C=I extends DataShape<any, infer V, any> ? V : any] The type of the configuration, inferred from I if possible.
 * @template [T=I extends DataShape<infer U, any, any> ? U : any] The type of value instance, inferred from I if possible.
 * @template {boolean} [R=I extends DataShape<T, C, infer U> ? U extends boolean ? U : false : false] The type of the readonly flag, inferred from I if possible.
 * @template {readonly any[]} [G=[]] The type of the arguments tuple.
 */
export type DataConstructorInput<
  I extends DataShape<T, R>,
  T = I extends DataShape<infer U, any> ? U : any,
  R extends boolean = InferAsync<I>,
  G extends readonly any[] = []
> = DataConstructor<I, T, R, G> | DataConstructorTuple<I, T, R, G>;
