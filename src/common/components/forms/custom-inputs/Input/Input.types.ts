import { Input } from '@chakra-ui/react'
import { CommonInputChakraOverrides, CommonInputProps } from 'global.types'
import IMask from 'imask'
import { ChangeEvent, ComponentProps } from 'react'

export interface InputChakraUIPropOverrides
    extends Omit<CommonInputChakraOverrides, 'inputProps'> {
    inputProps?: Omit<
        ComponentProps<typeof Input>,
        | 'children'
        | 'onClick'
        | 'placeholder'
        | 'id'
        | 'value'
        | 'onChange'
        | 'name'
        | 'autoFocus'
        | 'defaultValue'
    >
}

export interface InputProps extends CommonInputProps {
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    chakraUIPropOverrides?: InputChakraUIPropOverrides
    iMaskCreateMaskConfig?: IMask.AnyMaskedOptions
    placeholder?: string
    inputType?: string
}
