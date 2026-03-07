// Type.
import { InferAsync } from "./infer-async.type";
/**
 * @description
 * @export
 * @template {readonly any[]} A 
 * @template [F=false] 
 */
export type InferAsyncOf<A extends readonly any[], F = false> =
  A extends [infer Head, ...infer Tail]
    ? InferAsync<Head> extends true
      ? true
      : InferAsyncOf<Tail>
    : F;