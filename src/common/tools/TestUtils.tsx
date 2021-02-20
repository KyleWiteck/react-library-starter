import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import React from 'react'
import customTheme from '../../theme'

// Set up mocks global to all tests
window.scrollTo = jest.fn()

export const renderEnvironment = (ui: JSX.Element) => {
    const dom = render(
        <ChakraProvider theme={customTheme}>
            <CSSReset />
            <Box data-testid="component-wrapper">{ui}</Box>
        </ChakraProvider>
    )

    return dom
}
