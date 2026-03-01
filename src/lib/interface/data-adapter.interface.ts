// Interface.
import { DataShape } from './data.shape';
/**
 * @description The adapter interface for data types.
 * @export
 * @interface DataAdapter
 * @template T The type of the data value.
 * @template C The type of the configuration object.
 * @template {boolean} [A=false] The type of the return values for methods.
 * @extends {DataShape<T, C, A>}
 */
export interface DataAdapter<
  T,
  C,
  A extends boolean = C extends { async?: boolean } ? C['async'] extends boolean ? C['async'] : false : false
> extends DataShape<T, C, A> {
  version?: string;
}
