import { Button } from '@chakra-ui/react'
import { ComponentProps } from 'react'

export interface ButtonChakraUIPropOverrides {
    button?: Omit<
        ComponentProps<typeof Button>,
        'className' | 'id' | 'onClick' | 'type' | 'backgroundColor'
    >
}

export interface ButtonProps {
    btnText: string
    onClickHandler?: () => void
    btnType?: 'button' | 'submit' | 'reset'
    appendToBtnId: number
    anchorHref?: string
    brandColor?: string
    disableChakraStyles?: boolean
    chakraUIPropOverrides?: ButtonChakraUIPropOverrides
}
