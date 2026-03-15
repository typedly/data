// Type.
import { InferAsync } from "./infer-async.type";
/**
 * @description Infers the async flag from a tuple of arguments, returning true if any of the arguments has an async flag set to true.
 * @export
 * @template {readonly any[]} A The tuple of arguments to infer the async flag from.
 * @template [F=false] The default async flag value if the tuple is empty.
 */
export type InferAsyncOf<A extends readonly any[], F = false> =
  A extends [infer Head, ...infer Tail]
    ? InferAsync<Head> extends true
      ? true
      : InferAsyncOf<Tail>
    : F;