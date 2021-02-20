import { Box, Image } from '@chakra-ui/react'
import { ComponentProps } from 'react'

export interface ImagePickerOptionChakraUIPropOverrides {
    optionLabelWrapperBox?: Omit<
        ComponentProps<typeof Box>,
        'children' | 'className' | 'onKeyDown' | 'ref' | 'as'
    >
    optionWrapperUiBox?: Omit<ComponentProps<typeof Box>, 'children'>
    optionImage?: Omit<ComponentProps<typeof Image>, 'children'>
    imagePlaceholderBox?: Omit<ComponentProps<typeof Box>, 'children'>
    optionCheckedBox?: Omit<ComponentProps<typeof Box>, 'children'>
    boxLabelText?: Omit<ComponentProps<typeof Box>, 'children'>
}

export interface ImagePickerOptionProps {
    id: string
    label: string
    img?: string
    grayOut?: boolean
    chakraUIPropOverrides?: ImagePickerOptionChakraUIPropOverrides
    autoFocus?: boolean
    disableChakraStyles?: boolean
    isSelected?: boolean | undefined
    refCallBack?: (radio: HTMLDivElement) => void
}
