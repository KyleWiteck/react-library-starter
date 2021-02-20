import { Select } from '@chakra-ui/react'
import { CommonInputChakraOverrides, CommonInputProps } from 'global.types'
import { ComponentProps, ReactText } from 'react'

export type SelectOption = {
    label: string
    value: any
}

export interface SelectChakraUIPropOverrides
    extends Omit<CommonInputChakraOverrides, 'inputProps'> {
    selectProps?: Omit<
        ComponentProps<typeof Select>,
        | 'children'
        | 'onClick'
        | 'placeholder'
        | 'id'
        | 'value'
        | 'onChange'
        | 'name'
        | 'autoFocus'
        | 'ref'
        | 'defaultValue'
    >
}

export interface SelectProps extends CommonInputProps {
    value: ReactText | undefined
    onChange: (value: string | number) => void
    chakraUIPropOverrides?: SelectChakraUIPropOverrides
    placeholder?: string
    options: SelectOption[]
}
