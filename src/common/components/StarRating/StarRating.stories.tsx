import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import StarRating from './StarRating'
import { StarRatingProps } from './StarRating.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = `This is a star rating component. It was built with Chakra UI in mind. 

 Although the props table below does not show them. The Chakra UI Box components props are extended on this component. It is the only chakra component available in the component. In order to style the stars, you must use svgStarStyles prop. This will use the default react styles prop for ever star.
 
 Keep in mind when using this component. The rating number can not be greater then the amount of star or null will be returned`

export default storyDocConfig({
    title: 'Common/StarRating',
    component: StarRating,
    componentOrHookNameForTests: 'StarRating',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        id: {
            ...commonArgTypes.id,
            type: { name: 'string', required: true },
            controlDefaultValue: 'test',
        },
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        rating: {
            type: { name: 'number', required: true },
            description: 'Sets the star rating',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail: 'This defaults to 5 when nothing is set',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'number',
                disable: false,
            },
        },
        numberOfStars: {
            type: { name: 'number', required: false },
            description:
                'Sets the number of stars that will show. This must be a number from 3 and 10',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail: 'This defaults to 5 when nothing is set',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'number',
                disable: false,
            },
        },
        svgStarStyles: {
            type: { name: 'React.CSSProperties', required: false },
            description:
                'This over rides and adds styles to the svg styles prop.',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        colors: {
            type: { name: 'number', required: false },
            description: 'Sets the star rating',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail:
                    'The defaults are set internally with the fallowing (starRated: "#FFD703", starEmpty: "#CBD3E3")',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'select',
                disable: false,
                options: {
                    undefined: undefined,
                    'color set one': {
                        starRated: '#0f5',
                        starEmpty: '#d60',
                    },
                    'color set two': {
                        starRated: '#11d',
                        starEmpty: '#a56',
                    },
                },
            },
        },
    },
})

const StarRatingTemplate: Story<StarRatingProps> = (args) => (
    <StarRating rating={3} {...args} />
)

export const StarRatingStory = StarRatingTemplate.bind({})
