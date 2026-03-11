/*
 * Public API Surface of data
 */

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
  DataSettings,
  DataShape,
} from './lib/interface';

export type {
  AsyncReturn,

  // Configuration.
  DataConfig,
  DataConstructorInput,
  DataConstructorTuple,
} from './lib/type';

export type {
  ValueConstructor,
  ValueShape,
} from './value';