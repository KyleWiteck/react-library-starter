import DateInput from "common/components/forms/custom-inputs/DateInput/DateInput";
import React from "react";
import { DOBNamedInputProps } from "./DOBNamedInput.types";

const DOBNamedInput = React.forwardRef<HTMLInputElement, DOBNamedInputProps>(
  (props: DOBNamedInputProps, forwardRef) => {
    return <DateInput name="date_of_birth" id="input-date_of_birth" ref={forwardRef} {...props} />;
  }
);

export default DOBNamedInput;
