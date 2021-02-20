import {
    Heading,
    Image,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react'
import { EnvironmentVariable } from 'global.types'
import { ComponentProps } from 'react'

export interface FullScreenLoaderChakraPropsOverrides {
    modal?: Omit<
        ComponentProps<typeof ModalOverlay>,
        'children' | 'onClose' | 'isOpen'
    >
    modalOverlay?: Omit<
        ComponentProps<typeof ModalOverlay>,
        'children' | 'className' | 'id'
    >
    modalContent?: Omit<
        ComponentProps<typeof ModalContent>,
        'children' | 'className'
    >
    modalBody?: Omit<ComponentProps<typeof ModalBody>, 'children'>
    modalBodyInnerContainerBox?: Omit<
        ComponentProps<typeof ModalBody>,
        'children' | 'className'
    >
    image?: Omit<
        ComponentProps<typeof Image>,
        'children' | 'className' | 'src' | 'alt' | 'd'
    >
    heading?: Omit<
        ComponentProps<typeof Heading>,
        'children' | 'className' | 'as'
    >
    subheading?: Omit<
        ComponentProps<typeof Heading>,
        'children' | 'className' | 'as'
    >
    lowerImage?: Omit<
        ComponentProps<typeof Image>,
        'children' | 'className' | 'src' | 'alt' | 'd'
    >
}

export interface FullScreenLoaderProps {
    configName: EnvironmentVariable
    modalText?: {
        heading?: {
            primary?: string | string[]
            secondary?: string | string[]
        }
        subHeading?: {
            primary?: string | string[]
            secondary?: string | string[]
        }
    }
    addClassName?: {
        heading?: string
        subheading?: string
        img?: string
        lowerImg?: string
    }
    imgSrc?: string
    lowerImgSrc?: string
    failHandler?: () => void
    chakraUIPropOverrides?: FullScreenLoaderChakraPropsOverrides
    disableChakraStyles?: boolean
    loadStatus?: {
        initialLoader: boolean
        secondaryLoader: boolean
        failed: boolean
    }
    failedErrorMsg
}
