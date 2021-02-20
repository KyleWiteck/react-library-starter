import { Box, FormLabel, useRadioGroup } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from '../common/LabelPositionWrapper/LabelPositionWrapper'
import { ImagePickerProps } from './ImagePicker.types'
import ImagePickerOption from './ImagePickerOption/ImagePickerOption'

const ImagePicker = (props: ImagePickerProps) => {
    // props
    const {
        onSelectedOption,
        id,
        value,
        validationMessage,
        label,
        disableChakraStyles,
        chakraUIPropOverrides,
        autoFocus,
        labelPosition,
        options,
        defaultValue,
        onBlur,
    } = props

    // state
    const [selectedValue, setSelectedValue] = useState<
        string | number | undefined
    >(undefined)

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: value,
        onChange: (nextValue: string | number) => {
            setSelectedValue(nextValue)
            onSelectedOption(nextValue)
        },
    })

    const group = getRootProps()

    // refs
    const callbackRef = useCallback((radio: HTMLDivElement) => {
        if (!radio || selectedValue || !autoFocus) return
        radio.focus()
    }, [])

    useEffect(() => {
        if (value && !defaultValue) return

        setSelectedValue(defaultValue)
    }, [])

    return (
        <Box
            as="fieldset"
            id={id}
            className="form-field"
            {...(!disableChakraStyles && {
                ...defaultFieldSetStyles,
                m: 0,
                ...chakraUIPropOverrides?.formFieldWrapperFormControl,
            })}
            onBlur={(e) => onBlur((e.target as any).value)}
        >
            <LabelPositionWrapper position={labelPosition}>
                <>
                    {label && (
                        <FormLabel
                            as="legend"
                            className="form-field__label"
                            {...(!disableChakraStyles && {
                                ...defaultFormLabelStyles(labelPosition),
                                ml: labelPosition === 'right' ? undefined : 0,
                                mt:
                                    labelPosition === 'right' || 'left'
                                        ? '1em'
                                        : undefined,
                                ...chakraUIPropOverrides?.labelText,
                            })}
                        >
                            {label}
                        </FormLabel>
                    )}
                    <Box
                        className="radio-group"
                        {...(group as any)}
                        {...(!disableChakraStyles && {
                            d: 'flex',
                            justifyContent: 'flex-start',
                            alignContent: 'space-between',
                            ...chakraUIPropOverrides?.radioGroupHStack,
                        })}
                    >
                        {options.map((option, index) => {
                            const label = option.label
                            const value = option.value
                            const img = option.img
                            const radio = getRadioProps({
                                value: value,
                                enterKeyHint: value,
                            })

                            if (selectedValue === value)
                                radio['isChecked'] = true
                            const isSelected = selectedValue
                                ? radio['isChecked']
                                : defaultValue === value
                                ? true
                                : false

                            return (
                                <ImagePickerOption
                                    key={value}
                                    label={label}
                                    id={label}
                                    {...radio}
                                    isSelected={isSelected}
                                    grayOut={
                                        selectedValue
                                            ? value === selectedValue
                                                ? false
                                                : true
                                            : false
                                    }
                                    img={img}
                                    refCallBack={
                                        !selectedValue && index === 0
                                            ? callbackRef
                                            : undefined
                                    }
                                    chakraUIPropOverrides={
                                        chakraUIPropOverrides?.ImagePickerOverrides ??
                                        undefined
                                    }
                                    disableChakraStyles={disableChakraStyles}
                                />
                            )
                        })}
                    </Box>
                </>
            </LabelPositionWrapper>
            {validationMessage && (
                <FormValidationMessage
                    errorMessage={validationMessage}
                    {...(!disableChakraStyles && {
                        ...chakraUIPropOverrides?.formValidationText,
                    })}
                />
            )}
        </Box>
    )
}

export default ImagePicker
