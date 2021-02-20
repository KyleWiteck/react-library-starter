import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import FormDisclaimer from './FormDisclaimer'
import {
    FormDisclaimerChakraUIPropOverrides,
    FormDisclaimerProps,
} from './FormDisclaimer.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = 'A text component'

export default storyDocConfig({
    title: 'Common/Forms/FormControlWrapper/Common/FormDisclaimer',
    component: FormDisclaimer,
    componentOrHookNameForTests: 'FormDisclaimer',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        disclaimerText: {
            type: { name: 'string', required: true },
            description:
                'This props allows you to override the existing disclaimer',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail:
                    'By clicking the submit button, you consent to be contacted by phone, email, text, and through the use of automatic telephone dialing systems and pre-recorded messages at the number(s) and email address(es) listed above even if your number provided on the form above is on a National or State Do Not Call List. Message and Data Rates MayApply. Your consent does not require you to purchase any goods and/or services and you understand that you are not required to sign this authorization to receive services.',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        disableChakraStyles: {
            ...commonArgTypes.disableChakraStyles,
        },
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: {
                name: 'FormDisclaimerChakraUIPropOverrides',
                required: false,
            },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change Label Styling': {
                        color: '#33febc',
                        fontSize: '25px',
                    } as FormDisclaimerChakraUIPropOverrides,
                    'Change Input Styling': {
                        padding: '50px',
                    } as FormDisclaimerChakraUIPropOverrides,
                    'Change Validation Message Styling': {
                        fontSize: '80px',
                    } as FormDisclaimerChakraUIPropOverrides,
                },
                disable: false,
            },
        },
    },
})

const FormDisclaimerTemplate: Story<FormDisclaimerProps> = (args) => (
    <FormDisclaimer {...args} />
)

export const FormDisclaimerStory = FormDisclaimerTemplate.bind({})
