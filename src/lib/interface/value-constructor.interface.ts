// Interface.
import { ValueShape } from "./value-shape.interface";
/**
 * @description The constructor for value in data for advanced customization.
 * @export
 * @interface ValueConstructor
 * @template Value The type of value.
 * @template {ValueShape<Value>} Instance The type of value instance.
 */
export interface ValueConstructor<Value, Instance extends ValueShape<Value>> {
  new (value: Value, ...args: any[]): Instance;
}
