import { Box } from "@chakra-ui/react";
import { ComponentProps, CSSProperties } from "react";

export interface StarRatingProps extends Omit<ComponentProps<typeof Box>, "className" | "id"> {
  rating: number;
  colors?: { starRated: string; starEmpty: string };
  numberOfStars?: number;
  id: string;
  svgStarStyles?: CSSProperties;
  disableChakraStyles?: boolean;
  starClassName?: string;
  starSetContainerClassName?: string;
}
