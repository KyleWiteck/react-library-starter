import { Heading } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React, { useState } from 'react'
import CheckBox from './CheckBox'
import { CheckBoxChakraUIPropOverrides, CheckBoxProps } from './CheckBox.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description =
    'A CheckBox component with the ability to toggle between a custom value and undefined.'
const ExampleCode = `
const CheckBoxTestComponent = (props: CheckBoxProps) => {
  const [testValue, setTestValue] = useState<string | number | undefined>();

  return (
    <>
      <Heading>{testValue ? testValue : ""}</Heading>
      <CheckBox
        value="Change the value property in the controls to see something different appear"
        {...props}
        id="Hello"
        index="0"
        onChange={setTestValue}
        option={{ name: "Test", label: "Click Me", id: "Test" }}
      />
    </>
  );
};
`

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/CheckBox',
    component: CheckBox,
    componentOrHookNameForTests: 'CheckBox',
    storyDescription: description,
    hookOrComponentCodeExample: ExampleCode,
    argTypes: {
        customInputClassName: commonArgTypes.customInputClassName,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        validationMessage: commonArgTypes.validationMessage,
        autoFocus: commonArgTypes.autoFocus,
        id: {
            ...commonArgTypes.id,
            type: { name: 'string', required: true },
        },
        onChange: {
            type: {
                name: '(value: isCheckState | undefined) => void | undefined',
                required: true,
            },
            ...commonArgTypes.onChangeNoType,
        },
        labelPosition: {
            ...commonArgTypes.inputLabelPosition,
            control: {
                type: 'select',
                options: ['left', 'right'],
                disable: false,
            },
            controlDefaultValue: 'right',
            defaultValueTableSummary: { summary: 'right' },
        },
        index: {
            type: { name: 'string', required: true },
            description:
                "An index will be applied to the CheckBox's ID to help identify it",
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        option: {
            type: { name: 'CheckBoxOptions', required: true },
            description:
                'The options for the checkbox element including the Name, Label, and ID',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        value: {
            type: { name: 'string | number', required: true },
            description:
                'The value which the checkbox will set when it is checked',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: { name: 'select', required: false },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change Label Styling': {
                        formLabel: {
                            color: '#33febc',
                            fontSize: '25px',
                        },
                    } as CheckBoxChakraUIPropOverrides,
                    'Change Switch Styling': {
                        checkbox: {
                            padding: '50px',
                        },
                    } as CheckBoxChakraUIPropOverrides,
                },
                disable: false,
            },
        },
    },
})

const CheckBoxTestComponent = (props: CheckBoxProps) => {
    const [testValue, setTestValue] = useState<string | number | undefined>()

    return (
        <>
            <Heading>{testValue ? testValue : ''}</Heading>
            <CheckBox
                {...props}
                id="Hello"
                index={0}
                name={'Hello'}
                label={'Hello'}
                value="THE CHECKBOX VALUE HAS BEEN SET! :D"
                onChange={setTestValue}
            />
        </>
    )
}

const CheckBoxTemplate: Story<CheckBoxProps> = (args) => (
    <CheckBoxTestComponent {...args} />
)

export const CheckBoxStory = CheckBoxTemplate.bind({})
