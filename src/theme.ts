import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const gray = {
    100: '#f9f9f9',
    200: '#F8FCFB',
    300: '#F4F9FA',
    400: '#dee2e6',
    500: '#97969B',
    600: '#79787C',
}

export const customBreakpoints = {
    base: '0',
    xs: '250px',
    sm: '300px',
    md: '400px',
    lg: '620px',
    xl: '760px',
    xxl: '900px',
}

const breakpoints = createBreakpoints(customBreakpoints)

const customTheme = extendTheme({
    colors: {
        gray,
    },
    breakpoints,
    sizes: {
        inputHeight: '48px',
        full: '100%',
        '3xs': '14rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
    },
    fonts: {
        body: 'Source Sans Pro, sans',
        heading: 'freight-text-pro, serif',
        mono: 'Menlo, monospace',
    },
    fontSizes: {
        headingSm: '36px',
        headingLg: '48px',
        textXs: '12px',
        textSm: '14px',
        textMd: '18px',
        textLg: '21px',
        textXl: '24px',
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.15em',
    },
})

export default customTheme
