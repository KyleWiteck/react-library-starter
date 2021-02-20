import { Button } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import { Formik } from 'formik'
import React, { useState } from 'react'
import PhoneInput from './PhoneInput'
import {
    PhoneInputChakraUIPropOverrides,
    PhoneInputProps,
} from './PhoneInput.types'

// Note: The two constants below can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const ExampleCode = `const PhoneInputTestComponent = (props: PhoneInputProps) => {
  const [phone, setPhone] = useState<string | undefined>();
  const { label, disableChakraStyles } = props;

  return (
    <Formik
      initialValues={{
        phone: phone,
      }}
      validate={() => {
        let errorMsg: {
          phone?: string;
        } = {};

        if (!phone) {
          errorMsg.phone = "Enter your phone number.";
        }
        if (!phone?.match(/^\d{10}$/)) {
          errorMsg.phone = "Please enter a valid phone number. - " + phone;
        }
        return errorMsg;
      }}
      validateOnChange
      onSubmit={() => {
        console.log("Thank You"!);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <PhoneInput
            onChange={(value) => {
              setPhone(value ?? "");
              console.log(phone);
            }}
            value={phone}
            validationMessage={props.errors.phone ? props.errors.phone : undefined}
            {...props}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
};`

const description = `<p>An Input component complete with masking for a phone number which can be used in forms requiring a Phone Number input.</p>
  <p>Chakra styling can be customized for all three potential elements contained in this component:
    <ul>
      <li>phoneLabelProps</li>
      <li>phoneInputProps</li>
      <li>validationText</li>
    </ul>
  <p>There is an optional prop "label" which accepts a string that will become the Label's text. If this prop is not passed in
  then there will not be a label for the input box.</p>
  
  <Strong>
    The UI provided below consists of more than what "PhoneInput" provides by default.
    <br/>
    For this example, "PhoneInput" is wrapped in a Form in order to demonstrate Formik's validation will apply to the component.
  </Strong>`

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/PhoneInput',
    component: PhoneInput,
    componentOrHookNameForTests: 'PhoneInput',
    storyDescription: description,
    hookOrComponentCodeExample: ExampleCode,
    argTypes: {
        customInputClassName: commonArgTypes.customInputClassName,
        label: commonArgTypes.label,
        name: commonArgTypes.name,
        autoFocus: commonArgTypes.autoFocus,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        validationMessage: commonArgTypes.validationMessage,
        labelPosition: commonArgTypes.inputLabelPosition,
        id: {
            ...commonArgTypes.id,
            description: 'The value for the id property of the input tag',
        },
        value: {
            type: { name: 'string', required: false },
            description: 'The value being displayed inside the Input element',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        onChange: {
            type: {
                name: '(value: string | undefined) => void',
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
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: { name: 'PhoneInputChakraUIPropOverrides', required: false },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change Label Styling': {
                        formLabel: {
                            color: '#33febc',
                            fontSize: '25px',
                        },
                    } as PhoneInputChakraUIPropOverrides,
                    'Change Input Styling': {
                        inputProps: {
                            padding: '50px',
                        },
                    } as PhoneInputChakraUIPropOverrides,
                    'Change Validation Message Styling': {
                        formValidationText: {
                            fontSize: '80px',
                        },
                    } as PhoneInputChakraUIPropOverrides,
                },
                disable: false,
            },
        },
    },
})

const PhoneInputTestComponent = (props: PhoneInputProps) => {
    const [phone, setPhone] = useState<string | undefined>()

    return (
        <Formik
            initialValues={{
                phone: phone,
            }}
            validate={() => {
                let errorMsg: {
                    phone?: string
                } = {}

                {
                    console.log('phone value: ', phone)
                }
                if (!phone) {
                    errorMsg.phone = 'Enter your phone number.'
                }

                if (!phone?.match(/^\d{10}$/)) {
                    console.log('match phone: ', phone)

                    errorMsg.phone =
                        'Please enter a valid phone number. - ' + phone
                }
                return errorMsg
            }}
            validateOnChange
            onSubmit={() => {
                console.log('Submitted Value', phone)
            }}
        >
            {(formikProps) => (
                <form onSubmit={formikProps.handleSubmit}>
                    <PhoneInput
                        validationMessage={formikProps.errors.phone}
                        {...(props as PhoneInputProps)}
                        onChange={(value: string) => {
                            setPhone(value ?? '')
                            console.log(phone)
                        }}
                        value={phone}
                        chakraUIPropOverrides={props.chakraUIPropOverrides}
                    />
                    <Button mt="1em" type="submit">
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    )
}

const PhoneInputTemplate: Story<PhoneInputProps> = (args) => (
    <PhoneInputTestComponent {...args} />
)

export const PhoneInputStory = PhoneInputTemplate.bind({})
