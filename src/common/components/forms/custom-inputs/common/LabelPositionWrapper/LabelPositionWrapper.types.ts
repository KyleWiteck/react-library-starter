import { BoxProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export type PositionUnion = "top" | "bottom" | "left" | "right";

export interface PositionMap {
  top: { flexDirection: BoxProps["flexDirection"] };
  bottom: { flexDirection: BoxProps["flexDirection"] };
  left: {
    flexDirection: BoxProps["flexDirection"];
    alignItems: BoxProps["alignItems"];
    alignContent: BoxProps["alignContent"];
    justifyContent: BoxProps["justifyContent"];
  };
  right: {
    flexDirection: BoxProps["flexDirection"];
    alignItems: BoxProps["alignItems"];
    alignContent: BoxProps["alignContent"];
    justifyContent: BoxProps["justifyContent"];
  };
}

export interface LabelPositionWrapperProps {
  position?: PositionUnion;
  children?: ReactElement;
}
