import { Box, ChakraProvider } from '@chakra-ui/react'
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks'
import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withHTML } from '@whitespace/storybook-addon-html/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import results from '../.jest-test-results.json'
import theme from '../src/theme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    a11y: {
        element: '#root',
        config: {},
        options: {
            checks: { 'color-contrast': { options: { noScroll: true } } },
            restoreScroll: true,
        },
        manual: true,
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    jsx: { showFunctions: true },
    jest: ['*.test.tsx'],
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
}

const themeWrapper = (Story, StoryComponentInfo) => {
    return (
        <ChakraProvider theme={theme}>
            <Box mt="20px" w="100%">
                <Story />
            </Box>
        </ChakraProvider>
    )
}

export const decorators = [
    withTests({ results }),
    jsxDecorator,
    withHTML,
    themeWrapper,
]
