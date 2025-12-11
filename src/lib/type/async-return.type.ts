/**
 * @description The conditional return type for async methods.
 * @export
 * @template Async The boolean flag indicating if the return type should be a Promise.
 * @template T The type of the value to be returned.
 */
export type AsyncReturn<Async, T> = Async extends true ? Promise<T> : T;
