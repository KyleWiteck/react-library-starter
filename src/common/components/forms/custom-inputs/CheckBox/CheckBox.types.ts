import { Checkbox, FormLabel } from "@chakra-ui/react";
import { CommonInputChakraOverrides, CommonInputProps } from "global.types";
import { ComponentProps } from "react";

export interface CheckBoxChakraUIPropOverrides extends CommonInputChakraOverrides {
  checkbox?: Omit<ComponentProps<typeof Checkbox>, "children" | "id" | "value" | "onChange" | "name" | "isChecked">;
  formLabel?: Omit<ComponentProps<typeof FormLabel>, "children" | "htmlFor">;
}

export type CheckboxLabelPositionUnion = "left" | "right";

export interface CheckBoxProps
  extends Omit<CommonInputProps, "name" | "label" | "id" | "placeholder" | "labelPosition"> {
  label: string;
  name: string;
  index: number;
  id: string;
  value: string | number;
  onChange: (value: string | number | undefined) => void | undefined;
  chakraUIPropOverrides?: CheckBoxChakraUIPropOverrides;
  labelPosition?: CheckboxLabelPositionUnion;
}
