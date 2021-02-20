import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { default as uqTheme } from '../../../theme'
import { ThemeProviderProps } from './ThemeProvider.types'

const ThemeProvider = (props: React.PropsWithChildren<ThemeProviderProps>) => {
    const { theme, ...rest } = props

    return (
        <ChakraProvider theme={theme ?? uqTheme} {...rest}>
            {props.children}
        </ChakraProvider>
    )
}

export default ThemeProvider
