// Interface.
import { DataShape } from './data-shape.interface';
/**
 * @description The adapter interface for data types.
 * @export
 * @interface DataAdapter
 * @template T The type of the data value.
 * @template {boolean} [R=false] The type of the return values for methods.
 * @extends {DataShape<T, R>}
 */
export interface DataAdapter<T, R extends boolean = false>
  extends DataShape<T, R> {
    version?: string;
}
