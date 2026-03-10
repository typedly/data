/*
 * Public API Surface of data
 */

export type {
  AdaptableDataConstructor,
  AdaptableDataShape
} from './adaptable';

export type {
  DataAdapterConstructor,
  DataAdapterShape,
} from './adapter';

export type {
  ConfigurableDataShape
} from './configurable';

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

  // Infer types.
  InferAsync,
  InferAsyncOf,
  InferValue,

  // Iterables.
  IterValue,
  IterableElement,
} from './lib/type';

export type {
  // Interfaces.
  Adaptable,
  Configurable,
  Serializable,
  Transformable,
} from './traits';

export type {
  ValueConstructor,
  ValueShape,
} from './value';