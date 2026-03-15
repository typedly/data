/*
 * Public API Surface of data
 */
export type {
  DataConfig,
  DataSettings,
} from './configuration';

export type {
  InferAsync,
  InferAsyncOf,
  InferValue,
} from './inference';

export type {
  IterableElement,
  IterValue,
} from './iterable';

export type {
  DataConstructor,
  DataShape,
} from './lib/interface';

export type {
  AsyncReturn,
  DataConstructorInput,
  DataConstructorTuple,
} from './lib/type';

export type {
  ValueConstructor,
  ValueShape,
} from './value';