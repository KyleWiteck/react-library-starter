import { FormControl, HStack, RadioProps, Text } from '@chakra-ui/react'
import { CommonInputProps } from 'global.types'
import { ComponentProps } from 'react'
import { FormValidationMessagechakraUIPropOverrides } from '../common/FormValidationMessage/FormValidationMessage.types'
import { ImagePickerOptionChakraUIPropOverrides } from './ImagePickerOption/ImagePickerOption.types'

export type radioSelection = {
    id: string
    label: string
    value: any
    img?: string
}

export type ImagePickerOption = { label: string; value: string; img?: string }

export interface ImagePickerChakraUIPropOverrides {
    formFieldWrapperFormControl?: Omit<
        ComponentProps<typeof FormControl>,
        'children' | 'id' | 'className'
    >
    labelText?: Omit<
        ComponentProps<typeof Text>,
        'children' | 'id' | 'className'
    >
    radioGroupHStack?: Omit<
        ComponentProps<typeof HStack>,
        'children' | 'className' | 'role'
    >
    ImagePickerOverrides?: ImagePickerOptionChakraUIPropOverrides
    formValidationText?: FormValidationMessagechakraUIPropOverrides
}

export interface ImagePickerProps
    extends Omit<CommonInputProps, 'name' | 'customInputClassName'> {
    onSelectedOption: (
        value: number | string | undefined
    ) => React.Dispatch<React.SetStateAction<string>>
    value?: RadioProps['value'] | undefined
    chakraUIPropOverrides?: ImagePickerChakraUIPropOverrides
    options: ImagePickerOption[]
    defaultValue?: string
}
