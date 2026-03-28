/**
 * @description The settings for a data type.
 * @export
 * @interface DataSettings 
 * @template {boolean} [R=false] The async flag.
 */
export interface DataSettings<R extends boolean = false> {
  /**
   * @description Optional async flag to indicate whether the data type is asynchronous.
   * @default false
   * @type {?R}
   */
  async?: R;

  /**
   * @description Optional tag to categorize the data type.
   * @type {?string}
   */
  tag?: string;
}
