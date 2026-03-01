// Interface.
import { DataShape } from './data-shape.interface';
/**
 * @description The adapter interface for data types.
 * @export
 * @interface DataAdapter
 * @template T The type of the data value.
 * @template {boolean} [A=false] The type of the return values for methods.
 * @extends {DataShape<T, A>}
 */
export interface DataAdapter<T, A extends boolean = false>
  extends DataShape<T, A> {
    version?: string;
}
