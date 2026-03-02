// Interface.
import { DataConstructor as BaseDataConstructor } from '@typedly/constructor';
import { ValueShape } from "../../interface";
/**
 * @description The constructor for value in data for advanced customization.
 * @export
 * @interface ValueConstructor
 * @template T The value type.
 * @template {ValueShape<T>} I The instance.
 * @template {readonly any[]} [G=any[]] Additional arguments passed to the constructor.
 * @extends {BaseDataConstructor<T, ValueShape<T>, I, [...G]>}
 */
export interface ValueConstructor<
  T,
  I extends ValueShape<T>,
  G extends readonly any[] = any[]
> extends BaseDataConstructor<T, ValueShape<T>, I, [...G]> {}
