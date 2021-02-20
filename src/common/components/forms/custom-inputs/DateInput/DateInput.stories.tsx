import { Button } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import { Formik } from 'formik'
import React, { useState } from 'react'
import storyDocConfig, {
    commonArgTypes,
} from '../../../../tools/storyDocConfig'
import DateInput from './DateInput'
import { DateInputProps } from './DateInput.types'

// Note: The two constants below can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const ExampleCode = `
const DateInputTestComponent = (props: DateInputTestProps) => {
  const [date, setDate] = useState<string | undefined>();

  return (
    <Formik
      initialValues={{
        date: date,
      }}
      validate={() => {
        let errorMsg: {
          date?: string;
        } = {};

        if (!date) {
          errorMsg.date = "Enter a date.";
        }
        if (!date?.match(/^\d{8}$/)) {
          errorMsg.date = "Please enter a valid date - mm/dd/yyyy";
        }
        return errorMsg;
      }}
      validateOnChange
      onSubmit={() => {
        console.log("Success! Your form is being processed!");
      }}
    >
      {(formikProps) => (
        <form onSubmit={formikProps.handleSubmit}>
          <DateInput
            validationMessage={formikProps.errors.date}
            {...(props as DateInputProps)}
            onChange={(value: string) => {
              formikProps.setFieldValue("date", value, true);
              setDate(value ?? "");
            }}
            value={date}
            chakraUIPropOverrides={props.chakraUIPropOverrides}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
};
`

const description = `<p>A date input control, with masking and validation, for use in forms needing a date input.</p>
  <p>Chakra styling can be customized for the three potential elements that comprise this component:
    <ul>
      <li>formLabel</li>
      <li>inputProps</li>
      <li>formValidationText</li>
    </ul>
  <p>An optional prop "label", may be passed in as the input's label. If this prop is absent, there will be no label for the input box.</p>
  
  <Strong>
    The UI provided below consists of more than what "DateInput" provides by default.
    <br/>
    For this example, "DateInput" is wrapped in <Formik> to take advantage of Formik's validation features.
  </Strong>`

export default storyDocConfig({
    title: 'Common/Forms/Custom-Inputs/DateInput',
    component: DateInput,
    componentOrHookNameForTests: 'DateInput',
    storyDescription: description,
    hookOrComponentCodeExample: ExampleCode,
    argTypes: {
        id: commonArgTypes.id,
        customInputClassName: commonArgTypes.customInputClassName,
        label: commonArgTypes.label,
        labelPosition: commonArgTypes.inputLabelPosition,
        value: commonArgTypes.stringValue,
        validationMessage: commonArgTypes.validationMessage,
        name: commonArgTypes.name,
        autoFocus: commonArgTypes.autoFocus,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        onChange: {
            ...commonArgTypes.onChangeNoType,
            type: {
                name: '(e: ChangeEvent<HTMLInputElement>) => void',
                required: true,
            },
        },
        limitLowerYear: {
            type: { name: 'string', required: false },
            description:
                'Value representing earliest year permitted to be entered.',
            controlDefaultValue: 1900,
            defaultValueTableSummary: { summary: undefined },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'select',
                options: [1700, 1800, 1900],
                disable: false,
            },
        },
        limitUpperYear: {
            type: { name: 'string', required: false },
            description:
                'Value representing earliest year permitted to be entered.',
            controlDefaultValue: 2000,
            defaultValueTableSummary: { summary: undefined },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'select',
                options: [2000, 2500, 3000],
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
                    'Change color of label to blue': {
                        formLabel: { color: '#2220FF' },
                    },
                    'Increase padding around the input': {
                        inputProps: { padding: '40px' },
                    },
                    'Decrease font size of validation text': {
                        formValidationText: { fontSize: '.5em' },
                    },
                },
                disable: false,
            },
        },
    },
})

interface DateInputTestProps extends DateInputProps {}

const DateInputTestComponent = (props: DateInputTestProps) => {
    const [date, setDate] = useState<string | undefined>()

    console.log('date: ', date)

    return (
        <Formik
            initialValues={{
                date: date,
            }}
            validate={() => {
                let errorMsg: {
                    date?: string
                } = {}

                if (!date) {
                    errorMsg.date = 'Enter a date.'
                }
                // Lenght of ISO date string is fixed at 24
                if (date.length < 24) {
                    errorMsg.date = 'Please enter a valid date - mm/dd/yyyy'
                }
                return errorMsg
            }}
            validateOnChange
            onSubmit={() => {
                console.log('Success! Your form is being processed!')
            }}
        >
            {(formikProps) => (
                <form onSubmit={formikProps.handleSubmit}>
                    <DateInput
                        {...(props as DateInputProps)}
                        validationMessage={
                            props.validationMessage ?? formikProps.errors.date
                        }
                        onChange={(value: string) => {
                            setDate(value ?? '')
                        }}
                        value={date}
                        chakraUIPropOverrides={props.chakraUIPropOverrides}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            )}
        </Formik>
    )
}

const DateInputTemplate: Story<DateInputTestProps> = (args) => (
    <DateInputTestComponent {...args} />
)

export const DateInputStory = DateInputTemplate.bind({})
