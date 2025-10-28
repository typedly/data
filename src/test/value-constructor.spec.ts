import { ValueShape, ValueConstructor, DataShape, DataConstructor } from '../lib';

// Import ValueShape and ValueConstructor.
// Create a profile data value.
export class ProfileDataValue<
  Type extends { age: number, name: string },
  Args extends any[] = any[]
> implements ValueShape<Type> {
  get value(): Type {
    return {
      age: this.#age,
      name: this.#name
    } as Type;
  }

  #age: Type['age'];
  #name: Type['name'];

  constructor(value: Type, ...args: Args) {
    console.log(`Instantiated ValueConstructor`, value, ...args);
    this.#age = value.age;
    this.#name = value.name;
  }

  set(value: Type): this { return this; }
}

export class ProfileDataOfValue<
  Value extends { age: number, name: string },
  Args extends any[] = any[],
  ValueInstance extends ValueShape<Value> = ProfileDataValue<Value, Args>,
> implements DataShape<Value> {

  get value(): Value {
    return {
    } as Value;
  }

  get valueInstance(): ValueInstance {
    return this.#value;
  }

  #value;
  constructor(
    value: Value,
    valueCtor: ValueConstructor<Value, ValueInstance, Args> = ProfileDataValue<Value, Args> as any,
    ...args: Args
  ) {
    console.log(`Instantiated DataConstructor`, value, ...args);
    this.#value = new valueCtor(value, ...args);
  }

  set(value: Value): this { this.validate(value); return this; }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  validate(value: Value): boolean {
    return true;
  }
}

// const profileDataOfValue: ProfileDataOfValue<{
//     age: number;
//     name: string;
// }, ProfileDataValue<{
//     age: number;
//     name: string;
// }, []>, []>
const profileDataOfValue = new ProfileDataOfValue({
  age: 37,
  name: 'Mark'
}, ProfileDataValue);

const dataSymbol = Symbol('data');

// Create `ProfileClass` with customizable data.
export class ProfileClass<
  Value extends { age: number, name: string },
  DataType extends DataShape<Value>,
  Args extends any[]
> {

  public get age(): Value['age'] {
    return this.#data.value.age;
  }

  public get name(): Value['name'] {
    return this.#data.value.name;
  }

  public get [dataSymbol]() {
    return this.#data;
  }

  #data: DataType;

  constructor(value: Value, dataCtor: DataConstructor<Value, DataType, Args>);
  constructor(value: Value, dataCtor: [DataConstructor<Value, DataType, Args>, ...Args]);
  constructor(value: Value, dataCtor: any) {
    // ...implementation
    console.log(`DataConstructor`, value, dataCtor[1]);
    this.#data = Array.isArray(dataCtor)
      ? new dataCtor[0](value, ...dataCtor.slice(1))
      : new dataCtor(value);
  }
}

const markProfile = new ProfileClass({ age: 37, name: 'Mark' }, ProfileDataOfValue);

markProfile.age // 37
markProfile.name // Mark
markProfile[dataSymbol].value // { age, name }
markProfile[dataSymbol].valueInstance.set({ age: 27, name: 'Frank' });
