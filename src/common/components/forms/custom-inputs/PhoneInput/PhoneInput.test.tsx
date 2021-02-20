import { cleanup, render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import PhoneInput from "./PhoneInput";

describe("PhoneInput", () => {
  afterEach(cleanup);

  it("should render a single FormLabel component when the label prop is passed in", () => {
    window.scrollTo = jest.fn();
    const { container, getByText } = render(<PhoneInput label="Phone Number" onChange={jest.fn()} />);
    const labelElement = container.getElementsByClassName("form-control__label");

    expect(getByText("Phone Number")).toBeInTheDocument();
    expect(labelElement).toHaveLength(1);
  });

  it("Should not render a FormLabel component the label prop is not passed in", () => {
    const { container } = render(<PhoneInput onChange={jest.fn()} />);
    const labelElement = container.getElementsByClassName("form-control__label");

    expect(labelElement).toHaveLength(0);
  });

  describe("Inputing numbers to PhoneInput component", () => {
    let comp: RenderResult;
    let inputElement: HTMLInputElement;
    let phone: string | undefined;
    let setPhone;

    beforeEach(() => {
      setPhone = jest.fn((value: string) => {
        if (phone === undefined) phone = value;
        else phone += value;
      });

      comp = render(<PhoneInput label="Phone Number" value={phone} onChange={setPhone} />);
      inputElement = comp.getByPlaceholderText("+1 (555) 555-5555") as HTMLInputElement;
    });

    afterEach(() => {
      phone = undefined;
      userEvent.clear(inputElement);
    });

    it("Should not allow 1 to be the first digit of the phone number value", () => {
      userEvent.type(inputElement, "1");

      expect(phone).toBe("");
    });

    it("Should set the phone number to values following a leading 1", () => {
      userEvent.type(inputElement, "123");

      expect(phone).toBe("23");
    });

    it("Should be displaying a phone number in the correct masking format", () => {
      userEvent.type(inputElement, "5555555555");
      comp.rerender(<PhoneInput label="Phone Number" value={phone} onChange={setPhone} />);

      expect(inputElement).toHaveValue("+1 (555) 555-5555");
    });

    it("Should have a different value for the stored phone number and the displayed phone number", () => {
      userEvent.type(inputElement, "5555555555");
      comp.rerender(<PhoneInput label="Phone Number" value={phone} onChange={setPhone} />);

      expect(phone).toBe("5555555555");
      expect(inputElement).toHaveValue("+1 (555) 555-5555");
      expect(phone).not.toBe(inputElement.value);
    });
  });
});
