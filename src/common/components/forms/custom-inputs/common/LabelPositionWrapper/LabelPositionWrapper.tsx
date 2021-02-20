import { Flex } from "@chakra-ui/react";
import React from "react";
import { LabelPositionWrapperProps, PositionMap } from "./LabelPositionWrapper.types";

const LabelPositionWrapper = (props: LabelPositionWrapperProps) => {
  // props
  const { position, children } = props;
  // state
  const positionMap: PositionMap = {
    top: { flexDirection: "column" },
    bottom: { flexDirection: "column-reverse" },
    left: { flexDirection: "row", alignItems: "center", alignContent: "center", justifyContent: "flex-start" },
    right: { flexDirection: "row-reverse", alignItems: "center", alignContent: "center", justifyContent: "flex-end" },
  };

  // refs

  // useEffects

  // Unique Functions

  return (
    <Flex className="label-position-wrapper" data-testid="label-position-wrapper" {...positionMap[position ?? "top"]}>
      {children}
    </Flex>
  );
};

export default LabelPositionWrapper;
