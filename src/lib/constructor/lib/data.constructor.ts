// Interface.
import { DataShape } from '../../interface';
/**
 * @description The constructor interface for data types.
 * @export
 * @interface DataConstructor
 * @template {DataShape<T, C, R>} I The data instance type.
 * @template {{ async?: boolean }} C The configuration type, inferred from `I` if possible.
 * @template T The underlying value type, inferred from `I` if possible.
 * @template {boolean} [R=C['async'] extends boolean ? C['async'] : false] The async flag, inferred from `I` if possible.
 * @template {readonly any[]} [G=any[]] Additional arguments.
 */
export interface DataConstructor<
  I extends DataShape<T, C, R>,
  C extends { async?: boolean } = I extends DataShape<any, infer V, any> ? V : any,
  T = I extends DataShape<infer U, any, any> ? U : any,
  R extends boolean = I extends DataShape<T, C, infer U> ? U extends boolean ? U : false : false,
  G extends readonly any[] = any[]
> {
  new (
    settings: C,
    value: T,
    ...args: G
  ): I;
}
