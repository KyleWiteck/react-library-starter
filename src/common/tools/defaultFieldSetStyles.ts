import { Box, FormLabel, Input } from '@chakra-ui/react'
import { PositionUnion } from 'common/components/forms/custom-inputs/common/LabelPositionWrapper/LabelPositionWrapper.types'
import { ComponentProps } from 'react'

export const labelMargin = (labelPosition?) => {
    if (labelPosition === 'left') return '0 1.2em 0 0'
    if (labelPosition === 'right') return '0 0 0 1.2em'
    if (labelPosition === 'bottom') return '1.6em 0 0 0'

    return '0 0 0.8em 0'
}

export type DefaultFormLabelStyles = (
    labelPosition?: PositionUnion
) => Omit<ComponentProps<typeof FormLabel>, 'children'>

export const defaultFormLabelStyles: DefaultFormLabelStyles = (
    labelPosition?: PositionUnion
) => {
    return {
        margin: labelMargin(labelPosition),
        lineHeight: '1em',
        fontSize: '1em',
        color: '#222',
        fontWeight: 'bold',
        d: 'inline-block',
    }
}

export const defaultInputStyles: Omit<
    ComponentProps<typeof Input>,
    'children'
> = {
    height: '2.5em',
    padding: '0.2 0.5em',
    color: '#222',
    _placeholder: { color: '#51555c' },
    fontSize: '1em',
    backgroundColor: '#fcfcfc',
    borderColor: '#f1f1f1',
    boxSizing: 'border-box',
    borderRadius: '0.3rem',
    border: '1px solid #dee2e6',
    flexGrow: 1,
    errorBorderColor: 'tomato',
    m: 0,
}

export const defaultFieldSetStyles: Omit<
    ComponentProps<typeof Box>,
    'children'
> = {
    flexDir: 'column',
    justifyContent: 'flex-start',
    fontSize: '1em',
    w: { base: '100%', xl: '48%' },
    m: '0 0 1.8em',
}
