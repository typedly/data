import { DataAdapterShape, DataAdapterConstructor, DataConstructorInput, AdaptableDataShape } from "../lib";
import { AdaptableDataConstructorInput } from "../adaptable/lib/temp/adaptable-data-constructor-input.type";

export class ProfileData<
  A extends DataAdapterShape<T, C, any>,
  T = A extends DataAdapterShape<infer VT, any, any> ? VT : never,
  C extends { async?: boolean } = A extends DataAdapterShape<any, infer VC, any> ? VC : never,
  G extends readonly any[] = any[]
> implements AdaptableDataShape<A,T, C, false> {
  get async(): false { return this.#adapter?.async ?? false; }
  get configuration(): C | undefined { return this.#adapter?.configuration; }
  get value(): T { return this.#adapter?.value as T; }
  setValue(value: T): this { this.#adapter?.setValue(value); return this; }
  getValue(): T { return this.#adapter?.value as T; }
  clear(): this { this.#adapter?.clear(); return this; }
  destroy(): this { this.#adapter?.destroy(); return this; }
  lock(): this { this.#adapter?.lock(); return this; };
  #adapter?: A;
  constructor(
    settings: C,
    value: T,
    adapter: DataAdapterConstructor<A, C, T, any, G>,
    ...args: G
  ) {
    this.#adapter = adapter ? new adapter(settings, value, ...args) : undefined;
    console.log(`Instantiated Tuple`, value, ...args);
  }
}

export class HttpDataAdapter<
  T,
  C extends { async?: boolean },
  G extends readonly any[] = any[]
> implements DataAdapterShape<T, C, false> {
  version = '1.0.0'; 
  get async(): false { return false; }
  get configuration(): C | undefined { return this.#settings; }
  get value(): T { return undefined as unknown as T; }
  setValue(value: T): this { return this; }
  getValue(): T { return undefined as unknown as T; }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  #settings: C;
  constructor(
    settings: C,
    value: T,
    ...args: G
  ) {
    this.#settings = settings;
    console.log(`Instantiated Tuple`, value, ...args);
  }
}



export class Profile<
  A extends DataAdapterShape<T, C, R>,
  I extends AdaptableDataShape<A, T, C, R>,
  C extends { async?: boolean } = A extends DataAdapterShape<any, infer VC, any> ? VC : never,
  T = A extends DataAdapterShape<infer VT, any, any> ? VT : never,
  R extends boolean = A extends DataAdapterShape<any, any, infer VR> ? VR extends boolean ? VR : false : false,
  G extends readonly any[] = any[]
> {
  constructor(
    settings: C,
    value: T,
    adapter: DataAdapterConstructor<A, C, T, R, G> | undefined,
    dataCtor: AdaptableDataConstructorInput<A, I, C, T, R, G>,
    ...args: G
  );
  constructor(
    settings: C,
    value: T,
    adapterCtor: any,
    dataCtor: any,
    ...args: G
  ) {
    console.log(`DataConstructorInput`, value, dataCtor[1]);
    if (Array.isArray(dataCtor)) {
      // new dataCtor[0](settings, value, ...dataCtor.slice(1));
    }
  }
}


// const testData1: TestDataClass<number, DataShape<number>, any[]>
const testData2 = new Profile(
  { async: false },
  new Set([1, 2, 3]),
  undefined,
  ProfileData,
);

// const testData1: TestDataClass<number, DataShape<number>, any[]>
const testData1 = new Profile(
  { async: false },
  new Set([1, 2, 3]),
  HttpDataAdapter,
  [ProfileData],
);

// const testData: TestDataClass<number, TestData<number>, [number, number]>
const testData = new Profile(
  { async: false },
  new Set([37]),
  HttpDataAdapter,
  [ProfileData, 42, 100],
  1, 2,
);
