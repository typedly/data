// Interface.
import { DataShape, DataConstructor, DataAdapter } from "../";
/**
 * @description The type to provide data constructor with arguments.
 * @export
 * @template {DataShape<T, C, R>} I 
 * @template {DataAdapter<T, C, R>} A 
 * @template {{ async?: boolean }} C 
 * @template T 
 * @template {boolean} [R=C['async'] extends boolean ? C['async'] : false] 
 * @template {readonly any[]} [G=any[]] 
 */
export type DataConstructorTuple<
  I extends DataShape<T, C, R>,
  A extends DataAdapter<T, C, R>,
  C extends { async?: boolean },
  T,
  R extends boolean = C['async'] extends boolean ? C['async'] : false,
  G extends readonly any[] = any[]
> = [DataConstructor<I, A, C, T, R, G>, ...G];
