import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import Button from './Button'
import { ButtonProps } from './Button.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description =
    'A simple button component that can be used either as just a button or if a href is passed in it becomes a button wrapped in and anchor for outside linking'

export default storyDocConfig({
    title: 'Common/Button',
    component: Button,
    componentOrHookNameForTests: 'Button',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        id: commonArgTypes.id,
        btnText: {
            type: { name: 'string', required: true },
            description: 'What the button should say',
            controlDefaultValue: 'Click Me',
            defaultValueTableSummary: {
                summary: 'Click Me',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        onClickHandler: {
            type: { name: '() => void', required: false },
            description: 'Used to give functionality to the button',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        btnType: {
            type: { name: "'button' | 'submit' | 'reset'", required: false },
            description: 'Used to give functionality to the button',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'select',
                options: ['button', 'submit', 'reset'],
                disable: false,
            },
        },
        appendToBtnId: {
            type: { name: 'number', required: true },
            description: 'Used to append unique ids to existing button ids',
            controlDefaultValue: 'ID',
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        anchorHref: {
            type: { name: 'string', required: true },
            description:
                'If this is used the button will utilized an wrapper anchor tag.',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        brandColor: commonArgTypes.brandColor,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: { name: 'ButtonChakraUIPropOverrides', required: false },
            control: {
                disable: true,
            },
        },
    },
})

const ButtonTemplate: Story<ButtonProps> = (args) => (
    <Button btnText="Click Me" {...args} />
)

export const ButtonStory = ButtonTemplate.bind({})
