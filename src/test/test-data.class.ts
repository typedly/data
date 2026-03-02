import { DataShape } from "../lib";

// Create a simple data class with value as property.
export class TestData<T, C extends { async?: boolean } = { async: false }> implements DataShape<T, C, false> {
  get async(): false { return false; }
  get value(): T { return 27 as unknown as T; }
  clear(): this { return this; }
  destroy(): this { return this; }
  getValue(): T { return 27 as unknown as T; }
  lock(): this { return this; };
  setValue(value: T): this { return this; }
  constructor(value: T, ...args: any[]) {
    console.log(`Instantiated DataConstructor`, value, ...args);
  }
}