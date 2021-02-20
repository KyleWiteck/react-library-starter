import { render } from "@testing-library/react";
import React from "react";
import FormValidationMessage from "./FormValidationMessage";

describe("FormValidationMessage", () => {
  it("Should render text", () => {
    const { container } = render(<FormValidationMessage errorMessage="ERROR"></FormValidationMessage>);
    const textElement = container.children[0];

    expect(textElement).toHaveTextContent("ERROR");
  });
});
