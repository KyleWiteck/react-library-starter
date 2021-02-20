import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import LabelPositionWrapper from './LabelPositionWrapper'
import { LabelPositionWrapperProps } from './LabelPositionWrapper.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description =
    'Used to wrap any reusable input component (Like PhoneInput or ZipCodeInput). This wrapper acts as a Flex container for the input and takes in one prop, position, which maps to a specific style in order to position the label around the input element.'

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/Common/LabelPositionWrapper',
    component: LabelPositionWrapper,
    componentOrHookNameForTests: 'LabelPositionWrapper',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        position: commonArgTypes.inputLabelPosition,
        children: {
            type: { name: 'component', required: false },
            description: 'The Reusable Input Component',
            controlDefaultValue: undefined,
            defaultValueTableSummary: { summary: undefined },
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
    },
})

const LabelPositionWrapperTestCase = (props: LabelPositionWrapperProps) => {
    return (
        <LabelPositionWrapper position={props.position}>
            <>
                <label htmlFor="input">This is a Label</label>
                <input type="text" placeholder="Input Box" name="input" />
            </>
        </LabelPositionWrapper>
    )
}

const LabelPositionWrapperTemplate: Story<LabelPositionWrapperProps> = (
    args
) => <LabelPositionWrapperTestCase {...args} />

export const LabelPositionWrapperStory = LabelPositionWrapperTemplate.bind({})
