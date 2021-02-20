import { Box } from "@chakra-ui/react";
import React from "react";
import { StarRatingProps } from "./StarRating.types";

const StarRating = (props: StarRatingProps) => {
  // props
  const {
    rating,
    numberOfStars,
    id,
    svgStarStyles,
    disableChakraStyles,
    colors,
    starClassName,
    starSetContainerClassName,
    ...chakraUIPropBoxOverrides
  } = props;

  const internalNumberOfStars = numberOfStars ?? 5;

  // Unique Functionality
  if (rating > internalNumberOfStars) {
    console.error(
      `The rating prop with a value of (${rating}) is greater then the numberOfStars prop with a value of (${internalNumberOfStars}). Please make sure that the rating prop is less then the internalNumberOfStars prop.`
    );
    return null;
  }

  if (internalNumberOfStars < 3 && internalNumberOfStars > 10) {
    console.error(
      `The numberOfStars prop has a value of (${internalNumberOfStars}). Please set the internalNumberOfStars prop to be a number in between 3 and 10.`
    );
    return null;
  }

  const Stars = () => {
    const decimalFinder = rating % 1 != 0 ? rating - Math.floor(rating) : undefined;
    const stars = [];

    for (let i = 1; i <= internalNumberOfStars; i++) {
      const shouldFill = i <= Math.round(rating);
      const isDecimalOrWhole = i >= Math.round(rating) && decimalFinder ? decimalFinder : 1;

      stars.push(shouldFill ? isDecimalOrWhole : 0);
    }

    return (
      <>
        {stars.map((colorFillNumber: number, index) => {
          const partialFillPercentage = colorFillNumber * 100;
          const partialNoFillPercentage = 100 - partialFillPercentage;

          return (
            <svg
              key={`${id}-star-${index}`}
              version="1.1"
              id={`${id}-star-${index}`}
              className={starClassName ? starClassName : undefined}
              x="0px"
              y="0px"
              viewBox="0 0 47.94 47.94"
              style={{
                height: "100%",
                width: "auto",
                marginRight: index === stars.length - 1 ? "0" : "1em",
                ...svgStarStyles,
              }}
            >
              <defs>
                <linearGradient id={`${id}-star-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  {colorFillNumber < 1 && colorFillNumber !== 0 ? (
                    <>
                      <stop offset={`${partialFillPercentage}%`} stopColor={colors?.starRated ?? "#FFD703"} />
                      <stop offset={`${partialNoFillPercentage}%`} stopColor={colors?.starEmpty ?? "#CBD3E3"} />
                    </>
                  ) : (
                    <stop
                      offset={`${partialFillPercentage}%`}
                      stopColor={
                        partialNoFillPercentage === 100
                          ? colors?.starEmpty ?? "#CBD3E3"
                          : colors?.starRated ?? "#FFD703"
                      }
                    />
                  )}
                </linearGradient>
              </defs>
              <path
                fill={`url(#${id}-star-gradient-${index})`}
                d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
  C22.602,0.567,25.338,0.567,26.285,2.486z"
              />
            </svg>
          );
        })}
      </>
    );
  };

  return (
    <Box
      id={id}
      className={starSetContainerClassName ? starSetContainerClassName : undefined}
      {...(!disableChakraStyles && {
        m: { base: "0 auto", lg: "0 auto 0 0" },
        height: "24px",
        d: "flex",
        flexBasis: "row",
        ...chakraUIPropBoxOverrides,
      })}
    >
      <Stars />
    </Box>
  );
};

export default StarRating;
