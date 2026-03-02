/*
 * Public API Surface of data
 */
export type {
  // Data adapter constructor.
  DataAdapterConstructor,

  // Data Constructor.
  AdaptableDataConstructor,
  DataConstructor,

  // Value Constructor.
  ValueConstructor,

  // Data adapter Interface.
  DataAdapterShape,

  // Data Interface.
  AdaptableDataShape,
  DataShape,

  // Value Interface.
  ValueShape,

  // Adaptable data constructor input and tuple.
  AdaptableDataConstructorInput,
  AdaptableDataConstructorTuple,

  // Data constructor input and tuple.
  DataConstructorInput,
  DataConstructorTuple,

  // Type.
  AsyncReturn,
  IterValue
} from './lib';