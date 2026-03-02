import type { DataAdapterConstructor } from '../';
import { AdaptableDataShape, DataAdapterShape } from '../../interface';

// Create the `Profile` class.
export class Profile<
  // Data adapter instance.
  A extends DataAdapterShape<T, C, any> | undefined = undefined,
  // Type of the value inferred from the data adapter.
  T = A extends DataAdapterShape<infer U, any, any> ? U : any,
  // Configuration type inferred from the data adapter.
  C extends { async?: boolean } = A extends DataAdapterShape<any, infer V, any> ? V : any,
  // Additional arguments type.
  G extends readonly any[] = any[]
  // Implements the adaptable data shape, with the adapter type, value type, configuration type, and async flag inferred from the adapter if provided.
> implements AdaptableDataShape<A,T, C, false> {
  get async(): false { return this.#adapter?.async ?? false; }
  get configuration(): C | undefined { return this.#adapter?.configuration || this.#configuration; }
  get value(): T { return this.#adapter?.value ?? this.#value as T; }
  setValue(value: T): this { this.#adapter?.setValue(value) ?? (this.#value = value); return this; }
  getValue(): T { return this.#adapter?.value ?? this.#value as T; }
  clear(): this { this.#adapter?.clear(); return this; }
  destroy(): this { this.#adapter?.destroy(); return this; }
  lock(): this { this.#adapter?.lock(); return this; };
  #adapter?: A;
  #configuration?: C;
  #value?: T;
  constructor(
    settings: C,
    value: T,
  );
  constructor(
    settings: C,
    value: T,
    adapter?: DataAdapterConstructor<A & DataAdapterShape<T, C, false>, C, T, false, G>,
    ...args: G
  )
  constructor(
    settings: C,
    value: T,
    adapter?: any,
    ...args: any[]
  ){
    adapter
      ? (this.#adapter = new adapter(settings, value, ...args))
      : (this.#configuration = settings, this.#value = value);
    console.log(`Instantiated`, value, ...args);
  }
}

console.group('TestData');
const testData = new Profile({}, [1]);

console.log(`async: `, testData.async);
console.log(`configuration: `, testData.configuration);
console.log(`value: `, testData.value);
testData.setValue([42]);
console.log(`getValue: `, testData.getValue());
testData.clear();
testData.destroy();
testData.lock();
console.groupEnd();


export class SetDataAdapter<
  T extends Set<any>,
  C extends { async?: boolean },
  G extends readonly any[] = any[]
> implements DataAdapterShape<T, C, false> {
  version = '1.0.0'; 
  get async(): false { return false; }
  get configuration(): C | undefined { return this.#settings; }
  get value(): T { return this.#value; }
  setValue(value: T): this { this.#value = value; return this; }
  getValue(): T { return this.#value }
  clear(): this { this.#value.clear(); return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  #settings: C;
  #value: T;
  constructor(
    settings: C,
    value: T,
    ...args: G
  ) {
    this.#value = value;
    this.#settings = settings;
    console.log(`Instantiated SetDataAdapter`, value, ...args);
  }
}

console.group('TestData with SetDataAdapter');
const testAdapterData = new Profile({ async: false }, new Set([1]), SetDataAdapter);

console.log(`async: `, testAdapterData.async);
console.log(`configuration: `, testAdapterData.configuration);
console.log(`value: `, testAdapterData.value);
testAdapterData.setValue(new Set([42]));
console.log(`getValue: `, testAdapterData.getValue());
testAdapterData.clear();
testAdapterData.destroy();
testAdapterData.lock();
console.groupEnd();

