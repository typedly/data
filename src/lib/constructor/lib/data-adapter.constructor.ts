/// Interface
import { DataAdapter } from "../../interface";
/**
 * @description The constructor interface for data adapters.
 * @export
 * @interface DataAdapterConstructor
 * @template {DataAdapter<T, C, R>} I The data adapter instance type.
 * @template {{ async?: boolean }} C The configuration type.
 * @template T The underlying value type.
 * @template {boolean} [R=C['async'] extends boolean ? C['async'] : false] The async flag.
 * @template {readonly any[]} [G=any[]] Additional arguments.
 */
export interface DataAdapterConstructor<
  I extends DataAdapter<T, C, R>,
  C extends { async?: boolean },
  T,
  R extends boolean = C['async'] extends boolean ? C['async'] : false,
  G extends readonly any[] = any[]
> {
  new (
    settings: C,
    value: T,
    ...args: G
  ): I;
}
