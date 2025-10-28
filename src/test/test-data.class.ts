import { DataShape } from "../lib";

// Create a simple data class with value as property.
export class TestData<Type> implements DataShape<Type> {
  get value(): Type { return 27 as Type; }
  set(value: Type): this { return this; }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  constructor(value: Type, ...args: any[]) {
    console.log(`Instantiated DataConstructor`, value, ...args);
  }
}