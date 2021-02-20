import { cleanup, render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ZipCodeInput from "./ZipCodeInput";

describe("ZipCodeInput", () => {
  afterEach(cleanup);

  it("should render a single FormLabel component when the label prop is passed in", () => {
    const { container, getByText } = render(<ZipCodeInput label="Zip Code" onChange={jest.fn()} />);
    const labelElement = container.getElementsByClassName("form-control__label");

    expect(getByText("Zip Code")).toBeInTheDocument();
    expect(labelElement).toHaveLength(1);
  });

  it("Should not render a FormLabel component the label prop is not passed in", () => {
    const { container } = render(<ZipCodeInput onChange={jest.fn()} />);
    const labelElement = container.getElementsByClassName("form-control__label");

    expect(labelElement).toHaveLength(0);
  });

  describe("Inputing characters to ZipCodeInput component", () => {
    let comp: RenderResult;
    let inputElement: HTMLInputElement;
    let zip: string | undefined;
    let setZip;

    beforeEach(() => {
      setZip = jest.fn((value: string) => {
        if (zip === undefined) zip = value;
        else zip += value;
      });

      comp = render(<ZipCodeInput label="Zip Code" value={zip} onChange={setZip} />);
      inputElement = comp.getByPlaceholderText("_____") as HTMLInputElement;
    });

    afterEach(() => {
      zip = undefined;
      userEvent.clear(inputElement);
    });

    it("Should allow numbers to be inserted into the input component", () => {
      userEvent.type(inputElement, "123");

      expect(zip).toBe("123");
    });

    it("Should not allow letters to be inserted into the input component", () => {
      userEvent.type(inputElement, "ABC123");

      expect(zip).toBe("123");
    });
  });
});
