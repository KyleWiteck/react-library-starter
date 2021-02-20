import { CommonInputChakraOverrides, CommonInputProps } from "global.types";

export interface ZipCodeInputChakraUIPropOverrides extends CommonInputChakraOverrides {}

export interface ZipCodeInputProps extends CommonInputProps {
  value?: string | undefined;
  onChange: (value: string | undefined) => void;
  chakraUIPropOverrides?: ZipCodeInputChakraUIPropOverrides;
}
