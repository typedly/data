// Interface.
import { AdaptableDataShape, DataAdapterShape } from "..";
import { AdaptableDataConstructor } from "../constructor";
import { AdaptableDataConstructorTuple } from "./adaptable-data-constructor-tuple.type";

export type AdaptableDataConstructorInput<
  A extends DataAdapterShape<T, C, R>,
  I extends AdaptableDataShape<A, T, C, R>,
  C extends { async?: boolean } = A extends DataAdapterShape<any, infer V, any> ? V : any,
  T = A extends DataAdapterShape<infer U, any, any> ? U : any,
  R extends boolean = A extends DataAdapterShape<T, C, infer U> ? U extends boolean ? U : false : false,
  G extends readonly any[] = any[]
> = AdaptableDataConstructor<A, I, C, T, R, G> | AdaptableDataConstructorTuple<A, I, C, T, R, G>;
