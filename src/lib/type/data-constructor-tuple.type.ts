// Interface.
import { DataShape, DataConstructor } from "../";
/**
 * @description The type to provide data constructor with arguments.
 * @export
 * @template {DataShape<T, C, R>} I The type of the data instance.
 * @template {{ async?: boolean }} [C=I extends DataShape<any, infer V, any> ? V : any] The type of the configuration, inferred from I if possible.
 * @template [T=I extends DataShape<infer U, any, any> ? U : any] The type of value instance, inferred from I if possible.
 * @template {boolean} [R=I extends DataShape<T, C, infer U> ? U extends boolean ? U : false : false] The type of the readonly flag, inferred from I if possible.
 * @template {readonly any[]} [G=any[]] The type of the arguments tuple.
 */
export type DataConstructorTuple<
  I extends DataShape<T, C, R>,
  C extends { async?: boolean } = I extends DataShape<any, infer V, any> ? V : any,
  T = I extends DataShape<infer U, any, any> ? U : any,
  R extends boolean = I extends DataShape<T, C, infer U> ? U extends boolean ? U : false : false,
  G extends readonly any[] = any[]
> = [DataConstructor<I, C, T, R, G>, ...G];
