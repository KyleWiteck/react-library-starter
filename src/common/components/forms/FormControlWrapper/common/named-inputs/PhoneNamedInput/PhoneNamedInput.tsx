import PhoneInput from "common/components/forms/custom-inputs/PhoneInput/PhoneInput";
import React from "react";
import { PhoneNamedInputProps } from "./PhoneNamedInput.types";

const PhoneNamedInput = React.forwardRef<HTMLInputElement, PhoneNamedInputProps>(
  (props: PhoneNamedInputProps, forwardRef) => {
    return <PhoneInput name="phone" ref={forwardRef} {...props} />;
  }
);

export default PhoneNamedInput;
