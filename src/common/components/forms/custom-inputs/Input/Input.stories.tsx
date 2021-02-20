import { Button, Text } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import { Formik } from 'formik'
import React, { useState } from 'react'
import Input from './Input'
import { InputChakraUIPropOverrides, InputProps } from './Input.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description =
    "This component provides a full fieldset with the label, validation message and teh input. It gives the ability to easily select what position the label will be displayed and the ability to add input masking through it's props."

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/Input',
    component: Input,
    componentOrHookNameForTests: 'Input',
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
        value: commonArgTypes.stringValue,
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
                    } as InputChakraUIPropOverrides,
                    'Change Input Styling': {
                        inputProps: {
                            padding: '50px',
                        },
                    } as InputChakraUIPropOverrides,
                    'Change Validation Message Styling': {
                        formValidationText: {
                            fontSize: '80px',
                        },
                    } as InputChakraUIPropOverrides,
                },
                disable: false,
            },
        },
        iMaskCreateMaskConfig: {
            type: { name: 'IMask.AnyMaskedOptions', required: false },
            description:
                'This is the argume that will be passed into IMasks createMask method. It is used for adding input masking to the input.',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail:
                    'The default is undefined. The select options are pre configured options that have been made specially for this story.',
            },
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
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
        inputType: {
            type: { name: 'string', required: false },
            description: 'The input type that decides what kind of input it is',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: undefined,
            control: {
                type: 'text',
                disable: false,
            },
        },
    },
})

const InputTestComponent = (props: InputProps) => {
    const [value, setValue] = useState<string | undefined>()
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
                    errorMsg.value = 'Nothing was entered'
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
                    <Input
                        {...props}
                        inputType={props.inputType ?? 'text'}
                        validationMessage={
                            formikProps.errors.value ?? props.validationMessage
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            e.preventDefault()
                            console.log(e.target.value)
                            setValue(e.target.value ?? '')
                            console.log(e.target.value)
                        }}
                        value={value ?? props.value}
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

const InputTemplate: Story<InputProps> = (args) => (
    <InputTestComponent {...args} />
)

export const InputStory = InputTemplate.bind({})
