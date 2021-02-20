import { FormLabel, Switch } from "@chakra-ui/react";
import { CommonInputChakraOverrides, CommonInputProps } from "global.types";
import { ComponentProps } from "react";

export interface SwitchChakraUIPropOverrides extends CommonInputChakraOverrides {
  switch?: Omit<ComponentProps<typeof Switch>, "children" | "id" | "value" | "onChange" | "name" | "isChecked">;
  formLabel?: Omit<ComponentProps<typeof FormLabel>, "children" | "htmlFor">;
}

export type SwitchLabelPositionUnion = "left" | "right";

export interface SwitchProps extends Omit<CommonInputProps, "name" | "label" | "id" | "placeholder" | "labelPosition"> {
  label: string;
  name: string;
  index: number;
  id: string;
  value: string | number;
  onChange: (value: string | number | boolean | undefined) => void | undefined;
  chakraUIPropOverrides?: SwitchChakraUIPropOverrides;
  labelPosition?: SwitchLabelPositionUnion;
}
