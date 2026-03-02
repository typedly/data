import { DataConstructorTuple } from "../lib";
import { DataShape } from "../lib";

export class WebStorageData<T, C extends { async?: boolean } = { async?: boolean }> implements DataShape<T, C, false> {
  get async(): false { return false; }
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

export class Profile<
  I extends DataShape<T, C, R>,
  T,
  C extends { async?: boolean } = { async?: boolean },
  R extends boolean = false,
  G extends any[] = any[]
> {
  constructor(value: T, dataCtor: DataConstructorTuple<I, C, T, R, G>);
  constructor(value: T, dataCtor: any) {
    console.log(`DataConstructorTuple`, value, dataCtor[1]);
    if (Array.isArray(dataCtor)) {
      new dataCtor[0]({async: false}, value, ...dataCtor.slice(1));
    }
  }
}

const testData = new Profile(37 as number, [WebStorageData, 1, 2]);
