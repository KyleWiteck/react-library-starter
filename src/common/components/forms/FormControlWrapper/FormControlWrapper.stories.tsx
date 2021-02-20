import { Box } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import Input from '../custom-inputs/Input/Input'
import FormControlWrapper from './FormControlWrapper'
import { FormControlWrapperProps } from './FormControlWrapper.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = 'A text component'

export default storyDocConfig({
    title: 'Common/Forms/FormControlWrapper',
    component: FormControlWrapper,
    componentOrHookNameForTests: 'FormControlWrapper',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        id: commonArgTypes.id,
        ...commonArgTypes.formControlWrapper,
        children: {
            type: { name: 'React.ReactNode', required: true },
            description:
                'Allows you to pass in your own inputs for the form as children',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail:
                    'The children in this story are the input fields that are in the Canvas',
            },
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
    },
})

const FormControlWrapperTemplate: Story<FormControlWrapperProps> = (args) => (
    <Box maxW="1000px" mx="20px">
        <FormControlWrapper
            {...args}
            onSubmit={(data) => console.log('onSubmit data', data)}
        >
            {(props) => (
                <>
                    <Input
                        label="First Name"
                        name="first_name"
                        ref={props.register({ required: true })}
                        validationMessage={
                            props.errors?.first_name &&
                            'Please enter your last name'
                        }
                        disableChakraStyles={args.disableChakraStyles}
                    ></Input>{' '}
                    <Input
                        label="Last Name"
                        name="last_name"
                        ref={props.register({ required: true })}
                        validationMessage={
                            props.errors?.last_name &&
                            'Please enter your last name'
                        }
                        disableChakraStyles={args.disableChakraStyles}
                    ></Input>
                    <Input
                        label="Email"
                        name="email"
                        ref={props.register({ required: true })}
                        validationMessage={
                            props.errors?.email && 'Please enter your last name'
                        }
                        disableChakraStyles={args.disableChakraStyles}
                    ></Input>
                </>
            )}
        </FormControlWrapper>
    </Box>
)

export const FormControlWrapperStory = FormControlWrapperTemplate.bind({})
