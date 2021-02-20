import { Box, Image, Text, useRadio } from '@chakra-ui/react'
import React from 'react'
import { ImagePickerOptionProps } from './ImagePickerOption.types'

const ImagePickerOption = (props: ImagePickerOptionProps) => {
    // props
    const {
        id,
        label,
        img,
        grayOut,
        chakraUIPropOverrides,
        disableChakraStyles,
        isSelected,
        refCallBack,
    } = props
    // custom hooks
    const { getInputProps, getCheckboxProps } = useRadio(props)
    // state

    // refs

    // useEffects

    // Unique Functions
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    const labelID = label.toLowerCase().replace(/ /g, '-')

    return (
        <Box
            as="label"
            className="option-label-wrapper"
            onKeyDown={(e: React.KeyboardEvent<any>) => {
                e.defaultPrevented
                if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click()
            }}
            ref={refCallBack ? (el) => refCallBack(el) : undefined}
            id={labelID + '__option-label-wrapper'}
            {...(!disableChakraStyles && {
                tabIndex: 0,
                'aria-label': label,
                'aria-checked': isSelected,
                m: '1em 1em 0 0',
                w: 'auto',
                ...chakraUIPropOverrides?.optionLabelWrapperBox,
            })}
        >
            <input tabIndex={-1} {...{ ...input, checked: isSelected }} />
            <Box
                className="option-content-wrapper"
                cursor="pointer"
                aria-checked={isSelected}
                id={id + '__option-content-wrapper'}
                {...(checkbox as any)}
                {...(!disableChakraStyles && {
                    mr: '0',
                    opacity: grayOut ? 0.5 : 1,
                    borderColor: 'uqGray.500',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    bg: '#fff',
                    minW: '138px',
                    maxW: '138px',
                    minH: '116px',
                    maxH: '116px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '4px',
                    p: '19px',
                    pos: 'relative',
                    _checked: {
                        borderColor: 'green',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        backgroundColor: 'green',
                    },
                    _focus: {
                        boxShadow: 'outline',
                    },
                    ...chakraUIPropOverrides?.optionWrapperUiBox,
                })}
            >
                {!isSelected && img && (
                    <Image
                        loading="eager"
                        className="option-img"
                        src={img}
                        display={!isSelected && img ? 'block' : 'none'}
                        id={labelID + '_option-img'}
                        {...(!disableChakraStyles && {
                            minW: '40px',
                            maxW: '67px',
                            minH: '40px',
                            maxH: '67px',
                            mx: 'auto',
                            ...chakraUIPropOverrides?.optionImage,
                        })}
                    />
                )}

                {!isSelected && !img && (
                    <Box
                        className="option-image-placeholder"
                        id={labelID + '_option-image-placeholder'}
                        {...(!disableChakraStyles && {
                            bg: 'uqGray.500',
                            minW: '40px',
                            maxW: '40px',
                            minH: '40px',
                            maxH: '40px',
                            mx: 'auto',
                            borderRadius: '100%',
                            ...chakraUIPropOverrides?.imagePlaceholderBox,
                        })}
                    />
                )}

                {isSelected && (
                    <Box
                        className="option-checked"
                        id={labelID + '_option-checked'}
                        {...(!disableChakraStyles && {
                            borderColor: 'green',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'green',
                            fontSize: '25px',
                            minW: '40px',
                            maxW: '40px',
                            minH: '40px',
                            maxH: '40px',
                            mx: 'auto',
                            borderRadius: '100%',
                            ...chakraUIPropOverrides?.optionCheckedBox,
                        })}
                    >
                        &#10003;
                    </Box>
                )}
                <Text
                    className="option-label"
                    id={labelID + '_option-label'}
                    {...(!disableChakraStyles && {
                        color: 'uqGray.600',
                        textAlign: 'center',
                        p: '0',
                        ...chakraUIPropOverrides?.boxLabelText,
                    })}
                >
                    {label}
                </Text>
            </Box>
        </Box>
    )
}

export default ImagePickerOption
