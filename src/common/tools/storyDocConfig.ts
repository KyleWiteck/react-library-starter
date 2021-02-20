import { Meta } from '@storybook/react'

interface ArgType {
    type: { name: string; required: boolean }
    description: string
    controlDefaultValue: any
    defaultValueTableSummary: { summary: string; detail?: string } | undefined
    argTypeIsForStoryOnly: boolean
    control: {
        type?: string
        options?: any[] | string | { [key: string]: any }
        disable: boolean
    }
}

interface StoryDocConfigParam {
    title: string
    component: (props: any) => JSX.Element | undefined
    componentOrHookNameForTests: string | undefined
    storyDescription: string
    hookOrComponentCodeExample: string | undefined
    argTypes?: {
        [propName: string]: ArgType
    }
}

export const commonArgTypes = {
    configName: {
        type: { name: 'EnvironmentVariable', required: true },
        description:
            'The environment name that is used to determine what endpoint to use for api calls and cdns.',
        controlDefaultValue: 'development',
        defaultValueTableSummary: {
            summary: 'Note',
            detail:
                "For the sake of storybook, we used the 'development' config name",
        },
        argTypeIsForStoryOnly: false,
        control: {
            disable: true,
        },
    },
    brandColor: {
        type: { name: 'string', required: false },
        description: 'Used to set the brand color theming.',
        controlDefaultValue: undefined,
        defaultValueTableSummary: { summary: '#000' },
        argTypeIsForStoryOnly: false,
        control: {
            type: 'text',
            disable: false,
        },
    },
    disableChakraStyles: {
        type: { name: 'boolean', required: false },
        description: 'Boolean flag which can turn off all Chakra stylings',
        controlDefaultValue: undefined,
        defaultValueTableSummary: {
            summary: 'Note',
            detail:
                'The default of this prop is undefined, naturally undefined === false',
        },
        argTypeIsForStoryOnly: false,
        control: {
            type: 'boolean',
            disable: false,
        },
    },
    label: {
        type: { name: 'string', required: false },
        description: 'Adds a label to the Input element',
        controlDefaultValue: 'This is the label',
        defaultValueTableSummary: undefined,
        argTypeIsForStoryOnly: false,
        control: {
            type: 'text',
            disable: false,
        },
    },
    autoFocus: {
        type: { name: 'boolean', required: false },
        description:
            'Will determine whether this Input element is auto focused when the form renders',
        controlDefaultValue: false,
        defaultValueTableSummary: { summary: 'false' },
        argTypeIsForStoryOnly: false,
        control: {
            disable: false,
        },
    },
    customInputClassName: {
        type: { name: 'string', required: false },
        description: 'The value for the className property of the input tag',
        controlDefaultValue: undefined,
        defaultValueTableSummary: undefined,
        argTypeIsForStoryOnly: false,
        control: {
            type: 'text',
            disable: false,
        },
    },
    stringValue: {
        type: { name: 'string', required: false },
        description: 'The value being displayed inside the Input element',
        controlDefaultValue: undefined,
        defaultValueTableSummary: undefined,
        argTypeIsForStoryOnly: false,
        control: {
            type: 'text',
            disable: false,
        },
    },
    name: {
        type: { name: 'string', required: false },
        description: 'The value for the name property of the input tag',
        controlDefaultValue: undefined,
        defaultValueTableSummary: undefined,
        argTypeIsForStoryOnly: false,
        control: {
            type: 'text',
            disable: false,
        },
    },
    validationMessage: {
        type: { name: 'string | undefined', required: false },
        description:
            'The error message which will display when it is passed in',
        controlDefaultValue: undefined,
        defaultValueTableSummary: undefined,
        argTypeIsForStoryOnly: false,
        control: {
            type: 'text',
            disable: false,
        },
    },
    inputLabelPosition: {
        type: { name: 'string', required: false },
        description: "Determines the positioning of the input's label",
        controlDefaultValue: 'top',
        defaultValueTableSummary: { summary: 'top' },
        argTypeIsForStoryOnly: false,
        control: {
            type: 'select',
            options: ['top', 'bottom', 'left', 'right'],
            disable: false,
        },
    },
    id: {
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
    chakraUIPropOverridesNoTypeNoControls: {
        description:
            'Some premade ChakraUIPropsOverrides objects which will be used for the Chakra UI Prop Overrides value',
        controlDefaultValue: undefined,
        defaultValueTableSummary: {
            summary: 'Note',
            detail:
                'The default is undefined. The select options are pre configured options that have been made specially for this story.',
        },
        argTypeIsForStoryOnly: false,
    },
    onChangeNoType: {
        description:
            'The function which handles changes made to the controlled element',
        controlDefaultValue: undefined,
        defaultValueTableSummary: undefined,
        argTypeIsForStoryOnly: false,
        control: {
            disable: true,
        },
    },
    formControlWrapper: {
        onSubmit: {
            type: {
                name:
                    '(data: UnpackNestedValue<FieldValues>, event?: React.BaseSyntheticEvent) => any | Promise<any>',
                required: true,
            },
            description:
                'This prop is used to add functionality when the form is submitted',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        btnText: {
            type: {
                name: 'string',
                required: false,
            },
            description: 'Used to set that text of the form button',
            controlDefaultValue: 'Find Your Plan',
            defaultValueTableSummary: { summary: 'Find Your Plan' },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        disclaimerText: {
            type: {
                name: 'string',
                required: false,
            },
            description: 'This will overwrite the default disclaimer text',
            controlDefaultValue: undefined,
            defaultValueTableSummary: {
                summary: 'Note',
                detail:
                    'By clicking the submit button, you consent to be contacted by phone, email, text, and through the use of automatic telephone dialing systems and pre-recorded messages at the number(s) and email address(es) listed above even if your number provided on the form above is on a National or State Do Not Call List. Message and Data Rates MayApply. Your consent does not require you to purchase any goods and/or services and you understand that you are not required to sign this authorization to receive services.',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
    },
}

const storyDocConfig = (config: StoryDocConfigParam) => {
    let argTypes = {}

    if (config.argTypes) {
        const argTypesKeyArray = Object.keys(config.argTypes)
            .map((key) => key)
            .sort()

        const argTypesRestructuredArray = argTypesKeyArray.map((key) => {
            const argType = config.argTypes[key]

            const description = argType.argTypeIsForStoryOnly
                ? `${argType.description} - Storybook Prop Only`
                : argType.description

            interface IArgTypeValue {
                type: { name: string; required: boolean }
                defaultValue: any
                description: string
                table: {
                    type: {
                        detail: string
                        summary: string
                    }
                    defaultValue?: {
                        detail?: string
                        summary: string
                    }
                }
                control: {
                    type?: string
                    options?: any[] | string | { [key: string]: any }
                    disable: boolean
                }
            }

            const argTypeValue: IArgTypeValue = {
                type: argType.type,
                defaultValue: argType.controlDefaultValue,
                description: description,
                table: {
                    type: {
                        detail: argType.type.name,
                        summary: `Type`,
                    },
                },
                control: { ...argType.control },
            }

            if (argType.defaultValueTableSummary) {
                argTypeValue.table.defaultValue = {
                    summary: argType.defaultValueTableSummary.summary,
                    detail: argType.defaultValueTableSummary.detail,
                }
            }

            return argTypeValue
        })

        argTypesRestructuredArray.map(
            (argType, index) => (argTypes[argTypesKeyArray[index]] = argType)
        )
    }

    return {
        title: config.title,
        component: config.component,
        argTypes: argTypes,
        description: config.storyDescription,
        parameters: {
            docs: {
                source: {
                    code: config.hookOrComponentCodeExample,
                },
                description: {
                    component: config.storyDescription,
                },
            },
            jest: [config.componentOrHookNameForTests],
        },
    } as Meta
}

export default storyDocConfig
