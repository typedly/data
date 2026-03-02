import { ValueShape, ValueConstructor, DataShape, DataConstructor } from '../lib';

// Import ValueShape and ValueConstructor.
// Create a profile data value.
export class ProfileDataValue<
  T extends { age: number, name: string },
  G extends any[] = any[]
> implements ValueShape<T> {
  get value(): T {
    return {
      age: this.#age,
      name: this.#name
    } as T;
  }

  #age: T['age'];
  #name: T['name'];

  constructor(value: T, ...args: G) {
    console.log(`Instantiated ValueConstructor`, value, ...args);
    this.#age = value.age;
    this.#name = value.name;
  }

  set(value: T): this { return this; }
}

export class ProfileDataOfValue<
  T extends { age: number, name: string },
  G extends any[] = any[],
  I extends ValueShape<T> = ProfileDataValue<T, G>,
> implements DataShape<T, { async?: boolean }, false> {
  get async(): false { return false; }
  get value(): T {
    return this.#value.value;
  }

  get valueInstance(): I {
    return this.#value;
  }

  #value: I;
  constructor(
    settings: { async?: boolean },
    value: T,
    valueCtor: ValueConstructor<T, I, G> = ProfileDataValue<T, G> as any,
    ...args: G
  ) {
    console.log(`Instantiated DataConstructor`, value, ...args);
    this.#value = new valueCtor(value, ...args);
  }

  setValue(value: T): this { this.validate(value); return this; }
  getValue(): T {
    return this.#value.value;
  }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  validate(value: T): boolean {
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
const profileDataOfValue = new ProfileDataOfValue({}, {
  age: 37,
  name: 'Mark'
}, ProfileDataValue);

const dataSymbol = Symbol('data');

// Create `ProfileClass` with customizable data.
export class ProfileClass<
  T extends { age: number, name: string },
  I extends DataShape<T, { async?: boolean }, false>,
  G extends any[]
> {

  public get age(): T['age'] {
    return this.#data.value.age;
  }

  public get name(): T['name'] {
    return this.#data.value.name;
  }

  public get [dataSymbol]() {
    return this.#data;
  }

  #data: I;

  constructor(value: T, dataCtor: DataConstructor<I, { async?: boolean }, T, false, G>);
  constructor(value: T, dataCtor: [DataConstructor<I, { async?: boolean }, T, false, G>, ...G]);
  constructor(value: T, dataCtor: any) {
    // ...implementation
    console.log(`DataConstructor`, value, dataCtor[1]);
    this.#data = Array.isArray(dataCtor)
      ? new dataCtor[0]({}, value, ...dataCtor.slice(1))
      : new dataCtor({}, value);
  }
}

const markProfile = new ProfileClass({ age: 37, name: 'Mark' }, ProfileDataOfValue);

markProfile.age // 37
markProfile.name // Mark
markProfile[dataSymbol].value // { age, name }
markProfile[dataSymbol].valueInstance.set({ age: 27, name: 'Frank' });
