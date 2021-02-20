import { Button } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import { Formik } from 'formik'
import React, { useState } from 'react'
import ZipCodeInput from './ZipCodeInput'
import {
    ZipCodeInputChakraUIPropOverrides,
    ZipCodeInputProps,
} from './ZipCodeInput.types'

// Note: The two constants below can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const ExampleCode = `const ZipCodeInputTestComponent = (props: ZipCodeInputTestProps) => {
  const [zip, setZip] = useState<string | undefined>();

  let testConfig: ZipCodeInputChakraUIPropOverrides;

  switch (props.chakraOverrides) {
    case "Change Label Styling":
      testConfig = {
        zipLabelProps: {
          color: "#33febc",
          fontSize: "25px",
        },
      };
      break;
    case "Change Input Styling":
      testConfig = {
        zipInputProps: {
          padding: "50px",
        },
      };
      break;
    case "Change Validation Message Styling":
      testConfig = {
        validationText: {
          fontSize: "80px",
        },
      };
      break;
    case "No Override":
      break;
  }

  return (
    <Formik
      initialValues={{
        zip: zip,
      }}
      validate={() => {
        let errorMsg: {
          zip?: string;
        } = {};

        if (!zip) {
          errorMsg.zip = "Enter your phone number.";
        }
        if (!zip?.match(/^\d{5}$/)) {
          errorMsg.zip = "Please enter a valid zip code. - " + zip;
        }
        return errorMsg;
      }}
      validateOnChange
      onSubmit={() => {
        console.log("Thank You"!);
      }}
    >
      {(formikProps) => (
        <form onSubmit={formikProps.handleSubmit}>
          <ZipCodeInput
            validationMessage={formikProps.errors.zip}
            {...(props as ZipCodeInputProps)}
            onChange={(value) => {
              setZip(value ?? "");
              console.log(zip);
            }}
            value={zip}
            chakraUIPropOverrides={testConfig}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
};`

const description = `<p>An Input component complete with masking for a zip code which can be used in forms requiring a zip code input.</p>
  <p>Chakra styling can be customized for all three potential elements contained in this component:
    <ul>
      <li>zipLabelProps</li>
      <li>zipInputProps</li>
      <li>validationText</li>
    </ul>
  <p>There is an optional prop "label" which accepts a string that will become the Label's text. If this prop is not passed in
  then there will not be a label for the input box.</p>
  
  <Strong>
    The UI provided below consists of more than what "ZipCodeInput" provides by default.
    <br/>
    For this example, "ZipCodeInput" is wrapped in a Form in order to demonstrate Formik's validation will apply to the component.
  </Strong>`

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/ZipCodeInput',
    component: ZipCodeInput,
    componentOrHookNameForTests: 'ZipCodeInput',
    storyDescription: description,
    hookOrComponentCodeExample: ExampleCode,
    argTypes: {
        id: commonArgTypes.id,
        customInputClassName: commonArgTypes.customInputClassName,
        label: commonArgTypes.label,
        name: commonArgTypes.name,
        autoFocus: commonArgTypes.autoFocus,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        validationMessage: commonArgTypes.validationMessage,
        labelPosition: commonArgTypes.inputLabelPosition,
        value: commonArgTypes.stringValue,
        onChange: {
            type: {
                name: '(value: string | undefined) => void',
                required: true,
            },
            description:
                'The function which handles changes made to the Input element',
            controlDefaultValue: undefined,
            defaultValueTableSummary: { summary: undefined },
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: {
                name: 'ZipCodeInputChakraUIPropOverrides',
                required: false,
            },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change Label Styling': {
                        formLabel: {
                            color: '#33febc',
                            fontSize: '25px',
                        },
                    } as ZipCodeInputChakraUIPropOverrides,
                    'Change Input Styling': {
                        inputProps: {
                            padding: '50px',
                        },
                    } as ZipCodeInputChakraUIPropOverrides,
                    'Change Validation Message Styling': {
                        formValidationText: {
                            fontSize: '80px',
                        },
                    } as ZipCodeInputChakraUIPropOverrides,
                },
                disable: false,
            },
        },
    },
})

const ZipCodeInputTestComponent = (props: ZipCodeInputProps) => {
    const [zip, setZip] = useState<string | undefined>()

    return (
        <Formik
            initialValues={{
                zip: zip,
            }}
            validate={() => {
                let errorMsg: {
                    zip?: string
                } = {}

                if (!zip?.match(/^\d{5}$/)) {
                    errorMsg.zip = 'Please enter a valid zip code.'
                }
                if (!zip) {
                    errorMsg.zip = 'Enter your zip code.'
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
                    <ZipCodeInput
                        validationMessage={formikProps.errors.zip}
                        {...(props as ZipCodeInputProps)}
                        onChange={(value) => {
                            setZip(value ?? '')
                            console.log(zip)
                        }}
                        value={zip}
                        chakraUIPropOverrides={props.chakraUIPropOverrides}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            )}
        </Formik>
    )
}

const ZipCodeInputTemplate: Story<ZipCodeInputProps> = (args) => (
    <ZipCodeInputTestComponent {...args} />
)

export const ZipCodeInputStory = ZipCodeInputTemplate.bind({})
