// Interface.
import { DataShape } from './data.shape';
/**
 * @description The adapter interface for data types.
 * @export
 * @interface DataAdapterShape
 * @template T The type of the data value.
 * @template C The type of the configuration object.
 * @template {boolean} [R=false] The type of the return values for methods.
 * @extends {DataShape<T, C, R>}
 */
export interface DataAdapterShape<
  T,
  C,
  R extends boolean = C extends { async?: boolean } ? C['async'] extends boolean ? C['async'] : false : false
> extends DataShape<T, C, R> {
  version?: string;
}
