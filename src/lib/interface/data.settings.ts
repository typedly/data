/**
 * @description The settings for a data type.
 * @export
 * @interface DataSettings 
 * @template {boolean} [R=false] The async flag.
 */
export interface DataSettings<R extends boolean = false> {
  async?: R;
}
