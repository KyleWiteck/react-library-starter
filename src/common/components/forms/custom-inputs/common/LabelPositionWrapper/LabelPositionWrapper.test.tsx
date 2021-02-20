import { render } from "@testing-library/react";
import React from "react";
import LabelPositionWrapper from "./LabelPositionWrapper";
import { PositionUnion } from "./LabelPositionWrapper.types";

describe("LabelPositionWrapper", () => {
  const LabelPositionRenderComponent = (position: PositionUnion) => {
    return (
      <LabelPositionWrapper position={position}>
        <>
          <label>Right</label>
          <input />
        </>
      </LabelPositionWrapper>
    );
  };

  it("Should use 'flex-direction: column' when 'top' is passed in for position prop", () => {
    const { getByTestId } = render(<></>, {
      wrapper: () => LabelPositionRenderComponent("top"),
    });

    const testWrapper = getByTestId("label-position-wrapper");

    expect(testWrapper).toHaveStyle("flex-direction: column");
    expect(testWrapper).not.toHaveStyle("flex-direction: column-reverse");
  });

  it("Should use 'flex-direction: column-reverse' when 'bottom' is passed in for position prop", () => {
    const { getByTestId } = render(<></>, {
      wrapper: () => LabelPositionRenderComponent("bottom"),
    });

    const testWrapper = getByTestId("label-position-wrapper");

    expect(testWrapper).toHaveStyle("flex-direction: column-reverse");
    expect(testWrapper).not.toHaveStyle("flex-direction: column");
  });

  it("Should use 'flex-direction: row' when 'top' is passed in for position prop", () => {
    const { getByTestId } = render(<></>, {
      wrapper: () => LabelPositionRenderComponent("left"),
    });

    const testWrapper = getByTestId("label-position-wrapper");

    expect(testWrapper).toHaveStyle("flex-direction: row");
    expect(testWrapper).not.toHaveStyle("flex-direction: row-reverse");
  });

  it("Should use 'flex-direction: row-reverse' and 'justify-content: flex-end' when 'top' is passed in for position prop", () => {
    const { getByTestId } = render(<></>, {
      wrapper: () => LabelPositionRenderComponent("right"),
    });

    const testWrapper = getByTestId("label-position-wrapper");

    expect(testWrapper).toHaveStyle("flex-direction: row-reverse");
    expect(testWrapper).not.toHaveStyle("flex-direction: row");
  });
});
