import React, { Fragment } from "react";

export const textHandler = (defaultText: string | undefined, text?: string | string[] | undefined) => {
  if (typeof text === "string") return text;

  if (Array.isArray(text)) {
    return text.map((string: string, index: number) => {
      return text.length !== index ? (
        <Fragment key={`heading-results-${index}`}>
          {string} <br />
        </Fragment>
      ) : (
        string
      );
    });
  }

  return defaultText;
};
