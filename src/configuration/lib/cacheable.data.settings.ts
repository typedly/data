// Interface.
import type { CacheableSettings } from "./cacheable.settings";
import type { DataSettings } from "./data.settings";
/**
 * @description The cacheable data settings type combines the data settings with the cacheable settings, 
 * allowing for optional or required asynchronous functions for fetching and updating the data value based on the read-only flag.
 * @export
 * @template T 
 * @template {boolean} [R=false] The type of the asynchronous operations.
 */
export type CacheableDataSettings<T, R extends boolean = false> =
  DataSettings<R> & (R extends true
    ? CacheableSettings<T> & Required<Pick<CacheableSettings<T>, 'fetcher' | 'updater'>>
    : CacheableSettings<T>);