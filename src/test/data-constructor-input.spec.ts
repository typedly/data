import { DataAdapter, DataConstructorInput } from "../lib";
import { DataShape } from "../lib";

export class TestData<
  T,
  C extends { async?: boolean },
> implements DataShape<T, C, false> {
  get async(): false { return false; }
  get configuration(): C | undefined { return undefined; }
  get value(): T { return 27 as T; }
  setValue(value: T): this { return this; }
  getValue(): T {
    return 27 as T;
  }
  clear(): this { return this; }
  destroy(): this { return this; }
  lock(): this { return this; };
  constructor(settings: C, value: T, ...args: any[]) {
    console.log(`Instantiated Tuple`, value, ...args);
  }
}

export class TestDataClass<
  I extends DataShape<T, C, R>,
  A extends DataAdapter<T, C, R>,
  C extends { async?: boolean },
  T,
  R extends boolean = C['async'] extends boolean ? C['async'] : false,
  G extends readonly any[] = any[]
> {
  constructor(settings: C, value: T, dataCtor: DataConstructorInput<I, A, C, T, R, G>);
  constructor(settings: C, value: T, dataCtor: any) {
    console.log(`DataConstructorInput`, value, dataCtor[1]);
    if (Array.isArray(dataCtor)) {
      new dataCtor[0](settings, value, ...dataCtor.slice(1));
    }
  }
}

// const testData: TestDataClass<number, TestData<number>, [number, number]>
const testData = new TestDataClass({}, 37 as number, [TestData, 27, 127]);

// const testData1: TestDataClass<number, DataShape<number>, any[]>
const testData1 = new TestDataClass({}, 37 as number, TestData);
