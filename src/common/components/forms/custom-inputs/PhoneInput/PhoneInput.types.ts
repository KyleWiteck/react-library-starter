import { CommonInputChakraOverrides, CommonInputProps } from "global.types";

export interface PhoneInputChakraUIPropOverrides extends CommonInputChakraOverrides {}

export interface PhoneInputProps extends CommonInputProps {
  value?: string;
  onChange: (value: string | number | undefined) => void;
  chakraUIPropOverrides?: PhoneInputChakraUIPropOverrides;
}
