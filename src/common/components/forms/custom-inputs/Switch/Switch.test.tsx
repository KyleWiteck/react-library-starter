import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Switch from "./Switch";

describe("Switch", () => {
  it("Should render the switch with a label that says Hello", () => {
    const { getByText } = render(
      <Switch onChange={jest.fn()} name={"Hello"} label={"Hello"} id="test" index={0} value="Hello" />
    );

    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("Should be checked when the label is clicked", () => {
    const component = render(
      <Switch onChange={jest.fn()} name={"Hello"} label={"Hello"} id="test" index={0} value="Hello" />
    );
    const switchElement = component.container.querySelector("input");
    const labelElement = component.getByText("Hello");

    userEvent.click(labelElement);

    expect(switchElement).toBeChecked();
  });

  it("Should be able to set a value when checked", () => {
    let testValue: string | number;
    const setTestValue = jest.fn((value: string | number) => {
      testValue = value;
    });

    const component = render(
      <Switch onChange={setTestValue} name={"Hello"} label={"Hello"} id="test" index={0} value="Hello" />
    );

    const switchElement = component.container.querySelector("input");
    userEvent.click(switchElement);

    expect(switchElement).toBeChecked();
    expect(testValue).toBe("Hello");
  });
});
