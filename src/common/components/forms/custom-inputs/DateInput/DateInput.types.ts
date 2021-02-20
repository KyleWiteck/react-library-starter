import { CommonInputChakraOverrides, CommonInputProps } from "global.types";

export interface DateInputChakraUIPropOverrides extends CommonInputChakraOverrides {}

export type DateValue = string | undefined;

export interface DateInputProps extends CommonInputProps {
  value?: DateValue;
  limitUpperYear?: number;
  limitLowerYear?: number;
  onChange: (value: DateValue) => void | undefined;
  chakraUIPropOverrides?: DateInputChakraUIPropOverrides;
}
