import { DataConstructorTuple } from "../lib";
import { DataShape } from "../lib";

export class TestData<Type> implements DataShape<Type> {
  get value(): Type { return 27 as Type; }
  set(value: Type): this { return this; }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  constructor(value: Type, ...args: any[]) {
    console.log(`Instantiated Tuple`, value, ...args);
  }
}

export class TestDataClass<Value, DataType extends DataShape<Value>, Args extends any[]> {
  constructor(value: Value, dataCtor: DataConstructorTuple<Value, DataType, Args>);
  constructor(value: Value, dataCtor: any) {
    console.log(`DataConstructorTuple`, value, dataCtor[1]);
    if (Array.isArray(dataCtor)) {
      new dataCtor[0](value, ...dataCtor.splice(1));
    }
  }
}

const testData = new TestDataClass(37, [TestData, 1, 2]);
