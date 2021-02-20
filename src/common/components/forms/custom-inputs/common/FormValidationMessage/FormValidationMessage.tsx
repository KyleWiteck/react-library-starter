import { Text } from "@chakra-ui/react";
import React from "react";
import { validationMessage } from "./FormValidationMessage.types";

const FormValidationMessage = (props: validationMessage) => {
  // props
  const { errorMessage, disableChakraStyles, ...chakraOverrides } = props;

  return (
    <Text
      className="form-validation-message"
      {...(!disableChakraStyles && { textAlign: "center", mt: "1.6em", color: "tomato", ...chakraOverrides })}
    >
      {errorMessage}
    </Text>
  );
};

export default FormValidationMessage;
