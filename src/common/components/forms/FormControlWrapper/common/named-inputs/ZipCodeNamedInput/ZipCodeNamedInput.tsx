import ZipCodeInput from "common/components/forms/custom-inputs/ZipCodeInput/ZipCodeInput";
import React from "react";
import { ZipCodeNamedInputProps } from "./ZipCodeNamedInput.types";

const ZipCodeNamedInput = React.forwardRef<HTMLInputElement, ZipCodeNamedInputProps>(
  (props: ZipCodeNamedInputProps, forwardRef) => {
    return <ZipCodeInput name="zip_code" ref={forwardRef} {...props} />;
  }
);

export default ZipCodeNamedInput;
