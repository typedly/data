import { DataConstructor, DataShape, ValueConstructor, ValueShape } from "../lib";

// Import DataShape and DataConstructor.
// Create a data class that implements `DataShape` of `Type`.
export class ProfileData<
  Value extends { age: number, name: string }
> implements DataShape<Value> {

  get value(): Value {
    return {
      age: this.#age,
      name: this.#name
    } as Value;
  }

  #age;
  #name;
  constructor(value: Value, ...args: any[]) {
    console.log(`Instantiated DataConstructor`, value, ...args);
    this.#age = value.age;
    this.#name = value.name;
  }

  set(value: Value): this { this.validate(value); return this; }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  validate(value: Value): boolean {
    return true;
  }
}

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

  public get data() {
    return this.#data;
  }

  #data: DataType;

  constructor(value: Value, dataCtor: DataConstructor<Value, DataType>);
  constructor(value: Value, dataCtor: [DataConstructor<Value, DataType>, ...Args]);
  constructor(value: Value, dataCtor: any) {
    // ...implementation
    console.log(`DataConstructor`, value, dataCtor[1]);
    this.#data = Array.isArray(dataCtor)
      ? new dataCtor[0](value, ...dataCtor.slice(1))
      : new dataCtor(value);
  }
}

// Initialize.
// const frankProfile: ProfileClass<object, ProfileData<object>, any[]>
const frankProfile = new ProfileClass({ age: 37, name: 'Frank' }, ProfileData);

frankProfile.age; // 37
frankProfile.name; // Frank

// Set the data.
frankProfile.data.set({ age: 37, name: 'Frank' });
frankProfile.data.clear();
frankProfile.data.lock();
frankProfile.data.value;

// Initialize with arguments.
const markProfile = new ProfileClass(
  { age: 27, name: 'Mark' },
  [ProfileData, 'private', true]
);





// Example with the customized Data value.





