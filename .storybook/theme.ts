import { create } from '@storybook/theming/create'

export default create({
    base: 'light',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#4d66ff',
    barSelectedColor: '#28a864',
    barBg: 'white',

    brandTitle: 'React Library Starter',
    brandUrl: undefined,
    brandImage: undefined,
})
