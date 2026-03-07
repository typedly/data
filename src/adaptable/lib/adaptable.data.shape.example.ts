import { ConfigurableDataShape } from "../../configurable";
import { InferAsyncOf } from "../../lib";
import { DataSettings } from "../../lib/interface";
import { AdaptableDataShape } from "./adaptable.data.shape";

// export class TestData<T, C extends { async?: boolean } = { async: false }> implements DataShape<T, false> {
//   get async(): false { return false; }
//   get value(): T { return 27 as unknown as T; }
//   clear(): this { return this; }
//   destroy(): this { return this; }
//   getValue(): T { return 27 as unknown as T; }
//   lock(): this { return this; };
//   setValue(value: T): this { return this; }
//   constructor(value: T, ...args: any[]) {
//     console.log(`Instantiated DataConstructor`, value, ...args);
//   }
// }

// export class AdaptableData<
//   A extends ConfigurableDataShape<T, C, R> | undefined = undefined,
//   C extends DataSettings<R> | undefined = A extends ConfigurableDataShape<any, infer V, any> ? V : any,
//   T = A extends ConfigurableDataShape<infer U, any, any> ? U : any,
//   R extends boolean = InferAsyncOf<[C, A]>
// > implements AdaptableDataShape<A, C, T, R> {

// }