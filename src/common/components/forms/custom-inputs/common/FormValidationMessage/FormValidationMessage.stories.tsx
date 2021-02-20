import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import FormValidationMessage from './FormValidationMessage'
import { validationMessage } from './FormValidationMessage.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = 'A text component'

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/Common/FormValidationMessage',
    component: FormValidationMessage,
    componentOrHookNameForTests: 'FormValidationMessage',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        errorMessage: {
            type: { name: 'string', required: true },
            description: 'The validation message text',
            controlDefaultValue: 'This is a validation message',
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        'Chakra Text Props': {
            type: { name: '', required: false },
            description:
                'All the props that chakra provides with its Text component',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
    },
})

const FormValidationMessageTemplate: Story<validationMessage> = (args) => (
    <FormValidationMessage {...args} />
)

export const FormValidationMessageStory = FormValidationMessageTemplate.bind({})
