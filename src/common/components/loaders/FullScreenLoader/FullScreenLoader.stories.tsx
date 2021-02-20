import { Text } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig, { commonArgTypes } from 'common/tools/storyDocConfig'
import React from 'react'
import FullScreenLoader from './FullScreenLoader'
import {
    FullScreenLoaderChakraPropsOverrides,
    FullScreenLoaderProps,
} from './FullScreenLoader.types'

// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = `A full screen loader component that is in the form of an overlay of its corresponding screen.

This screen has three handlers. The loadStatus prop handlers allowing for retry screens and failed screens.

<ul>
  <li>initialLoader: If set to trie the default load screen will display</li>
  <li>secondaryLoader: If set to true the secondary load screen will display, this is use for api failures and additional api attempts.</li>
  <li>failed: if set to true, the load screen closes.</li>
</ul>
`

export default storyDocConfig({
    title: 'Common/Loaders/FullScreenLoader',
    component: FullScreenLoader,
    componentOrHookNameForTests: 'FullScreenLoader',
    storyDescription: description,
    hookOrComponentCodeExample: undefined,
    argTypes: {
        configName: commonArgTypes.configName,
        disableChakraStyles: commonArgTypes.disableChakraStyles,
        chakraUIPropOverrides: {
            ...commonArgTypes.chakraUIPropOverridesNoTypeNoControls,
            type: {
                name: 'FullScreenLoaderChakraPropsOverrides',
                required: false,
            },
            control: {
                type: 'select',
                options: {
                    undefined: undefined,
                    'Change heading color': {
                        heading: {
                            color: '#a41',
                        },
                    } as FullScreenLoaderChakraPropsOverrides,
                    'Change subheading color': {
                        subheading: {
                            color: '#a41',
                        },
                    } as FullScreenLoaderChakraPropsOverrides,
                },
                disable: false,
            },
        },
        imgSrc: {
            type: { name: 'string', required: true },
            description:
                'This prop is to pass in a new image to replace the default image',
            controlDefaultValue: undefined,
            defaultValueTableSummary: { summary: 'Default  Loader Image' },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
        addClassName: {
            type: {
                name:
                    '{ heading?: string; subheading?: string; img?: string; }',
                required: true,
            },
            description:
                'This prop takes in an object, each property of the object takes in a string that will append to the existing corresponding className',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        loadStatus: {
            type: { name: '{}', required: true },
            description:
                'Used to handle the loading status of the load screen.',
            controlDefaultValue: {
                initialLoader: false,
                secondaryLoader: false,
                apiFailed: false,
            },
            defaultValueTableSummary: {
                summary: 'Note',
                detail:
                    'The default is undefined. You can use the useGetQuoteResults hooks property resultsTools.resultsLoadStatus to retrieve these when waiting for quotes.',
            },
            argTypeIsForStoryOnly: false,
            control: {
                type: 'select',
                options: {
                    'Loaders Off': {
                        initialLoader: false,
                        secondaryLoader: false,
                        apiFailed: false,
                    },
                    'Init Loader On': {
                        initialLoader: true,
                        secondaryLoader: false,
                        apiFailed: false,
                    },
                    'Secondary Loader On': {
                        initialLoader: false,
                        secondaryLoader: true,
                        apiFailed: false,
                    },
                    'Api Failed (Check Actions)': {
                        initialLoader: false,
                        secondaryLoader: false,
                        apiFailed: true,
                    },
                },
                disable: false,
            },
        },
        modalText: {
            type: { name: 'ResultsLoadStatus', required: true },
            description:
                'This prop gives the option to override the headings and subheadings of both initial load screen and secondary load screen',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
        failedErrorMsg: {
            type: { name: 'string', required: true },
            description:
                'This prop is used to provide error messaged is there is a failure in the load statuses',
            controlDefaultValue: 'The api failed',
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                type: 'text',
                disable: false,
            },
        },
    },
})

const FullScreenLoaderTemplate: Story<FullScreenLoaderProps> = (args) => (
    <>
        <Text fontSize="2em" height="1000px" color="#d32">
            Before changing the loadStatus control, not that you will have to
            press the restart button in the upper right corner of the controls
            tab on every change you want to make. The controls act up when the
            modal it open. Note: This story works better in the docs tab, but
            you can only reset it in the canvas.
        </Text>
        <FullScreenLoader configName="production" {...args} />
    </>
)

export const FullScreenLoaderStory = FullScreenLoaderTemplate.bind({})
