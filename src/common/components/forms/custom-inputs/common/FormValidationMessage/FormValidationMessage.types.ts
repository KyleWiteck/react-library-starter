import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

export type FormValidationMessagechakraUIPropOverrides = Omit<ComponentProps<typeof Text>, "children" | "className">;

export interface validationMessage extends FormValidationMessagechakraUIPropOverrides {
  errorMessage: string;
  disableChakraStyles?: boolean;
}
