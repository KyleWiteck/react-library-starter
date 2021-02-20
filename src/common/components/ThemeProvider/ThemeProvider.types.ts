import { ChakraProviderProps } from "@chakra-ui/react";

export interface ThemeProviderProps extends Omit<ChakraProviderProps, "theme"> {
  theme?: ChakraProviderProps["theme"];
}
