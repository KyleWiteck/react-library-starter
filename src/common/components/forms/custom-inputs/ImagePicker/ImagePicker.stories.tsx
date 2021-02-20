import { Text } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React, { useState } from 'react'
import ImagePicker from './ImagePicker'
import {
    ImagePickerChakraUIPropOverrides,
    ImagePickerOption,
    ImagePickerProps,
} from './ImagePicker.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = `This component provides large button options that hold icons and apply check marks upon selection. Nested inside each option is an input with a type of radio. Only one option can be selected at a time.`

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/ImagePicker',
    component: ImagePicker,
    componentOrHookNameForTests: 'ImagePicker',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        autoFocus: commonArgTypes.autoFocus,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        label: commonArgTypes.label,
        labelPosition: commonArgTypes.inputLabelPosition,
        validationMessage: commonArgTypes.validationMessage,
        id: {
            ...commonArgTypes.id,
            description: 'The id of FormControl (A.K.A fieldset)',
        },
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: { name: 'ImagePickerChakraUIPropOverrides', required: false },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change field wrapper': {
                        formFieldWrapperFormControl: {
                            backgroundColor: '#9c0',
                        },
                    } as ImagePickerChakraUIPropOverrides,
                    'Change Label Text Color': {
                        labelText: {
                            color: '#a09',
                        },
                    } as ImagePickerChakraUIPropOverrides,
                    'Change Option Label Color': {
                        ImagePickerOverrides: {
                            boxLabelText: {
                                color: '#a41',
                            },
                        },
                    } as ImagePickerChakraUIPropOverrides,
                },
                disable: false,
            },
        },
        value: {
            ...commonArgTypes.stringValue,
            control: {
                type: 'select',
                options: ['react', 'vue'],
                disable: false,
            },
        },
        defaultValue: {
            type: { name: 'string', required: false },
            description:
                'The default value that is used to determine what is selected',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'select',
                options: [undefined, 'react'],
                disable: false,
            },
        },
        onChange: {
            type: {
                name: '(value: number | string | undefined) => void;',
                required: true,
            },
            description:
                'The function which handles changes made to the Input element',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        options: {
            type: { name: 'ImagePickerOption[]', required: true },
            description: 'An array of the properties for each option.',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
    },
})

const options: ImagePickerOption[] = [
    {
        label: 'React',
        value: 'react',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_whFSceoRNIyGyiTaPbkncYle6vP58kIbw&usqp=CAU',
    },
    {
        label: 'Vue',
        value: 'vue',
    },
]

const ImagePickerTestComponent = (props) => {
    const [stateValue, setStateValue] = useState<string | number | undefined>(
        undefined
    )

    return (
        <>
            <ImagePicker
                {...props}
                options={options}
                value={stateValue}
                onSelectedOption={(value: string | number | undefined) => {
                    setStateValue(value)
                }}
            />
            <Text mt="1em" textAlign="left">
                You selected: {stateValue}
            </Text>
        </>
    )
}

const ImagePickerTemplate: Story<ImagePickerProps> = (args) => (
    <ImagePickerTestComponent {...args} />
)

export const ImagePickerStory = ImagePickerTemplate.bind({})
