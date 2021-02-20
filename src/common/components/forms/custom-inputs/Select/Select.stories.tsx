import { Button, Text } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import { Formik } from 'formik'
import React, { useState } from 'react'
import Select from './Select'
import { SelectChakraUIPropOverrides, SelectProps } from './Select.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description =
    'This component is a field set component that contains a select tag. It takes in an array of options and builds it out based on those options.'

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/Select',
    component: Select,
    componentOrHookNameForTests: 'Select',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        id: commonArgTypes.id,
        customInputClassName: commonArgTypes.customInputClassName,
        name: commonArgTypes.name,
        autoFocus: commonArgTypes.autoFocus,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        label: commonArgTypes.label,
        labelPosition: commonArgTypes.inputLabelPosition,
        validationMessage: commonArgTypes.validationMessage,
        value: {
            type: { name: 'string | number', required: false },
            description: 'The selected value in from the select options',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        onChange: {
            ...commonArgTypes.onChangeNoType,
            type: {
                name: '(e: ChangeEvent<HTMLInputElement>) => void',
                required: true,
            },
        },
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: { name: 'InputChakraUIPropOverrides', required: false },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change Label Styling': {
                        formLabel: {
                            color: '#33febc',
                            fontSize: '25px',
                        },
                    } as SelectChakraUIPropOverrides,
                    'Change Input Styling': {
                        selectProps: {
                            padding: '50px',
                        },
                    } as SelectChakraUIPropOverrides,
                    'Change Validation Message Styling': {
                        formValidationText: {
                            fontSize: '80px',
                        },
                    } as SelectChakraUIPropOverrides,
                },
                disable: false,
            },
        },
        placeholder: {
            type: { name: 'string', required: false },
            description: 'The id that gets assigned to the component',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: undefined,
            control: {
                type: 'text',
                disable: false,
            },
        },
        options: {
            type: { name: 'SelectOption[]', required: false },
            description: 'The options available in the select field.',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: undefined,
            control: {
                disable: true,
            },
        },
    },
})

const SelectTestComponent = (props: SelectProps) => {
    const [value, setValue] = useState<string | number | undefined>(undefined)
    const [submitted, setSubmitted] = useState(false)

    return (
        <Formik
            initialValues={{
                value: value,
            }}
            validate={() => {
                let errorMsg: {
                    value?: string
                } = {}

                if (!value) {
                    errorMsg.value = 'Please make a selection'
                }
                return errorMsg
            }}
            validateOnChange
            onSubmit={() => {
                console.log('Thank You'!)
            }}
        >
            {(formikProps) => (
                <form onSubmit={formikProps.handleSubmit}>
                    <Select
                        {...props}
                        validationMessage={
                            props.validationMessage ?? formikProps.errors.value
                        }
                        onChange={(value) => {
                            setValue(value ?? undefined)
                            console.log(value)
                        }}
                        value={value ?? 'undefined'}
                        chakraUIPropOverrides={props.chakraUIPropOverrides}
                        options={[
                            { label: 'Raect', value: 'react' },
                            { label: 'Vue', value: 'vue' },
                        ]}
                    />

                    <Button
                        mt="1em"
                        type="submit"
                        onClick={() => setSubmitted(true)}
                    >
                        Submit
                    </Button>

                    {submitted && !formikProps.errors.value && (
                        <Text m="1em">It has been submitted</Text>
                    )}
                </form>
            )}
        </Formik>
    )
}

const SelectTemplate: Story<SelectProps> = (args) => (
    <SelectTestComponent {...args} />
)

export const SelectStory = SelectTemplate.bind({})
