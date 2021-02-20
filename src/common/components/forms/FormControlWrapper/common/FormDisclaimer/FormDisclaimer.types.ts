import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

export interface FormDisclaimerChakraUIPropOverrides extends Omit<ComponentProps<typeof Text>, "children"> {}

export interface FormDisclaimerProps {
  disclaimerText?: string;
  chakraUIPropOverrides?: FormDisclaimerChakraUIPropOverrides;
  disableChakraStyles?: boolean;
}
