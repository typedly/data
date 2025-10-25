// Interface.
import { DataConstructor, DataShape } from "../interface";
/**
 * @description The input type for data constructors, with arguments support.
 * @export
 * @template Value 
 * @template {DataCore<Value>} DataType 
 */
export type DataConstructorInput<Value, DataType extends DataShape<Value>> =
  | [DataConstructor<Value, DataType>, ...any[]]
  | DataConstructor<Value, DataType>
;
