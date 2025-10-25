import { DataConstructorInput, DataShape } from "../lib";

function createData<Value, DataType extends DataShape<Value>>(
  input: DataConstructorInput<Value, DataType>,
  value: Value
): DataType {
  if (Array.isArray(input)) {
    const [Ctor, ...args] = input;
    return new Ctor(value, ...args);
  } else {
    return new input(value);
  }
}
