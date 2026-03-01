// Interface.
import { DataAdapter, DataConstructor, DataShape } from "../";
// Type.
import { DataConstructorTuple } from "./data-constructor-tuple.type";
/**
 * @description The input type for data constructors, with arguments support.
 * @export
 * @template {DataShape<T, C, R>} I The type of the data instance.
 * @template {DataAdapter<T, C, R>} A The adapter instance type.
 * @template {{ async?: boolean }} C The configuration type.
 * @template T The value type.
 * @template {boolean} [R=C['async'] extends boolean ? C['async'] : false] The async flag.
 * @template {readonly any[]} [G=any[]] Additional arguments passed to the instance.
 */
export type DataConstructorInput<
  I extends DataShape<T, C, R>,
  A extends DataAdapter<T, C, R>,
  C extends { async?: boolean },
  T,
  R extends boolean = C['async'] extends boolean ? C['async'] : false,
  G extends readonly any[] = any[]
> = DataConstructor<I, A, C, T, R, G> | DataConstructorTuple<I, A, C, T, R, G>;
