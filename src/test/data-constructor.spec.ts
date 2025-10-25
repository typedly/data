import { DataConstructor } from "@typedly/constructor";
import { DataShape } from "../lib";

class TestData implements DataShape<number> {
  get value(): number { return this.initialValue; }
  constructor(private initialValue: number) {}
  public clear(): this { return this; }
  public destroy(): this { return this; }
  public lock(): this { return this; }
  public set(): this { return this; }
}

export const ctor: DataConstructor<number, DataShape<number>, DataShape<number>, any[]> = TestData;
