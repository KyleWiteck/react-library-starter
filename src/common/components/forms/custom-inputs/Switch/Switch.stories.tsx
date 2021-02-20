import { Heading } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React, { useState } from 'react'
import Switch from './Switch'
import { SwitchChakraUIPropOverrides, SwitchProps } from './Switch.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = `A switch component with the ability to toggle between a custom value or undefined.`
const ExampleCode = `const SwitchTestComponent = (props: SwitchProps) => {
  const [testValue, setTestValue] = useState<isCheckState | undefined>();

  return (
    <>
      <Heading>{testValue && testValue["Test"] ? testValue["Test"] : ""}</Heading>
      <Switch
        value="Change the value property in the controls to see something different appear"
        {...props}
        id="Hello"
        onChange={setTestValue}
        option={{ name: "Test", label: "Click Me", id: "Test" }}
        index="0"
      />
    </>
  );
};
`

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/Switch',
    component: Switch,
    componentOrHookNameForTests: 'Switch',
    storyDescription: description,
    hookOrComponentCodeExample: ExampleCode,
    argTypes: {
        autoFocus: commonArgTypes.autoFocus,
        customInputClassName: commonArgTypes.customInputClassName,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        validationMessage: commonArgTypes.validationMessage,
        id: {
            ...commonArgTypes.id,
            type: { name: 'string', required: true },
        },
        onChange: {
            type: {
                name: '(value: string | undefined) => void',
                required: true,
            },
            ...commonArgTypes.onChangeNoType,
        },
        labelPosition: {
            ...commonArgTypes.inputLabelPosition,
            controlDefaultValue: 'right',
            defaultValueTableSummary: { summary: 'right' },
        },
        value: {
            type: {
                name: 'string | number | boolean | undefined',
                required: true,
            },
            description: 'The value being displayed inside the Input element',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        option: {
            type: { name: 'SwitchOptions', required: true },
            description:
                'The options for the switch element, including the Name, Label, and ID',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
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
                    } as SwitchChakraUIPropOverrides,
                    'Change Switch Styling': {
                        switch: {
                            padding: '50px',
                        },
                    } as SwitchChakraUIPropOverrides,
                },
                disable: false,
            },
        },
        switchClick: {
            type: {
                name: '(event?: MouseEvent<any, MouseEvent>) => void',
                required: false,
            },
            description:
                'Custom OnClick function that can be provided if you need additional functionality when the switch is clicked.',
            controlDefaultValue: undefined,
            defaultValueTableSummary: { summary: undefined },
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        index: {
            type: { name: 'string', required: true },
            description:
                'An index to be provided to the id of the switch to be able to identify each switch out of a group of switches',
            controlDefaultValue: undefined,
            defaultValueTableSummary: { summary: undefined },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
    },
})

const SwitchTestComponent = (props: SwitchProps) => {
    const [testValue, setTestValue] = useState<
        string | number | boolean | undefined
    >()

    return (
        <>
            <Heading>{testValue ? testValue : ''}</Heading>
            <Switch
                value="THE SWITCHES VALUE HAS BEEN SET! :D"
                {...props}
                id="Hello"
                onChange={setTestValue}
                name={'Hello'}
                label={'Hello'}
                index={0}
            />
        </>
    )
}

const SwitchTemplate: Story<SwitchProps> = (args) => (
    <SwitchTestComponent {...args} />
)

export const SwitchStory = SwitchTemplate.bind({})
