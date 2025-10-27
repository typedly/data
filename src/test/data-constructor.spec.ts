import { DataConstructor, ValueConstructor, ValueShape } from "../lib";
import { DataShape } from "../lib";

// Simple data class with value as property.
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

export class TestDataClass<Value, DataType extends DataShape<Value>, Args extends any[]> {
  constructor(value: Value, dataCtor: DataConstructor<Value, DataType>);
  constructor(value: Value, dataCtor: [DataConstructor<Value, DataType>, ...Args]);
  constructor(value: Value, dataCtor: any) {
    // ...implementation
    console.log(`DataConstructor`, value, dataCtor[1]);
    if (Array.isArray(dataCtor)) {
      new dataCtor[0](value, ...dataCtor.splice(1));
    } else {
      new dataCtor(value);
    }
  }
}

const testData = new TestDataClass(37, TestData);

export class TestValue<Type> implements ValueShape<Type> {
  get value(): Type { return 27 as Type; }
  set(value: Type): this { return this; }
  constructor(value: Type, ...args: any[]) {
    console.log(`Instantiated ValueConstructor`, value, ...args);
  }
}

// Simple data class with value as property.
export class TestDataOfValue<
  Type,
  ValueType extends ValueShape<Type>,
  Args extends any[]
> implements DataShape<Type> {
  get value(): Type { return 27 as Type; }
  set(value: Type): this { return this; }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  constructor(value: Type, valueType: [ValueConstructor<Type, ValueType>, ...Args]);
  constructor(value: Type, valueType: ValueConstructor<Type, ValueType>,  ...args: Args);
  constructor(value: Type, valueType: any, ...args: any[]) {
    console.log(`Instantiated DataConstructor`, value, ...args);
  }
}

// const testDataOfValue1: TestDataOfValue<number, TestValue<number>, []>
const testDataOfValue1 = new TestDataOfValue(127, TestValue);

// const testDataOfValue2: TestDataOfValue<number, TestValue<number>, [number, number]>
const testDataOfValue2 = new TestDataOfValue(127, TestValue, 1, 2);

// const testDataOfValue3: TestDataOfValue<number, TestValue<number>, [number, number]>
const testDataOfValue3 = new TestDataOfValue(127, [TestValue, 1, 2]);
