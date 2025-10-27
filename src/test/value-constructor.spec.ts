import { ValueShape, ValueConstructor } from '../lib';

export class TestValue<Type> implements ValueShape<Type> {
  get value(): Type { return 27 as Type; }
  set(value: Type): this { return this; }
  constructor(value: Type, ...args: any[]) {
    console.log(`Instantiated ValueConstructor`, value, ...args);
  }
}

export class TestValueClass<Value, ValueInstance extends ValueShape<Value>, Args extends any[]> {
  constructor(value: Value, valueCtor: ValueConstructor<Value, ValueInstance>);
  constructor(value: Value, valueCtor: [ValueConstructor<Value, ValueInstance>, ...Args]);
  constructor(value: Value, valueCtor: any) {
    console.log(`ValueConstructor`, value, valueCtor[1]);
    if (Array.isArray(valueCtor)) {
      new valueCtor[0](value, ...valueCtor.splice(1));
    } else {
      new valueCtor(value);
    }
  }
}

const testValue = new TestValueClass(137, TestValue);
