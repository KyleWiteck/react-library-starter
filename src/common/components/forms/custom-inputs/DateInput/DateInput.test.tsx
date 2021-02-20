import { cleanup, render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import DateInput from "./DateInput";

describe("DateInput", () => {
  afterEach(cleanup);

  it("should render a single formLabel component when the label prop is passed in", () => {
    window.scrollTo = jest.fn();
    const { container, getByText } = render(<DateInput label="Birth Date" onChange={jest.fn()} />);
    const labelElement = container.getElementsByClassName("form-control__label");

    expect(getByText("Birth Date")).toBeInTheDocument();
    expect(labelElement).toHaveLength(1);
  });

  it("should not render a formLabel component when the label prop is not passed in", () => {
    const { container } = render(<DateInput onChange={jest.fn()} />);
    const labelElement = container.getElementsByClassName("form-control__label");
    expect(labelElement).toHaveLength(0);
  });

  describe("Input to DateInput component", () => {
    let comp: RenderResult;
    let inputElement: HTMLInputElement;
    let date: string | undefined;
    let setDate;

    beforeEach(() => {
      setDate = jest.fn((value: string) => {
        if (date === undefined) date = value;
        else date += value;
      });

      comp = render(<DateInput value={date} onChange={setDate} />);
      inputElement = comp.container.querySelector("input") as HTMLInputElement;
    });

    afterEach(() => {
      date = undefined;
      userEvent.clear(inputElement);
    });

    it("should display the date value with mask.", () => {
      userEvent.type(inputElement, "08091967");
      comp.rerender(<DateInput value={date} onChange={setDate} />);
      expect(inputElement).toHaveValue("08/09/1967");
    });

    it("should have different values for the stored and displayed date.", () => {
      userEvent.type(inputElement, "08091967");
      comp.rerender(<DateInput value={date} onChange={setDate} />);
      expect(date).toBe("08091967");
      expect(inputElement).toHaveValue("08/09/1967");
      expect(date).not.toBe(inputElement.value);
    });
  });
});
